import {api} from "../api/api-cats.js"
import Node from "./Node.js"
export default class Nodes {
    $target = null;
    $directories = [];
    constructor(target, directories) {
        this.$target = target
        this.$directories = directories
        const $nodes = document.createElement("section")
        $nodes.className = "Nodes"
        this.$nodes = $nodes
        this.$target.appendChild($nodes)
        this.renderDirectories()
        
    }

    renderDirectories(){
        this.$directories.forEach((item) => {
            new Node(this.$nodes, item, ()=>{
                api.fetchDirectory(item.id).then((response) =>{
                    console.log("response=== " + JSON.stringify(response))
                    this.setDirectories(response);
                })
            })
        })
    }

    setDirectories(directories){
        this.$nodes.innerHTML =''
        if(directories[0].parent){
            const element = document.createElement("img")
            element.src = `./assets/prev.png`
            element.addEventListener("click", ()=>{
                
            })
            this.$nodes.appendChild(element)
        }
        this.$directories = directories;
        this.renderDirectories();
    }
    
}
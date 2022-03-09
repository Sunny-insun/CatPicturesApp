
import {api} from "../api/api-cats.js"
import Nodes from "./Nodes.js";

export default class Node {
    $target = null;
    $item = null;
    $onClickEvent = null;
    constructor(target, item, onClickEvent) {
        this.$target = target;
        this.$item = item;
        this.$onClickEvent = onClickEvent;

        const $node = document.createElement("div")
        $node.className = "Node"
        this.$node = $node
        this.$target.appendChild($node)
        this.render()
    }

    //data setting
    //render
    render(){
      let element = ""

      switch(this.$item.type){
        case "DIRECTORY" : element = `<img src="./assets/directory.png">
        <div>${this.$item.name}</div>`
        break;
        case "FILE":  element = `<img src="./assets/file.png">
        <div>${this.$item.name}</div>`  
        break;
      }

      this.$node.innerHTML = element
      this.$node.addEventListener("click", (event) => {
        this.addNavigator()
        this.$onClickEvent()
      }) 
    }

    addNavigator(){
      const navigator = document.getElementById("Breadcrumb");
      const element = document.createElement("div")
      element.innerHTML = this.$item.name
      navigator.appendChild(element)
    }
}
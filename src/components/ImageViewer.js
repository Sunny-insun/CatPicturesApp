export default class ImageViewer{
    $target = null
    $data = null;
    constructor(target, data){
        this.$target = target
        this.$data = data
        const $imageViewer = document.createElement("div")
        $imageViewer.className = "Modal ImageViewer"
        this.$imageViewer = $imageViewer
        this.$target.appendChild(this.$imageViewer)
        this.render()
    }
    
    render(){
        if(!this.$data.visibility){
            this.$imageViewer.style.display = "none";
        }
        this.$breadcrumb.innerHTML = ` <div class="content">
        <img src="${item.filePath}"></div>`
    }
}
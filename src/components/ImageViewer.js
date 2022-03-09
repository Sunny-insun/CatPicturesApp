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
    
    setVisibility(isVisible) {
        if(isVisible){
            this.$imageViewer.style.display = "block"
        }else{
            this.$imageViewer.style.display = "none"
        }
    }

    render(){
        this.setVisibility(this.$data.visibility)
        this.$imageViewer.innerHTML = ` <div class="content">
        <img src="https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${this.$data.item.filePath}"></div>`
        
         //close from esc
      window.onkeyup = (e) => {
        if(e.key === "Escape"){
            this.setVisibility(false)
        }
      }
    
    }
}
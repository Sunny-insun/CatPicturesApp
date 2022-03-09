export default class LoadingModal {
    $target = null
    constructor(target) {
        this.$target = target
        const loadingModal = document.createElement("div")
        loadingModal.className = "Modal Loading"
        this.$loadingModal = loadingModal
        this.$target.appendChild(this.$loadingModal)
        this.render();
    }

    render(){
        this.$loadingModal.innerHTML = `<div class="content">
            <img src="./assets/nyan-cat.gif">
        </div>`
    }

    setVisibility(isVisible){
        if(!isVisible){
            this.$loadingModal.style.display = "none"
        }else{
            this.$loadingModal.style.display = "block"
        }
        
    }

    
}
export default class Breadcrumb{
    $target = null
    constructor(target){
        this.$target = target
        const $breadcrumb = document.createElement("nav")
        $breadcrumb.className = "Breadcrumb"
        $breadcrumb.id = "Breadcrumb";
        this.$breadcrumb = $breadcrumb
        this.$target.appendChild(this.$breadcrumb)
        this.render()
    }
    
    render(){
        this.$breadcrumb.innerHTML = `<div>root</div>`
    }
}
import Nodes from "./Nodes.js";
import Breadcrumb from "./Breadcrumb.js";
import {api} from "../api/api-cats.js";
import ImageViewer from "./ImageViewer.js";
import LoadingModal from "./LoadingModal.js";

console.log("app is running!");

export default class App {
  $target = null;
  $directories = [];
  constructor($target) {
    this.$target = $target;
    this.$Breadcrumb = new Breadcrumb($target);
    
  

    api.fetchDirectories().then((response) => {
      this.$Nodes = new Nodes(this.$target, response);
     
    })



    // this.imageViewer = new ImageViewer(this.$target, 
    //   {
    //     item:
    //     visibility: false,
    //   })
  }
}

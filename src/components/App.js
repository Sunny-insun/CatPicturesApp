import Nodes from "./Nodes.js";
import Breadcrumb from "./Breadcrumb.js";
import {api} from "../api/api-cats.js";

console.log("app is running!");

export default class App {
  $target = null;
  $directories = [];
  constructor($target) {
    this.$target = $target;
    this.$Breadcrumb = new Breadcrumb($target);
    
    //최초에 모든 directories
    api.fetchDirectories().then((response) => {
      this.$Nodes = new Nodes(this.$target, response);
    })
  }
}

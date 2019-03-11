/**
 * Created by jack on 2019/3/1.
 */
import Layer from "./components/layer/layer";
import "./css/common.css";
const APP = function () {
    // alert(layer);
    // console.log(layer);
    var dom = document.getElementById("app");

    var layer = new Layer();

    dom.innerHTML = layer.tpl({
        name: 'jack'
    });
}
new APP();
import tpl from "./layer.tpl";//需要写文件的绝对路径，写layer.html会导致webpack找不到文件
/*require("html-loader!./layer.tpl");*/
import './layer.less'
function layer() {
    return {
        name: 'layer',
        tpl: tpl
    }
}

export default layer;
// src/index.js
// 这里import 的 btn和btnDemo.vue的name属性名相同 ！

import blockMenu from './block-meun.vue'

blockMenu.install = Vue => Vue.component(blockMenu.name, blockMenu) // 给组件配置install方法 

export default blockMenu;

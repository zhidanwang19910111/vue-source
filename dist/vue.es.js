function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    console.log('init completed');
  };
}

/* 
  Vue 构造函数
*/
function Vue(options) {
  if(!this instanceof Vue) {
    console.warn("Vue 是一个构造器，不许用 'new' 关键字执行");
    return;
  }
  this._init(options);
}

initMixin(Vue);

export default Vue;

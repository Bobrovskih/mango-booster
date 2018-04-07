const self = this;
$.get(SERVER + 'main.js').then(js => eval.call(self, js));
console.log('background loaded');
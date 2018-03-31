$.get(SERVER + 'main.js').then(js => eval(js));
console.log('background loaded');
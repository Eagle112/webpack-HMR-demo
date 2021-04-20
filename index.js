import hello from './hello.js'
const div = document.createElement('div')
div.innerHTML = hello()

console.log(1232)
document.body.appendChild(div)
if(module.hot) {
  module.hot.accept(['./hello.js','./index.js'], function() {
      // div.innerHTML = hello()
  })
}
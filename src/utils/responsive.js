/**
 * rem响应式方案的实现
 */
let win = global
let doc = win.document
let baseWidth = 750
let documentHTML = doc.documentElement

function setRootFont () {
  let docWidth = documentHTML.getBoundingClientRect().width
  let scale = docWidth / baseWidth
  if (docWidth > baseWidth && docWidth > 750) {
    scale = 1
  }
  documentHTML.style.fontSize = `${scale * 100}px`
}

setRootFont()
win.addEventListener('resize', setRootFont, false)

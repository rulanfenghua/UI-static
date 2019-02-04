cc.Class({
  extends: cc.Component,

  properties: {

  },

  init(home, parentBtns) {
    this.home = home
    this.parentBtns = parentBtns
  },
  show() {
    this.node.active = true
    this.node.emit('fade-in')
    this.home.toggleHomeBtns(false)
    cc.eventManager.pauseTarget(this.parentBtns)
  },
  hide() {
    this.node.emit('fade-out')
    this.home.toggleHomeBtns(true)
    cc.eventManager.resumeTarget(this.parentBtns)
  }
})

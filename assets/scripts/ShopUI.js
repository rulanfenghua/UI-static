const ChargeUI = require('ChargeUI')

cc.Class({
  extends: cc.Component,

  properties: {
    anim: cc.Animation,
    figure: cc.Sprite,
    btnsNode: cc.Node,
    ChargeUI: ChargeUI
  },

  init(home, panelType) {
    this.home = home
    this.node.active = false
    this.anim.play('shop_reset')
    this.panelType = panelType
    this.figure.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1, 0.96), cc.scaleTo(1, 1, 1))))
    this.ChargeUI.init(home, this.btnsNode)
  },
  show() {
    this.node.active = true
    this.anim.play('shop_intro')
  },
  hide() {
    this.anim.play('shop_outro')
  },
  onFinishShow() {
    this.home.curPanel = this.panelType
  },
  onFinishHide() {
    this.node.active = false
  }
})

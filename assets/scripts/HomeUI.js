const BackPackUI = require('BackPackUI')
const ShopUI = require('ShopUI')

const PanelType = cc.Enum({
  Home: -1,
  Shop: -1
})

cc.Class({
  extends: cc.Component,

  properties: {
    menuAnim: {
      default: null,
      type: cc.Animation
    },
    homeBtnGroups: {
      default: [],
      type: cc.Node
    },
    BackPackUI: {
      default: null,
      type: BackPackUI
    },
    ShopUI: ShopUI
  },

  onLoad() {
    this.curPanel = PanelType.Home
    this.menuAnim.play('menu_reset')
  },
  start() {
    this.BackPackUI.init(this)
    this.ShopUI.init(this, PanelType.Shop)
    this.scheduleOnce(function() {
      this.menuAnim.play('menu_intro')
    }.bind(this), 0.5)
  },
  toggleHomeBtns(enable) {
    for (let i = 0; i < this.homeBtnGroups.length; ++i) {
      let group = this.homeBtnGroups[i]
      if (!enable) {
        cc.eventManager.pauseTarget(group, true)
      } else {
        cc.eventManager.resumeTarget(group, true)
      }
    }
  },
  gotoShop() {
    if (this.curPanel !== PanelType.Shop) {
      this.ShopUI.show()
    }
  },
  gotoHome() {
    if (this.curPanel === PanelType.Shop) {
      this.ShopUI.hide()
      this.curPanel = PanelType.Home
    }
  }
})

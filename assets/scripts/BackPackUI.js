cc.Class({
  extends: cc.Component,

  properties: {
    slotPrefab: {
      default: null,
      type: cc.Prefab
    },
    scrollView: {
      default: null,
      type: cc.ScrollView
    },
    totalCount: 0
  },

  init(home) {
    this.heroSlots = []
    this.home = home
    for (let i = 0; i < this.totalCount; ++i) {
      let heroSlot = this.addHeroSlot()
      this.heroSlots.push(heroSlot)
    }
  },
  addHeroSlot() {
    let heroSlot = cc.instantiate(this.slotPrefab)
    this.scrollView.content.addChild(heroSlot)
    return heroSlot
  },
  show() {
    this.node.active = true
    this.node.emit('fade-in')
    this.home.toggleHomeBtns(false)
  },
  hide() {
    this.node.emit('fade-out')
    this.home.toggleHomeBtns(true)
  }
})

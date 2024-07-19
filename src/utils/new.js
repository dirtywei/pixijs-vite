import { Application, Assets, Container, Sprite, utils } from 'pixi.js'
import gsap from 'gsap'
import { spriteArr } from '@/utils/spriteConfig'
import { getAssetsFile } from './common'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

export class webglGame {
  constructor(options) {
    this.uiWidth = 1500
    this.uiHeight = 750
    this.app = new Application({
      resizeTo: window,
      resolution: 2,
      antialias: true, // 消除锯齿
      backgroundAlpha: 0,
      autoDensity: true
    })
    this.rooContainer = options.container

    this.rooContainer.appendChild(this.app.view)

    this.container = new Container()
    this.mainContainer = new Container()
    this.yinContainer = new Container()
    this.container.addChild(this.mainContainer)
    this.app.stage.addChild(this.container)

    window.addEventListener('resize', this.rendererResize.bind(this), false)
    this.rendererResize()
    this.load()
  }
  getOrientation() {
    const mql = window.matchMedia('(orientation: portrait)')
    return mql.matches ? 'portrait' : 'landscape'
  }
  rendererResize() {
    let style = ''
    const clientWidth = Math.max(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    )
    const clientHeight = Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    )
    const ratio = clientHeight / this.uiHeight
    this.container.x = (clientWidth - this.uiWidth * ratio) / 2
    if (this.getOrientation() === 'portrait') {
      this.app.stage.rotation = Math.PI / 2
      this.app.stage.pivot.set(0, clientHeight)
      this.app.renderer.resize(clientHeight, clientWidth)

      style = `
      width: ${clientWidth}px;
      height: ${clientHeight}px;
      -webkit-transform: rotate(90deg); transform: rotate(90deg);
      -webkit-transform-origin: ${clientHeight / 2}px ${clientHeight / 2}px;
      transform-origin: ${clientHeight / 2}px ${clientHeight / 2}px;
    `
      document.getElementsByClassName('sl-frame')[0].style = style
    } else {
      this.app.stage.rotation = 0
      this.app.stage.pivot.set(0, 0)
      this.app.renderer.resize(clientWidth, clientHeight)

      style = `
      width: ${clientWidth}px;
      height: ${clientHeight}px;
      -webkit-transform: rotate(0); transform: rotate(0);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    `
      document.getElementsByClassName('sl-frame')[0].style = style
    }

    this.container.scale.set(ratio)
  }
  async load() {
    await Assets.load(spriteArr, (progress) => {
      const percent = Math.floor(progress * 100)
      userStore.progress = percent
      if (percent === 100) {
        userStore.setStep('main')
      }
    })
    //注册fade效果
    gsap.registerEffect({
      name: 'fade',
      effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, alpha: 0, visible: false })
      },
      defaults: { duration: 3 }
    })
    this.initMain()
  }
  initMain() {
    //背景图
    const mainBg = new Sprite(utils.TextureCache[getAssetsFile('img/main/bg.png')])
    mainBg.width = 1500
    mainBg.height = 750
    this.mainContainer.addChild(mainBg)
    //slogan
    const slogan = new Sprite(utils.TextureCache[getAssetsFile('img/main/slogan.png')])
    slogan.width = 1000
    slogan.height = 500
    slogan.anchor.set(0.5, 0.5)
    slogan.x = this.uiWidth / 2
    slogan.y = this.uiHeight / 2 - 130

    this.mainContainer.addChild(slogan)
  }
  initYin() {
    //背景图
    const yinBg = new Sprite(utils.TextureCache[getAssetsFile('img/loading/bg.png')])
    yinBg.width = 1500
    yinBg.height = 750
    this.yinContainer.addChild(yinBg)

    const waiImg = new Sprite(utils.TextureCache[getAssetsFile('img/yin/wai.png')])
    waiImg.width = 1000
    waiImg.height = 791
    waiImg.anchor.set(0.5, 0.5)
    waiImg.x = this.uiWidth / 2
    waiImg.y = this.uiHeight / 2
    this.yinContainer.addChild(waiImg)

    const neiImg = new Sprite(utils.TextureCache[getAssetsFile('img/yin/nei.png')])
    neiImg.width = 960
    neiImg.height = 790
    neiImg.anchor.set(0.5, 0.5)
    neiImg.x = this.uiWidth / 2
    neiImg.y = this.uiHeight / 2

    this.yinContainer.addChild(neiImg)

    // const textImg = new Sprite(utils.TextureCache[getAssetsFile('img/yin/text.png')])
    // textImg.width = 800
    // textImg.height = 342.2
    // textImg.anchor.set(0.5, 0.5)
    // textImg.x = this.uiWidth / 2
    // textImg.y = this.uiHeight / 2
    // this.yinContainer.addChild(textImg)

    gsap.effects.fade(this.mainContainer)
    this.container.addChild(this.yinContainer)
    this.yinContainer.interactive = true
    this.yinContainer.on('top', () => {
      userStore.setStep('content1')
    })

    gsap.to(
      waiImg,

      { duration: 6, rotation: Math.PI * 2, repeat: -1, ease: 'none' }
    )
    gsap.to(
      neiImg,

      { duration: 6, rotation: -Math.PI * 2, repeat: -1, ease: 'none' }
    )
  }
  initSprite(config) {
    const neiImg = new Sprite(config.texture)
    neiImg.width = config.width
    neiImg.height = config.height
    neiImg.anchor.set(config.anchorX, config.anchorY)
    neiImg.x = config.x
    neiImg.y = config.y

    return neiImg
  }
}

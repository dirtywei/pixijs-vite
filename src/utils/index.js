import { Application, Assets, utils, Sprite, Container } from 'pixi.js'
import { getAssetsFile, detectOrient } from './common'
import { spriteArr } from '@/utils/spriteConfig'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
export class webglGame {
  constructor(options) {
    this.width = options.width || window.innerWidth // 场景宽
    this.height = options.height || window.innerHeight // 场景高
    this.container = options.container

    this.app = new Application({
      // width: this.width,
      // height: this.height,
      resizeTo: window,
      resolution: 2,
      antialias: true, // 消除锯齿
      backgroundAlpha: 0,
      autoDensity: true
    })
    this.container.appendChild(this.app.view)
    this.rooContainer = new Container()
    this.app.stage.addChild(this.rooContainer)

    this.rooContainer.width = 1500
    this.rooContainer.height = 750

    const resolution = Math.min(this.app.screen.width, this.app.screen.height) / 750
    this.rooContainer.scale.set(resolution)
    this.rooContainer.x = (this.app.screen.width - 1500 * resolution) / 2

    const that = this
    window.addEventListener('resize', function () {
      detectOrient(that.rooContainer, that.app)
    })
    detectOrient(this.rooContainer, this.app)

    this.load()
  }

  async load() {
    await Assets.load(spriteArr, (progress) => {
      const percent = Math.floor(progress * 100)
      userStore.progress = percent
    })
    this.initMain()
  }
  initMain() {
    const mainBg = new Sprite(utils.TextureCache[getAssetsFile('img/main/bg.png')])
    mainBg.width = 1500
    mainBg.height = 750
    this.rooContainer.addChild(mainBg)
  }
}

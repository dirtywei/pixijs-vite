export const detectOrient = (container, app, uiWidth = 1500) => {
  const clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight
  console.log(clientWidth, clientHeight)
  let $wrapper = document.getElementById('app')
  let style = ''
  let resolution = 1
  if (getOrientation() == 'portrait') {
    resolution = Math.min(clientWidth, clientHeight) / 750
    style = `
      width: ${clientHeight}px;
      height: ${clientWidth}px;
      -webkit-transform: rotate(90deg); transform: rotate(90deg);
      -webkit-transform-origin: ${clientWidth / 2}px ${clientWidth / 2}px;
      transform-origin: ${clientWidth / 2}px ${clientHeight / 2}px;
    `

    container.scale.set(resolution)
    app.renderer.resize(clientHeight, clientWidth / resolution)

    container.x = (app.screen.width - uiWidth * resolution) / 2
  } else {
    style = `
      width: ${clientWidth}px;
      height: ${clientHeight}px;
      -webkit-transform: rotate(0); transform: rotate(0);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    `
    resolution = Math.min(clientWidth, clientHeight) / 750
    container.scale.set(resolution)
    app.renderer.resize(clientWidth, clientHeight)
    container.x = (app.screen.width - uiWidth * resolution) / 2
  }
  $wrapper.style.cssText = style
}

export const getOrientation = () => {
  const mql = window.matchMedia('(orientation: portrait)')
  return mql.matches ? 'portrait' : 'landscape'
}

// 获取assets静态资源
export const getAssetsFile = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}

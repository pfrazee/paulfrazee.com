import {render} from 'dat://pauls-uikit.hashbase.io/js/dom.js'
import * as FlexCom from 'dat://pauls-uikit.hashbase.io/js/com/flex.js'
import * as CroppedImgCom from 'dat://pauls-uikit.hashbase.io/js/com/cropped-img.js'
import * as NavCom from 'dat://pauls-uikit.hashbase.io/js/com/nav.js'
import * as FlyerCom from 'dat://pauls-uikit.hashbase.io/js/com/flyer.js'

class SiteLayout extends HTMLElement {
  constructor() {
    super()
    var shadow = this.attachShadow({mode: 'open'})
    shadow.append(render(`
      <link rel="stylesheet" href="/lib/common.css" />
      <link rel="stylesheet" href="dat://pauls-uikit.hashbase.io/font-awesome/css/all.css">
      <div class="page-layout">
        <pauls-flex-columns>
          <pauls-flex-column class="page-left-sidenav">
            <a href="/">
              <pauls-cropped-img class="avatar" contain src="/media/avatars/current.jpg" width="260px" height="260px"></pauls-cropped-img>
            </a>
            <pauls-nav>
              <pauls-nav-item href="/">Status updates<span class="icon"><i class="far fa-fw fa-comment-alt"></i></span></pauls-nav-item>
              <pauls-nav-item href="/blog">Blog posts<span class="icon"><i class="far fa-fw fa-file-alt"></i></span></pauls-nav-item>
              <pauls-nav-item href="/photos">Photo albums<span class="icon"><i class="fas fa-images"></i></span></pauls-nav-item>
              <pauls-nav-item href="/modules">Modules<span class="icon"><i class="fas fa-fw fa-cubes"></i></span></pauls-nav-item>
              <pauls-nav-item href="/about">About<span class="icon"><i class="fas fa-fw fa-info-circle"></i></span></pauls-nav-item>
            </pauls-nav>
          </pauls-flex-column>

          <pauls-flex-column flex="2">
            <slot></slot>
          </pauls-flex-column>

          <pauls-flex-column class="page-right-sidenav">
            <pauls-flyer src="/flyers.json"></pauls-flyer>
            <pauls-flyer src="/flyers.json"></pauls-flyer>
            <pauls-flyer src="/flyers.json"></pauls-flyer>
            <pauls-flyer src="/flyers.json"></pauls-flyer>
            <pauls-flyer src="/flyers.json"></pauls-flyer>
            <pauls-flyer src="/flyers.json"></pauls-flyer>
          </pauls-flex-column>
        </pauls-flex-columns>
      </div>
    `))
  }
}

customElements.define('pauls-site-layout', SiteLayout)
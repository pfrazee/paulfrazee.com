import {render} from 'dat://pauls-uikit.hashbase.io/js/dom.js'
import * as FlexCom from 'dat://pauls-uikit.hashbase.io/js/com/flex.js'
import * as CroppedImgCom from 'dat://pauls-uikit.hashbase.io/js/com/cropped-img.js'
import * as NavCom from 'dat://pauls-uikit.hashbase.io/js/com/nav.js'
import * as FlyerCom from 'dat://pauls-uikit.hashbase.io/js/com/flyer.js'
import * as PaulsSocialProfileMinicardCom from 'dat://pauls-uikit.hashbase.io/js/com/social-profile-minicard.js'

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
            <div class="sticky">
              <pauls-social-profile-minicard src="${window.location.origin}"></pauls-social-profile-minicard>
              <pauls-nav>
                <pauls-nav-item href="/"><span class="icon"><i class="far fa-fw fa-comment-alt"></i></span>Status updates</pauls-nav-item>
                <pauls-nav-item href="/blog"><span class="icon"><i class="far fa-fw fa-file-alt"></i></span>Blog posts</pauls-nav-item>
                <pauls-nav-item href="/photos"><span class="icon"><i class="fas fa-images"></i></span>Photo albums</pauls-nav-item>
                <pauls-nav-item href="/contacts"><span class="icon"><i class="fas fa-fw fa-address-book"></i></span>Contacts</pauls-nav-item>
                <pauls-nav-item href="/about"><span class="icon"><i class="fas fa-fw fa-info-circle"></i></span>About</pauls-nav-item>
              </pauls-nav>
            </div>
          </pauls-flex-column>

          <pauls-flex-column flex="2">
            <slot></slot>
          </pauls-flex-column>

          <pauls-flex-column class="page-right-sidenav">
            <div class="sticky">
              <div class="flyers">
                <p><strong>links</strong></p>
                <pauls-flyer src="/flyers.json"></pauls-flyer>
                <pauls-flyer src="/flyers.json"></pauls-flyer>
                <pauls-flyer src="/flyers.json"></pauls-flyer>
              </div>
            </div>
          </pauls-flex-column>
        </pauls-flex-columns>
      </div>
    `))
  }
}

customElements.define('pauls-site-layout', SiteLayout)
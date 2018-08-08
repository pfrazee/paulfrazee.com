import {$, render} from 'dat://pauls-uikit.hashbase.io/js/dom.js'

class BlogListing extends HTMLElement {
  constructor() {
    super()
    this.renderShell()
    this.loadContent()
  }

  get isAlbumsListing () {
    // TODO
    return true
  }

  renderShell () {
    var shadow = this.attachShadow({mode: 'open'})
    shadow.append(render(`
      <style>
        .photo-albums-grid {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 1fr 1fr;
        }
      </style>
      <div class="photo-albums-grid">
        <pauls-photo-album-cover src="/media/photo-albums/jsconfeu-2018.json"></pauls-photo-album-cover>
      </div>
    `))
  }

  async loadPosts () {
    var postsRes = await fetch('/blog-posts.json')
    var posts = await postsRes.json()
    for (let post of posts) {
      let li = render('<li><span class="date"><span></span><span></span><span></span></span> <a></a></li>')
      $(li, '.date').textContent = post.date
      $(li, 'a').setAttribute('href', post.href)
      $(li, 'a').textContent = post.title
      $(this.shadowRoot, 'ul').append(li)
    }
  }
}

customElements.define('pauls-photo-page', BlogListing)
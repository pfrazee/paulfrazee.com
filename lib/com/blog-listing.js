import {$, render} from 'dat://pauls-uikit.hashbase.io/js/dom.js'

class BlogListing extends HTMLElement {
  constructor() {
    super()
    this.renderShell()
    this.loadPosts()
  }

  renderShell () {
    var shadow = this.attachShadow({mode: 'open'})
    shadow.append(render(`
      <style>
        ul {
          list-style: none;
          padding: 0;
          margin: 5px 0;
        }
        li {
          margin: 0 0 6px;
        }
        .date {
          display: inline-block;
          font-size: 12px;
          width: 75px;
          padding-right: 5px;
          text-align: right;
        }
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
      <ul></ul>
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

customElements.define('pauls-blog-listing', BlogListing)
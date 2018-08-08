import {$, render} from 'dat://pauls-uikit.hashbase.io/js/dom.js'

window.addEventListener('load', e => {
  addFritterLink()
})

function addFritterLink () {
  var url = window.location.toString()
  $('pauls-site-layout').shadowRoot.querySelector('.page-right-sidenav').append(render(`
    <p>
      <small><a href="dat://fritter.hashbase.io/user/${url}" target="_blank"><i class="fas fa-external-link-alt"></i> on Fritter</a></small>
    </p>
  `))
}
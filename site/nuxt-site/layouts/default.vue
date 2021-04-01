<template>
  <div>
    <nav class="navbar header has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h2>Hasund og Dimnøy</h2>
          <!-- <img src="~assets/buefy.png" alt="Buefy" height="28" /> -->
        </a>
        
      </div>
      <div class="navbar-end">
          <!-- navbar items -->
          <a class="navbar-item">Forside</a>
          <a class="navbar-item">Informasjon</a>
          <a class="navbar-item">Program</a>
        </div>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
    </nav>

    <section class="main-content columns">
      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" />
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>-->

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<template>
  <header id="header">
    <h2 class="header__nav">Dodds</h2>
    <div class="hero__navBtn" aria-label="Navigation Button">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <nav>
      <ul class="header__list">
        <li class="header__item" v-for="(link, index) in links" :key="index">
          <a :href="'#' + link.location" class="header__link">{{link.location}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { location: 'home' },
        { location: 'about' },
        { location: 'products' },
        { location: 'faq' },
        { location: 'contact' }
      ]
    }
  }
}
</script>

<style>

</style>
<template>
  <header id="header">
    <div class="header__wrapper header--top">
      <router-link to="/#hero" class="header__home">
        <h2 class="header__title">Dodds</h2>
      </router-link>
      <div class="header__toggles">
        <span @click="$emit('changeMode')">{{ this.visuals }}</span>
        <div class="hero__navBtn" @click="toggleNav()" aria-label="Navigation Button">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </div>
    <nav class="header__nav">
      <span class="header__close" @click="toggleNav()">X</span>
      <ul class="header__list">
        <li class="header__item" v-for="(link, index) in links" :key="index">
          <router-link :to="'/#' + link.location" :name="link.location" class="header__link" @click="toggleNav()">{{link.location}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['visuals'],

  data() {
    return {
      links: [
        { location: 'hero' },
        { location: 'about' },
        { location: 'products' },
        { location: 'faq' },
        { location: 'contact' }
      ],
    }
  },

  methods: {
    toggleNav() {
      const nav = document.querySelector('.header__nav');
      nav.classList.toggle('header__nav--active');

      document.querySelector("body").classList.toggle("no-scroll");

      document.querySelector(".header__wrapper").classList.toggle("header__wrapper--hide");
    }
  }
}
</script>
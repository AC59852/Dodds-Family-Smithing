<template>
  <section id="hero">
    <div class="hero__logo">
      <div class="hero__icon">
        <img src="/dalton_logo.png" alt="Logo of Dodds Family Smithing. An Anvil with a cross in the middle">
      </div>
      <h1 class="hero__title">Dodds Family <span class="hero__subtitle">Smithing</span></h1>
      <div class="hero__founding">
        <h2>EST 2022</h2>
      </div>
    </div>
    <img src="/chevron-down.svg" @click="scrollToAbout()" class="hero__arrow" alt="Arrow pointing down indicating to scroll down to the about section">
    <video class="hero__video" src="/hero_video.mp4" muted loop></video>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToAbout() {
      document.querySelector("#about").scrollIntoView({behavior: "smooth"})
    }
  }
}
</script>

<style>

</style>
<template>
  <section id="wrapper">
    <NavComponent />
    <HeroComponent />
    <AboutComponent :mobile="this.mobile"/>
    <ProductsComponent />
    <FAQComponent />
    <ContactComponent />
  </section>
</template>

<script>
import NavComponent from './components/NavComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'
import FAQComponent from './components/FAQComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

export default {
  name: 'DoddsFamilySmithing',

  data() {
    return {
      mobile: false,
    }
  },

  mounted() {
    this.mobile = window.innerWidth < 812 ? true : false

    window.addEventListener('resize', () => {
      this.mobile = window.innerWidth < 812 ? true : false
    })
  },

  components: {
    NavComponent,
    HeroComponent,
    AboutComponent,
    ProductsComponent,
    FAQComponent,
    ContactComponent,
  }
}
</script>
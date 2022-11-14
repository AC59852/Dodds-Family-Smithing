<template>
  <section id="wrapper">
    <HeroComponent subtitle='EST 2022'/>
    <div class="wrapper__content">
      <AboutComponent :mobile="this.mobile"/>
      <ProductsComponent :mobile="this.mobile"/>
      <FAQComponent />
      <ContactComponent />
    </div>
  </section>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import ProductsComponent from '@/components/ProductsComponent.vue'
import FAQComponent from '@/components/FAQComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
export default {
  name: 'DoddsFamilySmithing',

  data() {
    return {
      mobile: false,
    }
  },

  mounted() {
    this.mobile = window.innerWidth < 1150 ? true : false
    window.addEventListener('resize', () => {
      this.mobile = window.innerWidth < 1150 ? true : false
    })
  },

  components: {
    HeroComponent,
    AboutComponent,
    ProductsComponent,
    FAQComponent,
    ContactComponent,
  }
}
</script>
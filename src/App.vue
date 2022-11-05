<template>
  <section id="wrapper">
    <NavComponent :visuals="this.visuals" @changeMode="changeMode()" />
    <HeroComponent />
    <div class="wrapper__content">
      <AboutComponent :mobile="this.mobile"/>
      <ProductsComponent :mobile="this.mobile"/>
      <FAQComponent />
      <ContactComponent />
    </div>
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
      mode: true,
      visuals: "Dark"
    }
  },

  mounted() {
    this.mobile = window.innerWidth < 799 ? true : false

    window.addEventListener('resize', () => {
      this.mobile = window.innerWidth < 799 ? true : false
    })

    if(localStorage.getItem("mode") === null ){
      localStorage.setItem("mode", true)

      this.mode = true
    } else {
      let localMode = localStorage.getItem("mode");
      localMode = JSON.parse(localMode)

      this.mode = localMode
    }


    if(this.mode == true) {
      document.querySelector("body").setAttribute("id", "darkmode")
      this.visuals = "Dark"

    } else {
      document.querySelector("body").removeAttribute("id", "darkmode")
      this.visuals = "Light"
    }
  },

  methods: {
    changeMode() {
      console.log(this.mode)
      this.mode = !this.mode

      if(this.mode == true) {
        document.querySelector("body").setAttribute("id", "darkmode")
        this.visuals = "Dark"

        localStorage.setItem("mode", true)
      } else {
        document.querySelector("body").removeAttribute("id", "darkmode")
        this.visuals = "Light"

        localStorage.setItem("mode", false)
      }
    }
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
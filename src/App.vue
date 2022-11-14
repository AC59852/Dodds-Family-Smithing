<template>
  <NavComponent :visuals="this.visuals" @changeMode="changeMode()" />
  <router-view/>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
export default {
  data() {
    return {
      mode: true,
      visuals: "Dark"
    }
  },

  mounted() {
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
    NavComponent
  },
}
</script>

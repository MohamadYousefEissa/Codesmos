<template>
  <header>
    <nav class="py-3 py-lg-2">
      <div class="container-fluid container-lg m-lg-auto m-0">
        <div class="row text-md-center align-items-center gap-lg-5">
          <div class="col">
            <router-link to="/">
              <img class="img-fluid" src="../../assets/images/Logo@x4.png" width="100" alt="logo" />
            </router-link>
          </div>
          <div
            class="col-md-10 d-grid d-md-flex justify-content-md-evenly list-unstyled"
            id="links-col"
          >
            <router-link id="link" to="/Home">Home</router-link>
            <router-link id="link" to="/Home/Products">Products</router-link>
            <router-link id="link" to="/Portfolio">Portfolio</router-link>
            <router-link id="link" to="/TheProcess">The process</router-link>
            <router-link id="link" to="/AboutUs">About us</router-link>
            <router-link id="link" to="/ContactUs">Contact us</router-link>
          </div>

          <div class="col d-flex d-md-none justify-content-end p-0">
            <label class="burger" for="burger">
              <input type="checkbox" id="burger" v-model="burger" @click="toggleNav" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import router from '../../router.js'
export default {
  data() {
    return {
      burger: false
    }
  },
  methods: {
    toggleNav() {
      const linksCol = document.querySelector('#links-col')
      linksCol.classList.toggle('show')
      router.beforeResolve(() => {
        linksCol.classList.remove('show')
        this.burger = false
      })
    }
  }
}
</script>

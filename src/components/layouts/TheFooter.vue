<template>
  <footer>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mt-4 d-flex text-center justify-content-center justify-content-md-start">
          <div>
            <h5>Menu</h5>
            <div class="row list-unstyled mt-4">
              <div class="col d-flex gap-3 flex-column px-4 text-nowrap">
                <router-link to="/Home">Home</router-link>
                <router-link to="/Home/Products">Products</router-link>
                <router-link to="/Portfolio">Portfolio</router-link>
              </div>
              <div class="col d-flex gap-3 flex-column px-4 text-nowrap">
                <router-link to="/TheProcess">The process</router-link>
                <router-link to="/AboutUs">About us</router-link>
                <router-link to="/ContactUs">Contact us</router-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col mt-5 mt-md-4 text-center d-flex justify-content-center justify-content-md-end"
        >
          <div>
            <h5 class="mb-3">Contact us</h5>
            <span class="fs-5">sales@codesoms.com</span>
            <h5 class="mt-5 mb-3">Follow us</h5>
            <div class="d-flex justify-content-center gap-3">
              <a href=""><img width="36" src="../../assets/icons/linkedin.png" alt="linkedin" /></a>
              <a href=""><img width="36" src="../../assets/icons/facebook.png" alt="facebook" /></a>
              <a href=""
                ><img width="36" src="../../assets/icons/instagram.png" alt="instagram"
              /></a>
              <a href="https://wa.me/+963930155351"
                ><img width="36" src="../../assets/icons/whatsapp.png" alt="whatsapp"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center pt-2 pb-1 mt-lg-0 mt-5">
        <span class="fw-normal text-white-50">Powered by Codesmos@2024 |All rights reserved</span>
      </div>
    </div>
  </footer>
</template>

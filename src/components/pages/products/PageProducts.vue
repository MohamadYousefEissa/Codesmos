<template>
  <div class="container mt-5">
    <div class="row align-items-center">
      <div class="position-absolute w-50">
        <h1 class="fw-bold mobile-applications">
          <span>Mobile</span> <br />
          <span>Applications</span>
        </h1>
      </div>
      <div class="d-flex justify-content-end" id="background">
        <img
          src="../../../assets/images/right-bg.png"
          class="img-fluid position-absolute"
          width="800"
          alt="background"
        />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row gap-0 gap-xl-2">
      <div class="col">
        <div class="card-div mt-3 mt-lg-0">
          <v-card>
            <template #title> E-warranty </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta omnis sapiente
            repellendus voluptatibus. Vitae, totam quasi officia earum recusandae aspernatur cum
            sequi exercitationem quidem harum iure pariatur! Iusto quis reiciendis, quam possimus
            quidem veritatis velit officiis dignissimos perspiciatis soluta. Fugiat quos iste
            explicabo dolore aliquam! Eum dolores facere deleniti!
          </v-card>
        </div>
        <div class="card-div mt-3 mt-lg-4">
          <v-card>
            <template #title> E-warranty </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta omnis sapiente
            repellendus voluptatibus. Vitae, totam quasi officia earum recusandae aspernatur cum
            sequi exercitationem quidem harum iure pariatur! Iusto quis reiciendis, quam possimus
            quidem veritatis velit officiis dignissimos perspiciatis soluta. Fugiat quos iste
            explicabo dolore aliquam! Eum dolores facere deleniti!
          </v-card>
        </div>
      </div>
      <div class="col-12 col-lg">
        <div class="card-div mt-3 mt-lg-2">
          <v-card>
            <template #title> E-warranty </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta omnis sapiente
            repellendus voluptatibus. Vitae, totam quasi officia earum recusandae aspernatur cum
            sequi exercitationem quidem harum iure pariatur! Iusto quis reiciendis, quam possimus
            quidem veritatis velit officiis dignissimos perspiciatis soluta. Fugiat quos iste
            explicabo dolore aliquam! Eum dolores facere deleniti!
          </v-card>
        </div>
        <div class="card-div mt-3 mt-lg-5">
          <v-card>
            <template #title> E-warranty </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta omnis sapiente
            repellendus voluptatibus. Vitae, totam quasi officia earum recusandae aspernatur cum
            sequi exercitationem quidem harum iure pariatur! Iusto quis reiciendis, quam possimus
            quidem veritatis velit officiis dignissimos perspiciatis soluta. Fugiat quos iste
            explicabo dolore aliquam! Eum dolores facere deleniti!
          </v-card>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row align-items-center p-0">
      <div style="height: 500px">
        <img
          src="../../../assets/images/left-bg.png"
          class="img-fluid position-absolute"
          id="background"
          width="900"
          alt="background"
        />
      </div>
      <div class="position-absolute w-50">
        <h1 class="fw-bold mobile-applications">
          <span>Websites</span> <br />
          <span>& Web Applications</span>
        </h1>
      </div>
    </div>
  </div>

  <v-laptop>
    <template #title> Maintenance </template>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  </v-laptop>
</template>

<script>
import VCard from './VCard.vue'
import VLaptop from './VLaptop.vue'
export default {
  components: { VCard, VLaptop },
  mounted() {
    window.scrollTo({ top: innerHeight, left: 0 })
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/main.scss' as *;
.mobile-applications {
  width: fit-content;
  font-size: 60px;

  & span:first-child {
    color: $silver;
  }

  & span:last-child {
    color: $main;
  }
}
.card-div {
  background: #494254;
  border-radius: 20px;
  padding: 1rem;
  padding-bottom: 3rem;
}
#background {
  height: 600px;
}

@include responsive('tablet') {
  #background {
    width: 90vw;
    height: 400px;
  }

  .mobile-applications {
    font-size: 50px;
  }
}
</style>

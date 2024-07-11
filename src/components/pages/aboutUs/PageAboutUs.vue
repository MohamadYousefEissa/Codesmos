<template>
  <section>
    <section>
      <div class="d-flex justify-content-center">
        <h1 class="position-absolute fw-bold" id="h1-aboutus">
          <span class="about-word text-white">About</span>
          <span class="us-word">Us</span>
        </h1>
      </div>
      <div class="container-fluid container-xxl">
        <div class="row">
          <div class="col p-0">
            <img
              src="../../../assets/images/thread-left.png"
              class="img-fluid"
              id="thread-left"
              alt="decor"
            />
          </div>
          <div class="col p-0" id="thread-right-cont">
            <img
              src="../../../assets/images/thread-right.png"
              class="img-fluid"
              id="thread-right"
              alt="decor"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mt-5">
        <div class="row gap-5">
          <div
            class="col-12 col-lg-5 col-xl-6 d-flex justify-content-center align-items-center align-items-xl-end"
          >
            <img
              src="../../../assets/images/bg-aboutus.png"
              width="500"
              class="img-fluid"
              alt="background"
            />
          </div>
          <div class="col">
            <v-box>
              <template #para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci eligendi
                recusandae quos repellat sequi voluptatem doloribus quo magnam vero esse enim a
                blanditiis dolores nam voluptatum unde nostrum non eos maiores, consectetur totam
                expedita? Maxime beatae, eligendi dolor molestias natus recusandae? Molestiae,
                numquam unde quo voluptatibus, est aliquam sapiente error necessitatibus eligendi
                corporis ab earum expedita deleniti reprehenderit fuga.
              </template>
              <template #num1>22</template>
              <template #label1>Clients</template>

              <template #num2>10</template>
              <template #label2>Employees</template>

              <template #num3>18</template>
              <template #label3>Projects</template>
            </v-box>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import VBox from './VBox.vue'
export default {
  components: { VBox }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/main' as *;

#h1-aboutus {
  text-shadow: 1px 4px 5px black;
  font-size: 80px;
  margin-top: 5vw;
  margin-left: -8rem;
}

.about-word::after {
  content: '';
  position: absolute;
  display: block;
  background: $main;
  width: 20px;
  height: 14px;
  margin-top: -1.5rem;
  margin-left: -0.3rem;
  transform: rotate(25deg);
}

.about-word::before {
  content: '';
  position: absolute;
  display: block;
  background: #31005e4c;
  backdrop-filter: blur(3px);
  width: 100px;
  height: 70rem;
  margin-left: -14vw;
  margin-top: -5rem;
}

.us-word {
  color: $main;
}

#thread-right {
  margin-right: -5.5rem;
  margin-left: 5rem;
}

#thread-left {
  margin-top: 10rem;
  margin-left: -13.5rem;
}

@include min-width(1441) {
  #h1-aboutus {
    margin-top: 5rem;
  }
}

@include max-width(1440) {
  #thread-left {
    margin-top: 9rem;
  }

  #thread-right-cont {
    overflow: hidden;
  }
}

@include max-width(1024) {
  #thread-left {
    margin-top: 8rem;
  }
}

@include responsive('tablet') {
  #thread-left {
    margin-top: 7rem;
  }

  #thread-right {
    margin-top: 0.5rem;
  }

  .about-word::before {
    height: 85rem;
    margin-left: 3rem;
  }
}

@include responsive('mobile') {
  #thread-left,
  #thread-right,
  .about-word::after {
    display: none !important;
  }

  #h1-aboutus {
    margin-left: 0;
    margin-top: 4rem;
  }

  #thread-right-cont {
    margin-bottom: 8rem;
  }
}
</style>

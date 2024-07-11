<template>
  <div class="container overflow-hidden">
    <div class="row text-center">
      <div class="col">
        <div :class="{ 'anim-cont': activeAnim }" ref="animCont">
          <img src="../../assets/images/cloud.png" alt="cloud" id="cloud" />
          <img
            src="../../assets/images/rocket.png"
            alt="rocket"
            :class="{ 'rocket-anim': activeAnim }"
            id="rocket"
          />
        </div>
      </div>
      <div class="col">
        <img
          src="../../assets/images/cosmos is made.png"
          alt="image"
          width="300"
          class="mt-5"
          style="margin-left: 6vw"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import router from '../../router.js'
import store from '../../store/store'
const activeAnim = ref(false)
const animCont = ref(null)

function animTimeLine() {
  setTimeout(() => {
    animCont.value.style.animationPlayState = 'paused'
    router.push('/Home')
  }, 3500)
}
onMounted(() => {
  document.body.classList.add('bg-img')
  if (store.getters.isLoad) {
    activeAnim.value = true
    animTimeLine()
  }
  window.addEventListener('load', () => {
    activeAnim.value = true
    store.commit('isLoad', true)
    animTimeLine()
  })
})
onUnmounted(() => {
  document.body.classList.remove('bg-img')
})
</script>

<style lang="scss" scoped>
@use '../../assets/main.scss' as *;

#cloud,
#rocket,
.anim-cont {
  position: absolute;
}

#cloud {
  bottom: -105rem;
  left: -180rem;
  width: 3500px;
}

#rocket {
  bottom: 5rem;
  left: 20rem;
  width: 200px;
}
.anim-cont {
  bottom: 0;
  left: 0;
  animation: to-top-left 1.6s 2s ease-in-out;
}
.rocket-anim {
  animation: rocket-shake 1.6s 1.8s ease-in-out;
}

@keyframes to-top-left {
  to {
    bottom: 100%;
    left: 100%;
  }
}

@keyframes rocket-shake {
  @for $i from 0 to 40 {
    @if $i % 4==0 {
      #{$i + '%'} {
        transform: translateX(-0.5rem);
      }
    } @else if $i % 2==0 {
      #{$i + '%'} {
        transform: translateX(0.5rem);
      }
    }
  }
}

@include responsive('mobile') {
  #cloud {
    bottom: -90rem;
    left: -170rem;
    width: 3000px;
  }

  #rocket {
    bottom: 3rem;
    left: 3rem;
    width: 150px;
  }
}
</style>

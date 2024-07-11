<template>
  <div class="book" id="book">
    <div class="shadow"></div>
    <portfolio-paper :id="1">
      <template #img1>
        <img class="cover-img" src="../../../assets/Portfolio-images/1.jpg" />
      </template>
      <template #img2>
        <img class="cover-img" src="../../../assets/Portfolio-images/2.jpg" />
      </template>
    </portfolio-paper>

    <portfolio-paper :id="2">
      <template #img1>
        <img class="cover-img" src="../../../assets/Portfolio-images/3.jpg" />
      </template>
      <template #img2>
        <img class="cover-img" src="../../../assets/Portfolio-images/4.jpg" />
      </template>
    </portfolio-paper>

    <portfolio-paper :id="3">
      <template #img1>
        <img class="cover-img" src="../../../assets/Portfolio-images/5.jpg" />
      </template>
      <template #img2>
        <img class="cover-img" src="../../../assets/Portfolio-images/6.jpg" />
      </template>
    </portfolio-paper>

    <portfolio-paper :id="4">
      <template #img1>
        <img class="cover-img" src="../../../assets/Portfolio-images/7.jpg" />
      </template>
      <template #img2>
        <img class="cover-img" src="../../../assets/Portfolio-images/8.jpg" />
      </template>
    </portfolio-paper>

    <portfolio-paper :id="5">
      <template #img1>
        <img class="cover-img" src="../../../assets/Portfolio-images/9.jpg" />
      </template>
      <template #img2>
        <img class="cover-img" src="../../../assets/Portfolio-images/10.jpg" />
      </template>
    </portfolio-paper>

    <portfolio-paper :id="6">
      <template #img1>
        <img class="cover-img" src="../../../assets/Portfolio-images/11.jpg" />
      </template>
      <template #img2>
        <img class="cover-img" src="../../../assets/Portfolio-images/12.jpg" />
      </template>
    </portfolio-paper>

    <portfolio-paper :id="7">
      <template #img1>
        <img class="cover-img" src="../../../assets/Portfolio-images/13.jpg" />
      </template>
      <template #img2>
        <img class="cover-img" src="../../../assets/Portfolio-images/1.jpg" />
      </template>
    </portfolio-paper>
  </div>
</template>

<script>
import PortfolioPaper from './PortfolioPaper.vue'

export default {
  components: { PortfolioPaper }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/main' as *;
.book {
  position: relative;
  width: 40vw;
  height: 25vw;
  margin-top: 4rem;
  z-index: 5;
  transition: transform 0.5s;
}
.cover-img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  cursor: grab;
}
.shadow {
  position: absolute;
  height: 25vw;
  width: 3px;
  background: black;
  filter: blur(3px);
  box-shadow: 0 0 30px black;
  z-index: 8;
}

/* Paper Flipped */

@include responsive('tablet') {
  .book {
    width: 370px;
    height: 250px;
  }

  .shadow {
    height: 250px;
  }
}

@include responsive('mobile') {
  .book {
    width: 48vw;
    height: 120px;
    height: 30vw;
  }

  .shadow {
    height: 120px;
  }
}
</style>

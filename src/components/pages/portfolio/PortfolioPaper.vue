<template>
  <div :id="'p' + id" class="paper">
    <div class="front">
      <div class="front-content">
        <slot name="img1"></slot>
      </div>
    </div>
    <div class="back">
      <div class="back-content">
        <slot name="img2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style lang="scss" scoped>
$pages-num: 7;

.paper {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  perspective: 1500px;
}

.front {
  backface-visibility: hidden;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transform-origin: left;
  transition: transform 0.5s;
}
.flipped .front,
.flipped .back {
  transform: rotateY(-180deg);
}

.flipped {
  z-index: 0 !important;
}
.front {
  z-index: 1;
}

.back {
  z-index: 0;
}

.front-content,
.back-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.back-content {
  transform: rotateY(180deg);
}
/* Paper Z-index */
@for $i from 1 to 7 {
  #p#{$i} {
    z-index: calc($pages-num + 1 - #{$i});
  }
}
</style>

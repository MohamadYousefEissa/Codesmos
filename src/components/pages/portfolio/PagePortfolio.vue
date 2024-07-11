<template>
  <div class="book-container">
    <portfolio-book></portfolio-book>
    <div class="buttons-cont">
      <button class="d-none" id="prevBtn" @click="previousPage()">
        <i class="bi bi-arrow-left"></i>
      </button>
      <button id="nextBtn" @click="nextPage()">
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
    <!-- <a href="../../../assets" download>Download Portfolio</a> -->
  </div>
</template>
<script>
import PortfolioBook from './PortfolioBook.vue'
import { mapActions } from 'vuex'
export default {
  components: { PortfolioBook },

  methods: {
    ...mapActions(['nextPage', 'previousPage', 'closeBook', 'openBook'])
  },
  mounted() {
    this.$store.dispatch('keyboardEvents')
    this.$store.dispatch('swipeEffect')
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/main' as *;

/* Button */
#prevBtn,
#nextBtn {
  border: none;
  transition: transform 0.5s;
  background: transparent;
  color: $main;
  font-weight: bold;
  outline: 0;
}

.buttons-cont {
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
}

/* Book */
.book-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.book-container a {
  color: $main;
  text-decoration: none;
  margin-top: 1rem;
}

.book-container a::selection {
  background: none;
}
</style>

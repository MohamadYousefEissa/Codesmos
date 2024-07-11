<template>
  <div class="bg-white p-4 p-md-5 rounded-3 position-relative">
    <article>
      <p>
        <slot name="para"></slot>
      </p>
    </article>
    <div class="container rounded-4 mt-5" id="details-cont">
      <div class="row text-center py-3">
        <div class="col p-0">
          <h2><slot name="num1"></slot></h2>
          <span><slot name="label1"></slot></span>
        </div>
        <div class="col p-0">
          <h2><slot name="num2"></slot></h2>
          <span><slot name="label2"></slot></span>
        </div>
        <div class="col p-0">
          <h2><slot name="num3"></slot></h2>
          <span><slot name="label3"></slot></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/main.scss' as *;
#details-cont {
  background: #dfdbe8;
  box-shadow: 0 2px 6px black;

  &,
  h2 {
    font-weight: bold;
  }

  h2 {
    color: $main;
    margin-bottom: 0;
  }
}
</style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-7 col-12 col-lg-7">
        <div class="bg-white p-2 pe-5 ps-3 mb-3" style="width: fit-content">
          <div>
            <h3 class="m-0 fw-bold">
              <slot name="title"></slot>
            </h3>
          </div>
          <div class="rectangle"></div>
        </div>
        <div>
          <article>
            <p>
              <slot></slot>
            </p>
          </article>
        </div>
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <div class="d-flex align-items-center justify-content-center h-100">
          <img
            src="../../../assets/images/mobile.png"
            alt="mobile"
            class="img-fluid w-75 mt-3 mt-lg-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/main.scss' as *;

article {
  color: white;
  font-weight: bold;
}

.rectangle {
  width: 50px;
  height: 10px;
  background: $silver;
}
</style>

<template>
  <div class="col-12 col-xxl-4 col-lg-5">
    <div class="p-5 pb-2 text-white rounded-4" id="contact-information-div">
      <h2 class="mb-5 fw-bold text-nowrap"><slot name="h2"></slot></h2>
      <div class="d-flex flex-column gap-5 fs-4">
        <div class="d-flex align-items-center gap-4">
          <slot name="phone"></slot>
        </div>
        <div class="d-flex align-items-center gap-4">
          <slot name="telephone"></slot>
        </div>
        <div class="d-flex align-items-center gap-4">
          <slot name="email"></slot>
        </div>
        <div class="d-flex align-items-start gap-4">
          <slot name="location"></slot>
        </div>
        <div>
          <div class="d-flex justify-content-center gap-4">
            <a href="" target="_blank"
              ><img width="40" src="../../../assets/icons/linkedin.png" alt="linkedin"
            /></a>
            <a href="" target="_blank"
              ><img width="40" src="../../../assets/icons/facebook.png" alt="facebook"
            /></a>
            <a href="" target="_blank"
              ><img width="40" src="../../../assets/icons/instagram.png" alt="instagram"
            /></a>
            <a href="https://wa.me/+963930155351" target="_blank"
              ><img width="40" src="../../../assets/icons/whatsapp.png" alt="whatsapp"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../assets/main.scss' as *;

#contact-information-div {
  background: $main2;

  img {
    filter: brightness(200%) saturate(200%);
  }
}
</style>

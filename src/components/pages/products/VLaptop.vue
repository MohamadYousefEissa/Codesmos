<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex flex-column align-items-center">
        <div>
          <h1 class="fw-bold text-white">
            <slot name="title"></slot>
          </h1>
        </div>
        <div>
          <div class="rectangle"></div>
        </div>
        <img src="../../../assets/images/laptop.png" class="img-fluid laptop" alt="laptop" />
        <article class="w-75 text-white fw-bold">
          <p>
            <slot></slot>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

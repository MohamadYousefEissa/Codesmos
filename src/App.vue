<template>
  <router-view name="TheHeader"></router-view>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'slide-bottom'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <router-view name="TheFooter"></router-view>
</template>

<style>
.fade-enter-active {
  animation: fade 0.3s;
}
.fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-bottom-enter-active {
  animation: slide-bottom 0.3s;
}
.slide-bottom-leave-active {
  animation: slide-bottom 0.3s reverse;
}
@keyframes slide-bottom {
  from {
    opacity: 0;
    transform: translateY(-10rem);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

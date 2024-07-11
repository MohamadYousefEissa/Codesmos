<template>
  <section>
    <div class="container">
      <div class="row text-center">
        <div class="col">
          <section class="after-anim">
            <div>
              <img
                src="../../assets/images/Final logo.png"
                alt="logo"
                class="final-logo img-fluid"
              />
            </div>
            <div>
              <img
                src="../../assets/images/cosmos is made 2.png"
                alt="cosmos is made with code"
                width="550"
                class="img-fluid"
              />
            </div>
            <div>
              <router-link to="/Home/Products">
                <button class="home-btn">><span class="line">_</span> "Get started"</button>
              </router-link>
            </div>
          </section>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/main.scss' as *;
.after-anim {
  animation: after-anim 2.5s linear;
}

.final-logo {
  width: 400px;
  margin: 5rem 0;
  filter: brightness(1.5) saturate(1.5) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
}

.line {
  position: relative;
  z-index: -1;
  animation: line infinite 0.5s alternate;
}

.home-btn {
  border: 0;
  outline: 0;
  margin-top: 2rem;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  color: $silver;
  background: rgba(255, 255, 255, 0.1);
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: background 0.1s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

@keyframes line {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes after-anim {
  from {
    filter: blur(5px);
    opacity: 0.1;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
}
</style>

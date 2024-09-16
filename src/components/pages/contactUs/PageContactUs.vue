<template>
  <section>
    <h1 class="text-center text-white fw-bold mb-5 pb-5 pt-3 pt-md-1">Let's collaborate!</h1>
    <div class="container">
      <div class="row justify-content-center align-items-center gap-5">
        <v-box>
          <template #h2> Contact Information</template>
          <template #phone>
            <i class="bi fs-2 bi-phone"></i>
            <a
              class="text-white text-decoration-none"
              href="https://wa.me/+963930155351"
              target="_blank"
              >+963 930 155 351
            </a>
          </template>
          <template #telephone>
            <i class="bi fs-2 bi-telephone-fill"></i> +963 11 277 9412
          </template>
          <template #email>
            <i class="bi fs-2 bi-envelope-fill"></i>
            <a class="text-white text-decoration-none" href="mailto:sales@codesmos.com"
              >sales@codesmos.com
            </a>
          </template>
          <template #location>
            <i class="bi fs-2 bi-geo-alt-fill"></i>
            Ruken Al-Deen - Opp to Computer enginnering company CEC Damascus - Syria
          </template>
        </v-box>
        <div class="col">
          <form @submit.prevent="sendEmail">
            <div class="container text-white">
              <div class="row gap-md-5 gap-xl-5 gap-lg-1">
                <div class="col">
                  <v-inputs
                    :label="'First Name'"
                    :id="'first-name'"
                    :type="'text'"
                    :min="3"
                    :max="32"
                    :required="true"
                  ></v-inputs>
                </div>
                <div class="col-12 col-md mt-3 mt-md-0">
                  <v-inputs
                    :label="'Last Name'"
                    :id="'last-name'"
                    :type="'text'"
                    :min="3"
                    :max="32"
                    :required="true"
                  ></v-inputs>
                </div>
              </div>
              <div class="row mt-3 mt-md-5 gap-md-5 gap-xl-5 gap-lg-1">
                <div class="col-12 col-md">
                  <v-inputs
                    :label="'E-mail'"
                    :id="'email'"
                    :type="'email'"
                    :min="8"
                    :max="64"
                    :required="true"
                  ></v-inputs>
                </div>
                <div class="col mt-3 mt-md-0">
                  <v-inputs
                    :label="'Phone'"
                    :id="'phone'"
                    :type="'phone'"
                    :mode="'numeric'"
                    :required="true"
                  ></v-inputs>
                </div>
              </div>
              <h4 class="mt-5 fw-bold mb-3 mb-xl-5">Needed service:</h4>
              <div class="row">
                <div class="col">
                  <div class="d-flex align-items-center">
                    <input
                      type="radio"
                      required
                      name="needed-service"
                      id="web-development"
                      value="Web development"
                      v-model="neededService"
                    />
                    <label class="ms-3" for="web-development">Web development</label>
                  </div>
                </div>
                <div class="col-12 col-md col-lg-12 col-xl mt-2 mt-lg-2 mt-xl-0 mt-md-0">
                  <div class="d-flex align-items-center">
                    <input
                      type="radio"
                      required
                      name="needed-service"
                      id="applications-development"
                      value="Applications development"
                      v-model="neededService"
                    />
                    <label class="ms-3" for="applications-development"
                      >Applications development</label
                    >
                  </div>
                </div>
              </div>
              <div class="row mt-xl-2">
                <div class="col-12 col-md col-lg-12 col-xl mt-2 mt-md-2 mt-xl-0">
                  <div class="d-flex align-items-center">
                    <input
                      type="radio"
                      required
                      name="needed-service"
                      id="uiux-design"
                      value="UI/UX design"
                      v-model="neededService"
                    />
                    <label class="ms-3" for="uiux-design">UI/UX design</label>
                  </div>
                </div>
                <div class="col mt-2 mt-md-2 mt-xl-0">
                  <div class="d-flex align-items-center">
                    <input
                      type="radio"
                      required
                      name="needed-service"
                      id="other"
                      value="Other"
                      v-model="neededService"
                    />
                    <label class="ms-3" for="other">Other</label>
                  </div>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col">
                  <v-inputs
                    :label="'Message'"
                    :id="'message'"
                    :type="'text'"
                    :placeholder="'Write your message ...'"
                    :classes="'w-100'"
                  ></v-inputs>
                </div>
              </div>
              <div class="row text-center mt-5">
                <div class="col">
                  <button type="submit" disabled v-if="$store.getters.isSend === 'sending'">
                    Sending ...
                  </button>
                  <button
                    type="submit"
                    class="bg-success"
                    disabled
                    v-else-if="$store.getters.isSend"
                  >
                    Sent Successfully
                  </button>
                  <button
                    type="submit"
                    class="bg-danger"
                    disabled
                    v-else-if="$store.getters.isSend === false"
                  >
                    Error While Sent
                  </button>
                  <button type="submit" v-else>Send request</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VBox from './VBox.vue'
import VInputs from './VInputs.vue'
import emailjs from '@emailjs/browser'
export default {
  components: { VBox, VInputs },
  data() {
    return {
      neededService: null
    }
  },
  methods: {
    sendEmail() {
      this.$store.dispatch('sendEmail', { neededService: this.neededService })
    }
  },
  mounted() {
    ;(function () {
      emailjs.init({
        publicKey: 'CsxvoQFXut_00PpaW'
      })
    })()
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/main.scss' as *;

h1 {
  margin-top: 6rem;
  font-size: 60px;
}

@include responsive('mobile') {
  h1 {
    font-size: 50px;
  }
}

label,
input[type='radio'] {
  cursor: pointer;
}

button {
  border: 0;
  outline: 0;
  background: $main2;
  color: white;
  border-radius: 5px;
  padding: 0.6rem 2rem;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background: $main;
  }
}

input[type='radio'] {
  appearance: none;
  outline: 0;
}

input[type='radio']:checked {
  border-radius: 50%;
  background: $main2;
  transition: background 0.3s;
}

input[type='radio']::after {
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type='radio']:checked::after {
  content: '\F272';
  font-family: 'bootstrap-icons';
  color: white;
  border: none;
}
</style>

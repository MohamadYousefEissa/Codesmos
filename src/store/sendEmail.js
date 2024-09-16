import emailjs from '@emailjs/browser'

export default {
  state() {
    return {
      isSend: null
    }
  },
  actions: {
    sendEmail(context, payload) {
      context.state.isSend = 'sending'
      const firstName = document.querySelector('#first-name')
      const lastName = document.querySelector('#last-name')
      const email = document.querySelector('#email')
      const phone = document.querySelector('#phone')
      const message = document.querySelector('#message')
      const params = {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        phone: phone.value,
        needed_service: payload.neededService,
        message: message.value
      }
      emailjs
        .send('service_67tapwx', 'template_fkxlacd', params)
        .then(() => {
          context.state.isSend = true
          setTimeout(() => {
            context.state.isSend = null
          }, 3000)
        })
        .catch((err) => {
          context.state.isSend = false
          setTimeout(() => {
            context.state.isSend = null
          }, 3000)
          throw new Error(err)
        })
    }
  },
  getters: {
    isSend(state) {
      return state.isSend
    }
  }
}

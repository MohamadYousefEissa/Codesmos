<template>
  <label :for="id">{{ label }}</label>
  <input
    :required="required"
    :type="type"
    :id="id"
    :name="id"
    class="form-input"
    autocomplete="off"
    :minlength="min"
    :maxlength="max"
    :inputmode="mode"
    :placeholder="placeholder"
    :class="classes"
    @input="fix"
  />
</template>

<script>
export default {
  props: ['label', 'id', 'type', 'min', 'max', 'mode', 'placeholder', 'classes', 'required'],

  methods: {
    fix(ev) {
      if (ev.target.id === 'phone') {
        ev.target.value = ev.target.value.replace(/[^0-9\s+]/g, '')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/main.scss' as *;
label {
  display: block;
  width: fit-content;
  font-size: 18px;
}
.form-input {
  background: none;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #939bde;
  color: #939bde;
  margin-top: 0.3rem;
  width: 100%;
}
@include max-width(1400) {
  .form-input {
    width: 100%;
  }
}
</style>

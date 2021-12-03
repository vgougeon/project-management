<template>
<div class="d-flex fx-center vcenter fx-col h100">
  <div>
    <div class="form-field">
      <ax-form-field class="white">
        <ax-form-control v-model="pin" placeholder="PIN" tag="input" :rules=[required] type="text"></ax-form-control>
      </ax-form-field>
    </div>
  </div>
  <div class="grix xs3 gutter-xs3">
    <button v-for="i in 10" :key="i" @click="addNumber(i > 9 ? 0 : i)" class="btn btn-large font-s6 primary rounded-1 w100">{{ i > 9 ? 0 : i }}</button>
    <button class="btn btn-large font-s6 text-white tertiary rounded-1 w100" @click="pin = ''">C</button>
    <button class="btn btn-large font-s6 text-white secondary rounded-1 w100"><i class="mdi mdi-check"></i></button>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: "Login",
  data() {
    return {
      required: (value) => !!value || 'Required.',
      pin: ""
    } 
  },
  methods: {
    addNumber(num: string): void {
      this.pin += num;
    }
  }
}
</script>

<style lang="scss">

</style>
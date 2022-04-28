<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CustomVModel",

  // 自定义组件 v-model 的属性名与事件名
  model: {
    prop: "inputValue",
    event: "inputEvent",
  },
  props: {
    inputValue: {
      type: [String, Boolean],
      default: "",
    },
    checkboxValue: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e: any) {
      this.$emit("inputEvent", e.target.value);
    },
    handleChange(e: any) {
      this.$emit("changeEvent", e.target.checked);
    },
  },
});
</script>

<template>
  <div class="custom-v-model">
    <input type="text" :value="inputValue" @input="handleInput" />

    <!-- <label for="jz">
      <input id="jz" type="checkbox" :checked="checkboxValue" @change="handleChange" />
      橘子
    </label> -->
  </div>
</template>

<style lang="scss" scoped></style>

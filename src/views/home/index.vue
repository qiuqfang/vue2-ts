<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { data } from "./data";

export default Vue.extend({
  name: "Home",
  data,
  created() {
    this.changePersonalInformation();
    this.getTableList();
  },
  methods: {
    changePersonalInformation() {
      this.personalInformation.name = "张三";
      this.personalInformation.sex = "男";
      console.log(this.personalInformation);
    },
    getTableList() {
      this.tableData = Object.freeze([{ id: 1, name: "" }]);
      console.log(...this.tableData);
    },
  },
});
</script>

<style lang="sass" scoped></style>

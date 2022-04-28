<template>
  <div>
    <CustomVModel v-model="customValue"></CustomVModel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { data } from "./data";

import CustomVModel from "@/components/CustomVModel.vue";

export default Vue.extend({
  name: "Home",
  components: {
    CustomVModel,
  },
  data,
  watch: {
    customValue(val) {
      console.log(val);
    },
  },
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

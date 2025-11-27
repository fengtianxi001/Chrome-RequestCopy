<template>
  <div class="request-list">
    <RequestItem v-for="item in list" :item="item" />
  </div>
</template>
<script setup>
import RequestItem from "./RequestItem.vue";

const props = defineProps({
  list: Object,
});
</script>
<style lang="scss" scoped>
.request-list {
  flex: 1;
  overflow: auto;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>

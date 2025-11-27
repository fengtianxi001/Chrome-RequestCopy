<template>
  <div class="request-item">
    <div class="request-item-header">
      <Button size="mini" @click="methods.onToggleExpand">
        <template #icon>
          <IconDown v-show="!state.expand" />
          <IconUp v-show="state.expand" />
        </template>
      </Button>
      <div class="request-item-url">{{ methods.onFormatUrl(item.url) }}</div>
      <Button size="mini" type="primary" @click="methods.onCopy">复制</Button>
    </div>
    <div class="request-item-body" v-show="state.expand">
      <pre>{{ JSON.stringify(item, null, 2) }}</pre>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { IconDown, IconUp } from "@arco-design/web-vue/es/icon";
import { Button, Message } from "@arco-design/web-vue";

const props = defineProps({
  item: Object,
});

const state = reactive({
  expand: false,
});

const methods = {
  onToggleExpand() {
    state.expand = !state.expand;
  },
  onFormatUrl(url) {
    const _url = new URL(url);
    console.log("_url", _url);
    return _url.pathname;
    // return url.split("?")[0];
  },
  onCopy() {
    const textarea = document.createElement("textarea");
    textarea.value = JSON.stringify(props.item, null, 2);
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    Message.success("复制成功");
  },
};
</script>
<style lang="scss" scoped>
.request-item {
  margin-bottom: 10px;
  border: 1px solid #f0f0f0;
  padding: 2px;
  border-radius: var(--border-radius-small);
  .request-item-header {
    display: flex;
    align-items: center;
    grid-gap: 5px;
    position: relative;
    .request-item-url {
      flex: 1;
      background-color: #f0f1f3;
      color: var(--color-text-2);
      background-color: var(--color-secondary);
      line-height: 25px;
      font-size: 12px;
      padding: 0 10px;
      overflow: hidden;
      text-align: right;
      border-radius: var(--border-radius-small);
      white-space: nowrap;
      overflow: hidden;
      text-align: right;
      direction: rtl;
      &:hover {
        color: #005af9;
      }
    }
  }
  .request-item-body {
    padding: 0 10px;
    font-size: 10px;
    overflow: auto;
    background-color: #fafafa;
    margin-top: 5px;
    box-sizing: border-box;
    color: var(--color-text-2);
    line-height: 15px;
    max-height: 300px;
    border-radius: var(--border-radius-small);
  }
}
</style>

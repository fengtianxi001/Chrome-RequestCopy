<template>
  <div class="layout-brand">
    <div class="layout-brand-logo">R</div>
    <div class="layout-brand-info">
      <div class="layout-brand-title">Request Copy</div>
      <div class="layout-brand-version">v1.0.0</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-brand {
  display: flex;
  align-items: center;
  height: 53.44px;
  padding: 10px 10px 0;
  box-sizing: border-box;
  grid-gap: 5px;
  flex-shrink: 0;
  .layout-brand-logo {
    height: 100%;
    aspect-ratio: 1/1;
    background-color: var(--color-secondary);
    border-radius: var(--border-radius-small);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    color: #005af9;
  }
  .layout-brand-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    grid-gap: 5px;
    .layout-brand-title {
      flex: 1;
      font-size: 13px;
      background-color: var(--color-secondary);
      padding: 4px 10px;
      color: var(--color-text-1);
    }
    .layout-brand-version {
      font-size: 10px;
      color: var(--color-text-2);
      padding: 2px 10px;
    }
  }
}
</style>

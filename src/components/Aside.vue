<script lang="ts" setup>
const activeIndex = defineModel("activeIndex");
const props = defineProps<{
  asideList: any;
}>();

const getAssetsFile = (src: string) => {
  return new URL(`/src/assets/svg/${src}.svg`, import.meta.url).href;
};
const getActiveAssetsFile = (src: string) => {
  return new URL(`/src/assets/svg/${src}-actived.svg`, import.meta.url).href;
};


const handleClick = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="aside">
    <div
      class="aside-item"
      v-for="(item, index) in props.asideList"
      :key="item.label"
      :class="{ active: activeIndex === index }"
      @click="handleClick(index)"
    >
      <div class="aside-item-icon">
        <template v-if="activeIndex === index">
          <img :src="getActiveAssetsFile(item.icon)" alt="" />
        </template>
        <template v-else>
          <img :src="getAssetsFile(item.icon)" alt="" />
        </template>
      </div>
      <div class="aside-item-label">{{ item.label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  flex: none;
  display: flex;
  flex-direction: column;
  width: 314px;
  min-height: 100%;
  padding: 50px 23px;
  background-color: #fff;
  box-sizing: border-box;

  .aside-item {
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 26px;
    margin-bottom: 16px;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      margin-right: 22px;
      color: #000000;
    }

    &.active {
      color: #ffffff;
      background: #273075;

      img {
        color: #ffffff;
      }
    }
  }
}
</style>

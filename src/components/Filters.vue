<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import FilterItem from "./FilterItem.vue";

const props = defineProps<{
  filtersList: any;
}>();

const dataList = ref([]);
const selectedList = defineModel<any[]>({ default: [] });

const formateList = (list: any) => {
  if (!Array.isArray(list)) {
    return list;
  }
  const obj: any = [];
  list.forEach((item: any) => {
    let objItem: any = {
      id: item.id,
      title: item.title,
      disabled: item.disabled || false,
      isClickable: item.isClickable || false,
      isExpand: item.isClickable || false,
      isLeaf: item.isClickable || false,
      isChecked: selectedList.value.includes(item.id) || false,
    };
    if (item.children && item.children.length > 0) {
      objItem.children = formateList(item.children);
    } else {
      objItem.isLeaf = true;
    }
    obj.push(objItem);
  });
  return obj;
};

watch(
  () => props.filtersList,
  (newVal) => {
    dataList.value = formateList(newVal);
  },
  { immediate: true }
);
</script>

<template>
  <div class="filters">
    <div class="filter-title">
      <img
        class="filter-title-icon"
        src="../assets/svg/filter.svg"
        alt="filter"
      />
      <span class="filter-title-text">数据过滤器</span>
    </div>
    <div class="filters-content">
      <FilterItem
        v-model="dataList"
        v-model:selectedList="selectedList"
        :isTop="true"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  width: 314px;
  min-height: 100%;
  padding: 30px 20px;
  background-color: #fff;
  box-sizing: border-box;

  .filter-title {
    flex: none;
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    .filter-title-icon {
      height: 24px;
      margin-right: 10px;
    }
    .filter-title-text {
      font-size: 20px;
      font-weight: 500;
    }
  }

  .filters-content {
    flex: 1;
    height: 0;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }

    .filters-item {
      padding: 16px 6px;

      & + .filters-item {
        border-top: 1px solid #cccccc;
      }
      &:last-child {
        border-bottom: 1px solid #cccccc;
      }
      .filters-item-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 7px;
        font-size: 18px;
        cursor: pointer;
      }

      .filters-item-content {
        margin-top: 16px;
        :deep(.el-checkbox) {
          margin-right: 18px;
        }
      }
    }
  }
}
</style>

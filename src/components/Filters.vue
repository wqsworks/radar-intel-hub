<script lang="ts" setup>
import { watch } from "vue";
const modelValue = defineModel<any>();
const props = defineProps<{
  filtersList: any;
}>();

watch(
  () => props.filtersList,
  (newVal) => {
    if (Array.isArray(newVal)) {
      const obj: any = {};
      newVal.forEach((item: any) => {
        obj[item.title] = {
          value: [],
          isExpand: false,
        };
      });
      modelValue.value = obj;
    }
  },
  { immediate: true }
);

const handleExpand = (index: number) => {
  if (!props.filtersList || !props.filtersList[index]) {
    return;
  }
  if (props.filtersList[index]?.disabled) {
    return;
  }
  const title = props.filtersList[index]?.title;
  modelValue.value[title].isExpand = !modelValue.value[title].isExpand;
};
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
      <div
        class="filters-item"
        v-for="(filter, index) in props.filtersList"
        :key="index"
      >
        <div class="filters-item-title" @click="handleExpand(index)">
          <span>{{ filter.title }}</span>
          <div>
            <template
              v-if="
                modelValue[filter.title] && modelValue[filter.title].isExpand
              "
            >
              <img
                class="filters-item-title-icon"
                src="../assets/svg/arrow-up.svg"
                alt="arrow-up"
              />
            </template>
            <template v-else>
              <img
                class="filters-item-title-icon"
                src="../assets/svg/arrow-down.svg"
                alt="arrow-down"
              />
            </template>
          </div>
        </div>
        <div
          class="filters-item-content"
          v-if="modelValue[filter.title] && modelValue[filter.title].isExpand"
        >
          <el-checkbox-group v-model="modelValue[filter.title].value">
            <el-checkbox
              :label="option.label"
              :value="option.value"
              v-for="(option, index) in filter.options"
              :key="index"
            />
          </el-checkbox-group>
        </div>
      </div>
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

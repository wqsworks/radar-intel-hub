<script lang="ts" setup name="FilterItem">
interface Props {
  isTop?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isTop: false,
});

const modelValue = defineModel<any>();
const selectedList = defineModel<any>("selectedList", { default: [] });

const handleExpand = (filter: any) => {
  if (!filter) {
    return;
  }
  if (filter?.disabled) {
    return;
  }
  filter.isExpand = !filter.isExpand;
};

const handleChange = (filter: any) => {
  if (selectedList.value.includes(filter.id)) {
    filter.isChecked = false;
    selectedList.value = selectedList.value.filter(
      (id: any) => id !== filter.id
    );
  } else {
    filter.isChecked = true;
    selectedList.value.push(filter.id);
  }
};
</script>

<template>
  <template v-for="(filter, index) in modelValue" :key="index">
    <template
      v-if="
        (filter.children && filter.children.length > 0) ||
        !filter.isLeaf ||
        props.isTop
      "
    >
      <div class="filters-item">
        <div class="filters-item-title" @click="handleExpand(filter)">
          <span>{{ filter.title }}</span>
          <div>
            <template v-if="filter && filter.isExpand">
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
        <div class="filters-item-content" v-show="filter.isExpand">
          <FilterItem :isTop="false" v-model="filter.children" />
        </div>
      </div>
    </template>
    <template v-else>
      <el-checkbox
        :modelValue="filter.isChecked"
        :label="filter.title"
        @change="handleChange(filter)"
      />
    </template>
  </template>
</template>

<style lang="scss" scoped>
.filters-item {
  // padding: 16px 6px;
  // border-bottom: 1px solid #cccccc;

  & .filters-item {
    padding-left: 26px;
  }
  .filters-item-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 13px;
    font-size: 18px;
    cursor: pointer;
    border-bottom: 1px solid #cccccc;
  }

  :deep(.filters-item-content) {
    .el-checkbox {
      display: flex;
      align-items: center;
      height: 25px;
      margin-top: 16px;
      margin-right: 0px;
      padding-left: 13px;
      // margin-bottom: 0px;
      // border-bottom: 1px solid #cccccc;

      & + .el-checkbox {
        margin-top: 5px;
        border-bottom: none;
      }

      &:first-child {
        margin-top: 16px;
      }
      &:last-child {
        padding-bottom: 16px;
        border-bottom: 1px solid #cccccc;
      }

      & + .filters-item {
        margin-top: 16px;
        border-top: 1px solid #cccccc;
      }
    }
  }
}
</style>

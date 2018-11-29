<template>
  <RecycleScroller
    class="scroller"
    :items="list"
    :item-height="32"
  >
    <div slot-scope="{ item }" class="user">
      {{ item.name }}
    </div>
  </RecycleScroller>
</template>

<script>
export default {
  data() {
    return {
      arr: new Array(10000),
      list: []
    }
  },
  created() {
    for(let [i, item] of Object.entries(this.arr)) {
      this.list.push({
        id: i,
        name: 'wukai'
      })
    }
  }
}
</script>

<style scoped>
.scroller {
  height: 100%;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
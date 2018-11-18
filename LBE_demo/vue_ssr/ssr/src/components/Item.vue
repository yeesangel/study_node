<!-- Item.vue -->
<template>
  <div class="tit"{{ item.title }} ---- {{fooCount}}</div>
</template>

<script>
import fooStoreModule from '../store/modules/foo.js'
import titleMixin from '../title-mixin.js'
export default {
  mixins: [titleMixin],
  title() {
    return this.item.title
  },
  asyncData ({ store, route }) {
    store.registerModule('foo', fooStoreModule)
    // 触发 action 后，会返回 Promise
    return Promise.all([
      store.dispatch('fetchItem', route.params.id),
      store.dispatch('foo/inc',),
    ])
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.items[this.$route.params.id]
    },
    fooCount () {
      return this.$store.state.foo.count
    }
  },
  destroyed() {
    this.$store.unregisterModule('foo')
  }
}
</script>
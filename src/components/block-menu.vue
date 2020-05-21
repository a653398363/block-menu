<template>
  <div>
    block-menu
    block-menu
    <ul>
      <li v-for="i in menuArr" :key="i.id">{{i.value}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'block-menu',
  props: {
    menuArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
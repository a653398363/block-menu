<template>
  <div class="block-menu">
    <div class="menu-list">
      <div v-for="i in menuArr" :key="i.id" class="menu-item" @mouseenter="enter(index)" @mouseleave="leave()">
        <img :src="i.icon" alt="">
        <p>{{ i.title }}</p>
      </div>
      <div class="hover-list">
        <div v-for="i in hoverList" :key="i.hoverList">
          {{ i.name }}
        </div>
      </div>
    </div>
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
  data() {
    return {
      menuArr: [
        {
          title: '监测站',
          icon: require('../../../assets/setIcon.png'),
          menuId: 1
        },
        {
          title: '项目',
          icon: require('../../../assets/setIcon.png'),
          menuId: 2
        },
        {
          title: '行政区域',
          icon: require('../../../assets/setIcon.png'),
          menuId: 3
        },
        {
          title: '基础信息',
          icon: require('../../../assets/setIcon.png'),
          menuId: 4
        },
        {
          title: '地图信息',
          icon: require('../../../assets/setIcon.png'),
          menuId: 5
        }
      ],
      hoverList: []
    }
  },
  methods: {
    enter() {
    },
    mouseleave() {
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-list {
  .menu-item {
    background: rgba(0, 0, 0, .6);
    color: white;
    font-size: 0.6em;
    text-align: center;
    padding: .65em;
    cursor: pointer;
    position: relative;
    & > img {
      margin: .35em 0;
    }
  }
  .menu-item + .menu-item {
    border-top: 1px solid white;
  }
  .menu-item:hover {
    background: rgb(28,109,200);
  }
  .menu-item:hover ::before{
    content: " ";
    width: 4px;
    height: 100%;
    display: inline-block;
    background: rgb(28,109,200);
    position: absolute;
    top: 0;
    left: -8px;
  }
  .hover-item {

  }
}
</style>

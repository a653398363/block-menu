## block-menu
> 版本1

## 使用方法
<blockMenu :menuArr="menuArr" @itemClick="itemClick" @menuClick="menuClick" class="blockScss"/>

itemClick 每个子菜单按钮点击事件回调  
  参数 当前点击数据
# 数据源
 menuArr {
          title: '监测站',
          icon: '图片地址',
          menuId: 1,
          children: [
            {
              name: '气象监测站',
              icon: '图片地址',
              itemId: 1
            }
          ]
        },
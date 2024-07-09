<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import demo8 from './demo8.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Space 间距

#### 常用于多个组件，或多个元素之间的间距设置，避免紧贴在一起

<br/>

## 基本使用

#### space 的基本使用

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="Flex" demoName="demo1"/>

## 纵向间距

#### 设置 inline 为 false 即可

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="Flex" demoName="demo2"/>

## 自定义间距大小

#### 通过设置 _size_ 自定义间距大小， _size_ 接收一个数组，第一个值 为垂直间距，第二个值为水平间距，当 _inline_ 为 _false_ 时，只生效第一个值

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="Flex" demoName="demo3"/>

## flex 横向对齐方式

#### 通过设置 _justifyContent_ 属性，可以设置 flex 对齐方式 参考值：_flex-start_ | _flex-end_ | _center_ | _space-between_ | _space-around_

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="Flex" demoName="demo4"/>

## flex 纵向对齐方式

#### 通过设置 _align_ 属性，可以设置 flex 对齐方式 参考值：_flex-start_ | _flex-end_ | _center_ | _space-between_ | _space-around_

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="Flex" demoName="demo5"/>

## 支持对象形式传递 _style_ 样式

#### 通过设置 _style_ 属性，可以快速设置组件样式 例如：_:style="{height: '100px'}"_

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="Flex" demoName="demo6"/>

## 支持赋予 _class_ 样式

#### 通过设置 _class_ 属性，可以快速设置组件样式 例如：_class="guoguo-space"_

<div class="componetnsBox">
  <demo7/>
</div>
<preview compName="Flex" demoName="demo7"/>

## 快速设置宽度样式

#### 通过设置 _widthFill_ 属性，可以快速设置宽度 width:100%

<div class="componetnsBox">
  <demo8/>
</div>
<preview compName="Flex" demoName="demo8"/>

## Attributes 参数

<Attributes/>
<br/>

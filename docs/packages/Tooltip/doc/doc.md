<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import Attributes from './Attributes.vue'
import Slot from './Slot.vue'
import preview from '@/components/preview.vue'
</script>

# Tooltip 提示

## 基本使用

### tooltip 提示

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="tooltip" demoName="demo1"/>

## 箭头不同位置

### 共有 12 个位置 _top_ | _top-start_ | _top-end_ | _bottom_ | _bottom-start_ | _bottom-end_ | _left_ | _left-start_ | _left-end_ | _right_ | _right-start_ | _right-end_

<br/>
<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="tooltip" demoName="demo2"/>

## 主题

### Tooltip 组件提供了两个不同的主题：_dark_ 和 _light_。

<br/>
<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="tooltip" demoName="demo3"/>

## 自定义内容

### 展示多行文本或者是设置文本内容的格式甚至可以展示图片。

<br/>
<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="tooltip" demoName="demo4"/>

## Attributes 参数

<Attributes/>
<br/>

## Slot 插槽

<Slot/>
<br/>

## 示例
### 基本形式

<div class="m-example"></div>

```xml
<tabs>
    <tab title="Tab1">Content1</tab>
    <tab title="Tab2">Content2</tab>
    <tab title="Tab3">Content3</tab>
    <tab title="Tab4">Content4</tab>
</tabs>
```

### current和selected

<div class="m-example"></div>

```xml
<div class="g-row">
    <div class="g-col g-col-6">
        <tabs current=1>
            <tab title="Tab1">Content1</tab>
            <tab title="Tab2">Content2</tab>
            <tab title="Tab3">Content3</tab>
            <tab title="Tab4">Content4</tab>
        </tabs>
    </div>
    <div class="g-col g-col-6">
        <tabs>
            <tab title="Tab1">Content1</tab>
            <tab title="Tab2">Content2</tab>
            <tab title="Tab3" selected>Content3</tab>
            <tab title="Tab4">Content4</tab>
        </tabs>
    </div>
</div>
```

### 禁用某一项，禁用组件

<div class="m-example"></div>

```xml
<div class="g-row">
    <div class="g-col g-col-6">
        <tabs>
            <tab title="Tab1">Content1</tab>
            <tab title="Tab2">Content2</tab>
            <tab title="Tab3" disabled>Content3</tab>
            <tab title="Tab4">Content4</tab>
        </tabs>
    </div>
    <div class="g-col g-col-6">
        <tabs disabled>
            <tab title="Tab1">Content1</tab>
            <tab title="Tab2">Content2</tab>
            <tab title="Tab3">Content3</tab>
            <tab title="Tab4">Content4</tab>
        </tabs>
    </div>
</div>
```

### 隐藏某一项

<div class="m-example"></div>

```xml
<tabs>
    <tab title="Tab1">Content1</tab>
    <tab title="Tab2" visible={false}>Content2</tab>
    <tab title="Tab3">Content3</tab>
    <tab title="Tab4">Content4</tab>
</tabs>
```

### 居中

<div class="m-example"></div>

```xml
<tabs class="m-tabs-center">
    <tab title="Tab1">Content1</tab>
    <tab title="Tab2">Content2</tab>
    <tab title="Tab3">Content3</tab>
    <tab title="Tab4">Content4</tab>
</tabs>
```

### 垂直居左

<div class="m-example"></div>

```xml
<tabs class="m-tabs-left">
    <tab title="Tab1">Content1</tab>
    <tab title="Tab2">Content2</tab>
    <tab title="Tab3">Content3</tab>
    <tab title="Tab4">Content4</tab>
</tabs>
```

### 垂直居右

<div class="m-example"></div>

```xml
<tabs class="m-tabs-right">
    <tab title="Tab1">Content1</tab>
    <tab title="Tab2">Content2</tab>
    <tab title="Tab3">Content3</tab>
    <tab title="Tab4">Content4</tab>
</tabs>
```

### 标题模板自定义

<div class="m-example"></div>

```xml
<tabs titleTemplate={@(this.titleTemplate)}>
    <tab title="Tab1">Content1</tab>
    <tab title="Tab2" success={true}>Content2</tab>
    <tab title="Tab3" success={true}>Content3</tab>
    <tab title="Tab4">Content4</tab>
</tabs>
```

```javascript
let component = new RGUI.Component({
    template,
    titleTemplate: `<span>{item.data.title} {#if item.data.success}<span class="u-text u-text-success"><i class="u-icon u-icon-check-circle"></i></span>{/if}</span>`
});
```

### 数据绑定

<div class="m-example"></div>

```xml
<tabs current={current}>
    <tab title="Tab0">Content0</tab>
    <tab title="Tab1">Content1</tab>
    <tab title="Tab2">Content2</tab>
    <tab title="Tab3">Content3</tab>
</tabs>
<p><span>当前页：{current}</span></p>
<a class="u-btn u-btn-info" on-click={current -= 1}>上一页</a>
<a class="u-btn u-btn-info" on-click={current += 1}>下一页</a>
```

```javascript
let component = new RGUI.Component({
    template,
    data: {current: 2},
});
```

### 事件

请打开浏览器的控制台查看结果。

<div class="m-example"></div>

```xml
<tabs current={2} on-select={console.log('on-select:', '$event.current:', $event.current)}
      on-change={console.log('on-change:', '$event.current:', $event.current)}>
    <tab title="Tab0">Content0</tab>
    <tab title="Tab1">Content1</tab>
    <tab title="Tab2">Content2</tab>
    <tab title="Tab3">Content3</tab>
</tabs>
```

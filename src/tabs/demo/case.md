## 案例
### 仅使用头部

<div class="m-example"></div>

```xml
<tabs current={current}>
    <tab title="Tab1"></tab>
    <tab title="Tab2"></tab>
    <tab title="Tab3"></tab>
    <tab title="Tab4"></tab>
</tabs>
<p><span>当前页：{current}</span></p>
```

```javascript
let component = new RGUI.Component({
    template,
    data: {current: 2},
});
```

### 仅使用样式

<div class="m-example"></div>

```xml
<div class="m-tabs">
    <ul class="tabs_hd">
        <li z-crt={current === 0}><a href="#0">CSS元件</a></li>
        <li z-crt={current === 1}><a href="#1">CSS模块</a></li>
        <li z-crt={current === 2}><a href="#2">JS元件</a></li>
        <li z-crt={current === 3}><a href="#3">JS模块</a></li>
    </ul>
    <div class="tabs_bd">{current}</div>
</div>
```

```javascript
let component = new RGUI.Component({
    template,
    data: {current: 2},
    config() {
        Regular.dom.on(window, 'hashchange', () => {
            let current = +location.hash.slice(1);
            this.data.current = isNaN(current) ? 0 : current;
            this.$update();
        });
    }
});
```

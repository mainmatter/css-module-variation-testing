### Input

```html {data-filename=app/components/some-text.hbs}
<div local-class="outer" class="bordered">
  <p>Some Text</p>
</div>
```

```css {data-filename=app/components/some-text.css}
.outer {
  --bg-color: pink;
  height: 100px;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.outer:global(.bordered){
  border-style: dotted;
}

p {
  font-weight: bold
}
```

### Output

```html {data-filename=app/components/some-text.hbs}
<div class="_outer_generated-1 bordered">
  <p>Some Text</p>
</div>
```

```css {data-filename=app/components/some-text.css}
  ._outer_generated-1 {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ._outer_generated-1.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }
```

### Example

<div class="_outer_generated-1 bordered">
  <p>Some Text</p>
</div>

<style>
  ._outer_generated-1 {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ._outer_generated-1.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }
</style>

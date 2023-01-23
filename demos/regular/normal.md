### Input

```html {data-filename=app/components/some-text.hbs}
<div class="outer bordered">
  <p>Some Text</p>
</div>
```

```css {data-filename=app/styles/some-text.css}
  .outer {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }
```

### Output

```html {data-filename=app/components/some-text.hbs}
<div class="outer bordered">
  <p>Some Text</p>
</div>
```

```css {data-filename=app/styles/some-text.css}
  .outer {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }
```

### Example

<div class="outer bordered">
  <p>Some Text</p>
</div>

<style>
  .outer {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }
</style>

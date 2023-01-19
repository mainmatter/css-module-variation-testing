### Input

```html
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
```

### Output

```html
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

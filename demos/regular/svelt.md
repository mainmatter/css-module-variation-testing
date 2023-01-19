### Input

```
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

  .outer:global(.bordered){
    border-style: dotted;
  }

  p {
    font-weight: bold
  }
</style>
```

### Output

```
<div class="outer bordered generated-1">
  <p class="generated-2">Some Text</p>
</div>

<style>
  .outer.generated-1 {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer.generated-1.bordered{
    border-style: dotted;
  }

  p.generated-2 {
    font-weight: bold
  }
</style>
```

### Example

<div class="outer bordered generated-1">
  <p class="generated-2">Some Text</p>
</div>

<style>
  .outer.generated-1 {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer.generated-1.bordered{
    border-style: dotted;
  }

  p.generated-2 {
    font-weight: bold
  }
</style>

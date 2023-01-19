### Input

```
<div class="outer bordered">
  <p>Some Text</p>
</div>

<style scoped>
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
<div class="outer bordered" data-generated-1>
  <p data-generated-2>Some Text</p>
</div>

<style>
  .outer[data-generated-1] {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer[data-generated-1].bordered{
    border-style: dotted;
  }

  p[data-generated-2] {
    font-weight: bold
  }
</style>
```

### Example

<div class="outer bordered" data-generated-1>
  <p data-generated-2>Some Text</p>
</div>

<style>
  .outer[data-generated-1] {
    --bg-color: pink;
    height: 100px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer[data-generated-1].bordered{
    border-style: dotted;
  }

  p[data-generated-2] {
    font-weight: bold
  }
</style>

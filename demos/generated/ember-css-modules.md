### Input

```html {data-filename=app/components/first.hbs}
<div class='first'>
  <p>First Component</p>
  <Second/>
</div>
<Second/>
```

```css {data-filename=app/components/first.css}
  .first{
    color: green;
  }

  .first [class*=.second]{
    color: green;
  }
```

```html {data-filename=app/components/second.hbs}
<p class='second'>Second Component</p>
```

```css {data-filename=app/components/second.css}
  .second{
    color: red;
  }
```

### Output

```html {data-filename=app/components/first.hbs}
<div class='_first_generated-1'>
  <p>First Component</p>
  <p class='_second_generated-2'>Second Component</p>
</div>
<p class='_second_generated-2' data-generated-2>Second Component</p>
```

```css {data-filename=app/components/first.css}
  ._first_generated-1{
    color: green;
  }

  ._first_generated-1 [class*=.second]{
    color: green;
  }
```

```html {data-filename=app/components/second.hbs}
<p class='_second_generated-2'>Second Component</p>
```

```css {data-filename=app/components/second.css}
  ._second_generated-2{
    color: red;
  }
```

### Example

<div class='_first_generated-1'>
  <p>First Component</p>
  <p class='_second_generated-2'>Second Component</p>
</div>
<p class='_second_generated-2' data-generated-2>Second Component</p>

<style>
  ._first_generated-1{
    color: green;
  }
  ._first_generated-1 [class*=second]{
    color: green;
  }
  ._second_generated-2{
    color: red;
  }
</style>

### Disadvantage

Selector `[class*=second]` is dangerous, because it can select any class containing `second` word.

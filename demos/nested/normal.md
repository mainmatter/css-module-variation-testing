### Input

```html {data-filename=app/components/some-text.hbs}
<div class="outer bordered">
  <p>Some Text</p>
  <Nested />
  <Nested />
</div>
<Nested />
```

```css {data-filename=app/styles/some-text.css}
  .outer {
    text-align: center
  }

  .outer.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }

  p::before{
    content: 'header: ';
  }

  .outer .nested{
    color: blue;
  }
  .outer .nested:nth-child(2){
    color: green;
  }
```

```html {data-filename=app/components/nested.hbs}
<p class='nested'>Info</p>
```

```css {data-filename=app/styles/nested.css}
.nested{
  color: red;
}
```

### Output

```html {data-filename=app/components/some-text.hbs}
<div class="outer bordered">
  <p>Some Text</p>
  <p class='nested'>Info</p>
  <p class='nested'>Info</p>
</div>
<p class='nested'>Info</p>
```

```css {data-filename=app/styles/some-text.css}
  .outer {
    text-align: center
  }

  .outer.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }

  p::before{
    content: 'header: ';
  }

  .outer .nested{
    color: blue;
  }
  .outer .nested:nth-child(2){
    color: green;
  }
```

```html {data-filename=app/components/nested.hbs}
<p class='nested'>Info</p>
```

```css {data-filename=app/styles/nested.css}
.nested{
  color: red;
}
```

### Example

<div class="outer bordered">
  <p>Some Text</p>
  <p class='nested'>Info</p>
  <p class='nested'>Info</p>
</div>

<p class='nested'>Info</p>

<style>
  .outer {
    text-align: center
  }

  .outer.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }

  p::before{
    content: 'header: ';
  }

  .outer .nested{
    color: blue;
  }
  .outer .nested:nth-child(2){
    color: green;
  }

  .nested{
    color: red;
  }
</style>

### Problems
1. element selectors are leaking between components

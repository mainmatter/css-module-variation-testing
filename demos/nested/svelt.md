### Input

```html {data-filename=app/components/some-text.hbs}
<div class="outer bordered">
  <p>Some Text</p>
  <Nested />
  <Nested />
</div>
<Nested />
```

```css {data-filename=app/components/some-text.css}
  .outer {
    text-align: center
  }

  .outer:global(.bordered){
    border-style: dotted;
  }

  p {
    font-weight: bold
  }

  p::before{
    content: 'header: ';
  }

  .outer :global(.nested){
    color: blue;
  }
  .outer :global(.nested):nth-child(2){
    color: green;
  }
```

```html {data-filename=app/components/nested.hbs}
<p class='nested'>Info</p>
```

```css {data-filename=app/components/nested.css}
.nested{
  color: red;
}
```
### Output

```html {data-filename=app/components/some-text.hbs}
<div class="outer bordered generated-1">
  <p class='generated-2'>Some Text</p>
  <p class='nested generated-3'>Info</p>
  <p class='nested generated-3'>Info</p>
</div>
<p class='nested generated-3'>Info</p>
```

```css {data-filename=app/components/some-text.css}
  .outer.generated-1 {
    text-align: center
  }

  .outer.generated-1.bordered{
    border-style: dotted;
  }

  p.generated-2 {
    font-weight: bold
  }

  p.generated-2::before{
    content: 'header: ';
  }

  .outer.generated-1 .nested{
    color: blue;
  }
  .outer.generated-1 .nested:nth-child(2){
    color: green;
  }
```

```html {data-filename=app/components/nested.hbs}
<p class='nested.generated-3'>Info</p>
```

```css {data-filename=app/components/nested.css}
.nested.generated-3{
  color: red;
}
```
### Example

<div class='main app'>
  <div class="outer bordered generated-1">
    <p class='generated-2'>Some Text</p>
    <p class='nested generated-3'>Info</p>
    <p class='nested generated-3'>Info</p>
  </div>
  <p class='nested generated-3'>Info</p>
</div>

<style>
  .outer.generated-1 {
    text-align: center
  }

  .outer.generated-1.bordered{
    border-style: dotted;
  }

  p.generated-2 {
    font-weight: bold
  }

  p.generated-2::before{
    content: 'header: ';
  }

  .outer.generated-1 .nested{
    color: blue;
  }
  .outer.generated-1 .nested:nth-child(2){
    color: green;
  }

  .nested.generated-3{
    color: red;
  }
</style>

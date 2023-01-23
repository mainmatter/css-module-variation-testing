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

  .outer [class^=nested]{
    color: blue;
  }
  .outer [class^=nested]:nth-child(2){
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
<div class="outer_generated-1 bordered">
  <p class='generated-2'>Some Text</p>
  <p class='nested_generated-3'>Info</p>
  <p class='nested_generated-3'>Info</p>
</div>
<p class='nested_generated-3'>Info</p>
```

```css {data-filename=app/components/some-text.css}
  .outer_generated-1 {
    text-align: center
  }

  .outer_generated-1.bordered{
    border-style: dotted;
  }

  p.generated-2 {
    font-weight: bold
  }

  p.generated-2::before{
    content: 'header: ';
  }

  .outer_generated-1 [class^=nested]{
    color: blue;
  }
  .outer_generated-1 [class^=nested]:nth-child(2){
    color: green;
  }
```

```html {data-filename=app/components/nested.hbs}
<p class='nested_generated-3'>Info</p>
```

```css {data-filename=app/components/nested.css}
.nested_generated-3{
  color: red;
}
```
### Example

<div class="outer_generated-1 bordered">
  <p class='generated-2'>Some Text</p>
  <p class='nested_generated-3'>Info</p>
  <p class='nested_generated-3'>Info</p>
</div>
<p class='nested_generated-3'>Info</p>

<style>
  .outer_generated-1 {
    text-align: center
  }

  .outer_generated-1.bordered{
    border-style: dotted;
  }

  p.generated-2 {
    font-weight: bold
  }

  p.generated-2::before{
    content: 'header: ';
  }

  .outer_generated-1 [class^=nested]{
    color: blue;
  }
  .outer_generated-1 [class^=nested]:nth-child(2){
    color: green;
  }

  .nested_generated-3{
    color: red;
  }
</style>

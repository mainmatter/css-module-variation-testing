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

  .outer [class*=nested]{
    color: blue;
  }
  .outer [class*=nested]:nth-child(2){
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
<div class="_outer_generated-1 bordered">
  <p>Some Text</p>
  <p class='_nested_generated-3'>Info</p>
  <p class='_nested_generated-3'>Info</p>
</div>
<p class='_nested_generated-3'>Info</p>
```

```css {data-filename=app/components/some-text.css}
  ._outer_generated-1 {
    text-align: center
  }

  ._outer_generated-1.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }

  p::before{
    content: 'header: ';
  }

  ._outer_generated-1 [class*=nested]{
    color: blue;
  }
  ._outer_generated-1 [class*=nested]:nth-child(2){
    color: green;
  }
```

```html {data-filename=app/components/nested.hbs}
<p class='_nested_generated-2'>Info</p>
```

```css {data-filename=app/components/nested.css}
._nested_generated-2{
  color: red;
}
```
### Example

<div class="_outer_generated-1 bordered">
  <p>Some Text</p>
  <p class='_nested_generated-3'>Info</p>
  <p class='_nested_generated-3'>Info</p>
</div>
<p class='_nested_generated-3'>Info</p>

<style>
  ._outer_generated-1 {
    text-align: center
  }

  ._outer_generated-1.bordered{
    border-style: dotted;
  }

  p {
    font-weight: bold
  }

  p::before{
    content: 'header: ';
  }

  ._outer_generated-1 [class*=nested]{
    color: blue;
  }
  ._outer_generated-1 [class*=nested]:nth-child(2){
    color: green;
  }

  ._nested_generated-3{
    color: red;
  }
</style>

### Problems
1. element selectors are leaking between components

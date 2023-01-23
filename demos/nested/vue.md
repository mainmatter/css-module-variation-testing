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
<div class="outer bordered" data-generated-1>
  <p data-generated-2>Some Text</p>
  <p class='nested' data-generated-3>Info</p>
  <p class='nested' data-generated-3>Info</p>
</div>
<p class='nested' data-generated-3>Info</p>
```

```css {data-filename=app/components/some-text.css}
  .outer[data-generated-1] {
    text-align: center
  }

  .outer[data-generated-1].bordered{
    border-style: dotted;
  }

  p[data-generated-2] {
    font-weight: bold
  }

  p[data-generated-2]::before{
    content: 'header: ';
  }

  .outer[data-generated-1] .nested{
    color: blue;
  }
  .outer[data-generated-1] .nested:nth-child(2){
    color: green;
  }
```

```html {data-filename=app/components/nested.hbs}
<p class='nested' data-generated-3>Info</p>
```

```css {data-filename=app/components/nested.css}
.nested[data-generated-3]{
  color: red;
}
```
### Example

<div class="outer bordered" data-generated-1>
  <p data-generated-2>Some Text</p>
  <p class='nested' data-generated-3>Info</p>
  <p class='nested' data-generated-3>Info</p>
</div>
<p class='nested' data-generated-3>Info</p>

<style>
  .outer[data-generated-1] {
    text-align: center
  }

  .outer[data-generated-1].bordered{
    border-style: dotted;
  }

  p[data-generated-2] {
    font-weight: bold
  }

  p[data-generated-2]::before{
    content: 'header: ';
  }

  .outer[data-generated-1] .nested{
    color: blue;
  }
  .outer[data-generated-1] .nested:nth-child(2){
    color: green;
  }

  .nested[data-generated-3]{
    color: red;
  }
</style>

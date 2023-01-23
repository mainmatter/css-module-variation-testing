  ### Input

```css {data-filename=app/styles/app.css}
.important.some-class{
  color: red;
}
```

```html {data-filename=app/components/important-text.hbs}
<div>
  <p class='important some-class'>Important text</p>
</div>
```

```css {data-filename=app/components/important-text.css}
  .important{
    color: green;
  }
```

### Output

```css {data-filename=app/styles/app.css}
.important.some-class{
  color: red;
}
```

```html {data-filename=app/components/important-text.hbs}
<div>
  <p class='important some-class' data-generated-1>Important text</p>
</div>
```

```css {data-filename=app/components/important-text.css}
  .important[data-generated-1]{
    color: green;
  }
```

### Example

<div>
  <p class='important some-class' data-generated-1>Important text</p>
</div>

<style>
  .important.some-class{
    color: red;
  }
  .important[data-generated-1]{
    color: green;
  }
</style>

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
  <p class='important some-class generated-1'>Important text</p>
</div>
```

```css {data-filename=app/components/important-text.css}
  .important.generated-1{
    color: green;
  }
```

### Example

<div>
  <p class='important some-class generated-1' data-important>Important text</p>
</div>

<style>
  .important.some-class{
    color: red;
  }
  .important.generated-1{
    color: green;
  }
</style>

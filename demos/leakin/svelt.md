## Input

```css {data-filename=app/styles/app.css}
.alert{
  color: red !important;
}
div.alert::before{
  content: 'LEAK! ';
}
```

```html {data-filename=app/components/my-alert.hbs}
<div class='alert'>
  My simple alert
</div>
```
```css {data-filename=app/components/my-alert.css}
.alert{
  color: green;
}
```

## Output

```html {data-filename=app/components/my-alert.hbs}
<div class='alert generated-1'>
  My simple alert
</div>
```
```css {data-filename=app/components/my-alert.css}
.alert{
  color: red !important;
}
div.alert::before{
  content: 'LEAK! ';
}
.alert.generated-1{
  color: green;
}
```

### Example

<div class='alert generated-1'>
  My simple alert
</div>

<style>
.alert{
  color: red !important;
}
div.alert::before{
  content: 'LEAK! ';
}
.alert.generated-1{
  color: green;
}
</style>

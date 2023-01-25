## Input

```html {data-filename=app/components/parent.hbs}
<div class='green'>
  <p>Parent</p>
  <First />
  <Second />
</div>
```
```css {data-filename=app/components/parent.css}
.green p{
  color: green;
}

.green :generated(.alert::before, 'components/first.css')){
  content: 'Only for First:';
}
```

```html {data-filename=app/components/first.hbs}
<p class='alert'>First</p>
```
```css {data-filename=app/components/first.css}
.alert{
  color: green;
}
```

```html {data-filename=app/components/second.hbs}
<p class='alert'>Second</p>
```
```css {data-filename=app/components/second.css}
.alert{
  color: blue;
}
```

## Output

```html 
<div class='green_generated-parent'>
  <p class='generated-parent'>Parent</p>
  <p class='alert_generated-first'>First</p>
  <p class='alert_generated-second'>Second</p>
</div>
```
```css
.green_generated-parent p.generated-parent{
  color: green;
}
.green_generated-parent .alert_generated-first::before{
  content: 'Only for First:';
}
.alert_generated-first{
  color: green;
}
.alert_generated-second{
  color: blue;
}
```

### Example

<div class='green_generated-parent'>
  <p class='generated-parent'>Parent</p>
  <p class='alert_generated-first'>First</p>
  <p class='alert_generated-second'>Second</p>
</div>

<style>
.green_generated-parent p.generated-parent{
  color: green;
}
.green_generated-parent .alert_generated-first::before{
  content: 'Only for First:';
}
.alert_generated-first{
  color: green;
}
.alert_generated-second{
  color: blue;
}
</style>

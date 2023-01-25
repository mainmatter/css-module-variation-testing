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

.green :global(.alert::before){
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
<div class='green' data-generated-parent>
  <p data-generated-parent>Parent</p>
  <p class='alert' data-generated-first>First</p>
  <p class='alert' data-generated-second>Second</p>
</div>
```
```css
.green[data-generated-parent] p[data-generated-parent][data-generated-parent]{
  color: green;
}
.green[data-generated-parent] .alert::before{
  content: 'Only for First:';
}
.alert[data-generated-first]{
  color: green;
}
.alert[data-generated-second]{
  color: blue;
}
```

### Example

<div class='green' data-generated-parent>
  <p data-generated-parent>Parent</p>
  <p class='alert' data-generated-first>First</p>
  <p class='alert' data-generated-second>Second</p>
</div>

<style>
.green[data-generated-parent] p[data-generated-parent][data-generated-parent]{
  color: green;
}
.green[data-generated-parent] .alert::before{
  content: 'Only for First:';
}
.alert[data-generated-first]{
  color: green;
}
.alert[data-generated-second]{
  color: blue;
}
</style>

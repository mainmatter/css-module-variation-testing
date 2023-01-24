## Input

```html {data-filename=app/components/a.hbs}
<div class='a'>
  A
  <B />
  <C/>
</div>
```
```css {data-filename=app/components/a.css}
.a{
  color: blue;
}

.a :global(.b){
  color: red;
}
```

```html {data-filename=app/components/b.hbs}
<div class='b'>B</div>
```
```css {data-filename=app/components/b.css}
.b{
  color: green;
}
```

```html {data-filename=app/components/c.hbs}
<div class='b'>C</div>
```
```css {data-filename=app/components/c.css}
.b{
  color: green;
}
```

## Output

```html {data-filename=app/components/a.hbs}
<div class='a' data-generated-1>
  A
  <div class='b' data-generated-2>B</div>
  <div class='b' data-generated-3>C</div>
</div>
```
```css {data-filename=app/components/a.css}
.a[data-generated-1]{
  color: blue;
}

.a[data-generated-1] .b{
  color: red;
}
```

```html {data-filename=app/components/b.hbs}
<div class='b' data-generated-2>B</div>
```
```css {data-filename=app/components/b.css}
.b[data-generated-2]{
  color: green;
}
```

```html {data-filename=app/components/c.hbs}
<div class='b' data-generated-3>C</div>
```
```css {data-filename=app/components/c.css}
.b[data-generated-3]{
  color: green;
}
```

### Example

<div class='a' data-generated-1>
  A
  <div class='b' data-generated-2>B</div>
  <div class='b' data-generated-3>C</div>
</div>

<style>
.a[data-generated-1]{
  color: blue;
}
.a[data-generated-1] .b{
  color: red;
}
.b[data-generated-2]{
  color: green;
}
.b[data-generated-3]{
  color: green;
}
</style>


### Problems
The same class name is used in multiple components. Style leaked when nested component is selected with :global.

Color of C is red instead of green

### Possible solution
```css
.a :generated(.b, 'components/b.css'){ ... }
```
would transform .b the same way like in component/b.css
```css
.a[data-generated-1] .b[data-generated-2]
```

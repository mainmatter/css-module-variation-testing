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

.a [class^=b]{
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
<div class='a_generated-1'>
  A
  <div class='b_generated-2'>B</div>
  <div class='b_generated-3'>C</div>
</div>
```
```css {data-filename=app/components/a.css}
.a_generated-1{
  color: blue;
}

.a_generated-1 [class^=b]{
  color: red;
}
```

```html {data-filename=app/components/b.hbs}
<div class='b_generated-2'>B</div>
```
```css {data-filename=app/components/b.css}
.b_generated-2{
  color: green;
}
```

```html {data-filename=app/components/c.hbs}
<div class='b_generated-3'>C</div>
```
```css {data-filename=app/components/c.css}
.b_generated-3{
  color: green;
}
```

### Example

<div class='a_generated-1'>
  A
  <div class='b_generated-2'>B</div>
  <div class='b_generated-3'>C</div>
</div>

<style>
.a_generated-1{
  color: blue;
}
.a_generated-1 [class^=b]{
  color: red;
}
.b_generated-2{
  color: green;
}
.b_generated-3{
  color: green;
}
</style>

### Problems
The same class name is used in multiple components. Style leaked when nested component is selected with [class^=b].

Color of C is red instead of green.

### Possible solution
```css
.a :generated(.b, 'components/b.css'){ ... }
```
would transform .b the same way like in component/b.css
```css
.a_generated-1 .b_generated-2
```

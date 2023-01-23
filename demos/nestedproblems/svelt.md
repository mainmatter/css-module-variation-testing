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
  color: blue;
}
```

```html {data-filename=app/components/b.hbs}
<div class='b'>B</div>
```
```css {data-filename=app/components/b.css}
.b{
  color: red;
}
```

```html {data-filename=app/components/c.hbs}
<div class='b'>C</div>
```
```css {data-filename=app/components/c.css}
.b{
  color: red;
}
```

## Output

```html {data-filename=app/components/a.hbs}
<div class='a generated-1'>
  A
  <div class='b generated-2'>B</div>
  <div class='b generated-3'>C</div>
</div>
```
```css {data-filename=app/components/a.css}
.a.generated-1{
  color: blue;
}

.a.generated-1 .b{
  color: blue;
}
```

```html {data-filename=app/components/b.hbs}
<div class='b generated-2'>B</div>
```
```css {data-filename=app/components/b.css}
.b.generated-2{
  color: red;
}
```

```html {data-filename=app/components/c.hbs}
<div class='b generated-3'>C</div>
```
```css {data-filename=app/components/c.css}
.b.generated-3{
  color: red;
}
```

### Example

<div class='a generated-1'>
  A
  <div class='b generated-2'>B</div>
  <div class='b generated-3'>C</div>
</div>

<style>
.a.generated-1{
  color: blue;
}
.a.generated-1 .b{
  color: red;
}
.b.generated-2{
  color: green;
}
.b.generated-3{
  color: green;
}
</style>


### Problems
The same class name is used in multiple components. Style leaked when nested component is selected with :global

### Possible solution
```css
.a :generated(.b, 'components/b.css'){ ... }
```
would transform .b the same way like in component/b.css
```css
.a.generated-1 .b.generated-2
```

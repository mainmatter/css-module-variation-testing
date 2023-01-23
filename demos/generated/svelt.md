  ### Input

```html {data-filename=app/components/first.hbs}
<div class='first'>
  <p>First Component</p>
  <Second/>
</div>
<Second/>
```

```css {data-filename=app/components/first.css}
  .first{
    color: green;
  }

  .first :generated(.second, 'components/second.css'){
    color: green;
  }
```

```html {data-filename=app/components/second.hbs}
<p class='second'>Second Component</p>
```

```css {data-filename=app/components/second.css}
  .second{
    color: red;
  }
```

### Output

```html {data-filename=app/components/first.hbs}
<div class='first generated-1'>
  <p>First Component</p>
  <p class='second generated-2'>Second Component</p>
</div>
<p class='second generated-2' data-generated-2>Second Component</p>
```

```css {data-filename=app/components/first.css}
  .first.generated-1{
    color: green;
  }

  .first.generated-1 .second.generated-2{
    color: green;
  }
```

```html {data-filename=app/components/second.hbs}
<p class='second.generated-2'>Second Component</p>
```

```css {data-filename=app/components/second.css}
  .second.generated-2{
    color: red;
  }
```

### Example

<div class='first generated-1'>
  <p>First Component</p>
  <p class='second generated-2'>Second Component</p>
</div>
<p class='second generated-2' data-generated-2>Second Component</p>

<style>
  .first.generated-1{
    color: green;
  }
  .first.generated-1 .second.generated-2{
    color: green;
  }
  .second.generated-2{
    color: red;
  }
</style>

### selectors in javascript

There could be generated function for generating css selectors in javascript (controllers, components, unit tests, ...)

```js
import generated from 'css-module'

const generatedFirst = generated('.first', 'components/first.css');
// .first.generated-1

const generatedSecond = generated('.second', 'components/second.css');
// .second.generated-2

const generatedSelector = `${generaatedFirst} ${generatedSecond}`;
// .fist.generated-1 .second.generated-2
```

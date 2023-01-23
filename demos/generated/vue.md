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

  .first :generated(.second, 'components/second.hbs'){
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
<div class='first' data-generated-1>
  <p>First Component</p>
  <p class='second' data-generated-2>Second Component</p>
</div>
<p class='second' data-generated-2>Second Component</p>
```

```css {data-filename=app/components/first.css}
  .first[data-generated-1]{
    color: green;
  }

  .first[data-generated-1] .second[data-generated-2]{
    color: green;
  }
```

```html {data-filename=app/components/second.hbs}
<p class='second' data-generated-2>Second Component</p>
```

```css {data-filename=app/components/second.css}
  .second[data-generated-2]{
    color: red;
  }
```

### Example

<div class='first' data-generated-1>
  <p>First Component</p>
  <p class='second' data-generated-2>Second Component</p>
</div>
<p class='second' data-generated-2>Second Component</p>

<style>
  .first[data-generated-1]{
    color: green;
  }
  .first[data-generated-1] .second[data-generated-2]{
    color: green;
  }
  .second[data-generated-2]{
    color: red;
  }
</style>

### selectors in javascript

There could be generated function for generating css selectors in javascript (controllers, components, unit tests, ...)

```js
import generated from 'css-module'

const generatedFirst = generated('.first', 'components/first.hbs');
// .first[data-generated-1]

const generatedSecond = generated('.second', 'components/second.hbs');
// .second[data-generated-2]

const generatedSelector = `${generaatedFirst} ${generatedSecond}`;
// .fist[data-generated-1] .second[data-generated-2]
```
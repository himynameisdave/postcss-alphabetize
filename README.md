## PostCSS Alphabetize

[PostCSS] plugin that alphabetizes CSS properties within a given selector.

### Purpose

Some people like to keep their stylesheets organized with properties set alphabetically, like a hipster with their vinyl collection.

### Examples

With the magic of alphabetic sorting, this...

```css
.tomato {
  z-index: 1;
  font-size: 2rem;
  width: 100px;
  background-color: tomato;
  transition: background-color 0.35s ease-in;
  font-style: italic;
  position: absolute;
  appearance: none;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100px;
  border-radius: 100%;
  font-family: sans-serif;
  line-height: 1.6181;
}
```

...becomes this...

```css
.tomato {
  align-items: center;
  appearance: none;
  background-color: tomato;
  border-radius: 100%;
  display: flex;
  font-family: sans-serif;
  font-size: 2rem;
  font-style: italic;
  height: 100px;
  line-height: 1.6181;
  margin: 0 auto;
  position: absolute;
  transition: background-color 0.35s ease-in;
  width: 100px;
  z-index: 1;
}
```

### Usage

```js
postcss([ require('postcss-alphabetize') ])
```

See [PostCSS] docs for examples for your environment.

---

*Licenced under MIT (c) Made by [Dave Lunny](https://twitter.com/dave_lunny) in the beautiful year 2015*

[PostCSS]: https://github.com/postcss/postcss

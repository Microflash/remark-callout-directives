# remark-callout-directives

[![npm](https://img.shields.io/npm/v/@microflash/remark-callout-directives)](https://www.npmjs.com/package/@microflash/remark-callout-directives)
[![license](https://img.shields.io/npm/l/@microflash/remark-callout-directives)](./LICENSE.md)

[remark](https://github.com/remarkjs/remark) plugin to render callouts and admonitions with [directives](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444)

## Contents

- [Contents](#contents)
- [What’s this?](#whats-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
	- [Options](#options)
	- [Themes](#themes)
- [Examples](#examples)
	- [Example: callout with custom title](#example-callout-with-custom-title)
	- [Example: custom callouts](#example-custom-callouts)
	- [Example: configure aliases](#example-configure-aliases)
	- [Example: override the defaults](#example-override-the-defaults)
- [License](#license)

## What’s this?

This package is a [unified](https://github.com/unifiedjs/unified) ([remark](https://github.com/remarkjs/remark)) plugin to add support for callouts and admonitions using the [directives](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444). It depends on [remark-directive](https://github.com/remarkjs/remark-directive) which must be included before this plugin.

## When should I use this?

Callouts and admonitions are used to provide additional information related to a topic under discussion or draw out attention to potential possibilities. They are widely used in documentation by popular libraries, frameworks, and applications (for example, [Docusaurus](https://docusaurus.io/docs/markdown-features/admonitions), [Obsidian](https://help.obsidian.md/How+to/Use+callouts), etc). Use this plugin if you need something similar.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm](https://docs.npmjs.com/cli/install):

```sh
npm install @microflash/remark-callout-directives
```

In Deno, with [esm.sh](https://esm.sh/):

```js
import remarkCalloutDirectives from 'https://esm.sh/@microflash/remark-callout-directives'
```

In browsers, with [esm.sh](https://esm.sh/):

```html
<script type="module">
  import remarkCalloutDirectives from 'https://esm.sh/@microflash/remark-callout-directives?bundle'
</script>
```

## Use

Say we have the following file `example.md`:

```md
:::note
Some **content** with _Markdown_ `syntax`.
:::
```

And our module `example.js` looks as follows:

```js
import { read } from 'to-vfile'
import { remark } from 'remark'
import remarkDirective from 'remark-directive'
import remarkCalloutDirectives from '@microflash/remark-callout-directives'

main()

async function main() {
  const file = await remark()
    .use(remarkDirective)
    .use(remarkCalloutDirectives)
    .process(await read('example.md'))

  console.log(String(file))
}
```

Running that with `node example.js` yields:

```html
<aside class="callout callout-deter">
  <div class="callout-indicator">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint callout-hint-note"><path d="M12 8h.01M12 12v4"/><circle cx="12" cy="12" r="10"/></svg>
    <div class="callout-title">Note</div>
  </div>
  <div class="callout-content">
    <p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p>
  </div>
</aside>
```

> **Note** You should import [`remark-directive`](https://github.com/remarkjs/remark-directive) before this plugin for the callouts to work.

## API

The default export is `remarkCalloutDirectives`.

### Options

The following options are available. All of them are optional.

- `callouts`: an object containing all the callouts. By default, 5 callouts are configured, namely `note`, `commend`, `warn`, `deter`, and `assert`.
- `aliases`: a list of aliases for the `callouts`

### Themes

To style the callouts, import a theme from [`themes`](./themes/) folder.

#### [`themes/microflash.css`](./themes/microflash.css)

![Microflash theme](./samples/microflash.png)

#### [`themes/infima.css`](./themes/infima.css)

![Infima theme](./samples/infima.png)

#### [`themes/vitepress.css`](./themes/vitepress.css)

![VitePress theme](./samples/vitepress.png)

For more advanced customizations, take a look at the existing [themes](./themes/) and remix your own.

## Examples

### Example: callout with custom title

Say we have the following file `example.md`:

```md
:::warn{title="Hold on there"}
Some **content** with _Markdown_ `syntax`.
:::
```

Running `example.js` will yield:

```html
<aside class="callout callout-warn">
  <div class="callout-indicator">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint callout-hint-warn"><path d="M12 9v4m0 4h.01M8.681 4.082C9.351 2.797 10.621 2 12 2s2.649.797 3.319 2.082l6.203 11.904a4.28 4.28 0 0 1-.046 4.019C20.793 21.241 19.549 22 18.203 22H5.797c-1.346 0-2.59-.759-3.273-1.995a4.28 4.28 0 0 1-.046-4.019L8.681 4.082Z"/></svg>
    <div class="callout-title">Hold on there</div>
  </div>
  <div class="callout-content">
    <p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p>
  </div>
</aside>
```

### Example: custom callouts

You can add your own callouts as well. Say we have the following file `example.md`:

```md
:::shoutout{title="Well done!"}
Some **content** with _Markdown_ `syntax`.
:::
```

And our module `example.js` looks as follows:

```js
import { read } from 'to-vfile'
import { remark } from 'remark'
import remarkDirective from 'remark-directive'
import remarkCalloutDirectives from '@microflash/remark-callout-directives'

main()

async function main() {
  const file = await remark()
    .use(remarkDirective)
    .use(remarkCalloutDirectives, {
      callouts: {
        shoutout: {
          title: "Shoutout",
          hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint callout-hint-shoutout"><path d="M4.7 6.5h.01m8.49-2.8h.01m4.29 15.6h.01m2.79-8.5h.01m-6.41-.7 2.2-.7V6.5h2.8V3.7L21 3m-6.253 10.767c1.676-.175 2.93-.38 3.739-.064 1.234.483 1.497 1.529 1.409 3.008m-9.723-7.519c.175-1.676.38-2.93.064-3.739-.483-1.234-1.529-1.497-3.008-1.409M6.5 10.4l7.1 7.1L3 21z"/></svg>`
        }
      }
    })
    .process(await read('example.md'))

  console.log(String(file))
}
```

Running `example.js` will yield:

```html
<aside class="callout callout-shoutout">
  <div class="callout-indicator">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint callout-hint-shoutout"><path d="M4.7 6.5h.01m8.49-2.8h.01m4.29 15.6h.01m2.79-8.5h.01m-6.41-.7 2.2-.7V6.5h2.8V3.7L21 3m-6.253 10.767c1.676-.175 2.93-.38 3.739-.064 1.234.483 1.497 1.529 1.409 3.008m-9.723-7.519c.175-1.676.38-2.93.064-3.739-.483-1.234-1.529-1.497-3.008-1.409M6.5 10.4l7.1 7.1L3 21z"/></svg>
    <div class="callout-title">Well done!</div>
  </div>
  <div class="callout-content">
    <p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p>
  </div>
</aside>
```

### Example: configure aliases

Say we have the following file `example.md`:

```md
:::danger
Some **content** with _Markdown_ `syntax`.
:::
```

And our module `example.js` looks as follows:

```js
import { read } from 'to-vfile'
import { remark } from 'remark'
import remarkDirective from 'remark-directive'
import remarkCalloutDirectives from '@microflash/remark-callout-directives'

main()

async function main() {
  const file = await remark()
    .use(remarkDirective)
    .use(remarkCalloutDirectives, {
      aliases: {
        danger: "deter"
      }
    })
    .process(await read('example.md'))

  console.log(String(file))
}
```

Running that with `node example.js` yields:

```html
<aside class="callout callout-deter">
  <div class="callout-indicator">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint callout-hint-deter"><path d="M12 12s-5.6 4.6-3.6 8c1.6 2.6 5.7 2.7 7.2 0 2-3.7-3.6-8-3.6-8Z"/><path d="M13.004 2 8.5 9 6.001 6s-4.268 7.206-1.629 11.8c3.016 5.5 11.964 5.7 15.08 0C23.876 10 13.004 2 13.004 2Z"/></svg>
    <div class="callout-title">Danger</div>
  </div>
  <div class="callout-content">
    <p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p>
  </div>
</aside>
```

### Example: override the defaults

You can override the defaults by passing your own preferences; they will be merged on top of the default values.

Say we have the following file `example.md`:

```md
:::assert
Some **content** with _Markdown_ `syntax`.
:::
```

And our module `example.js` looks as follows:

```js
import { read } from 'to-vfile'
import { remark } from 'remark'
import remarkDirective from 'remark-directive'
import remarkCalloutDirectives from '@microflash/remark-callout-directives'

main()

async function main() {
  const file = await remark()
    .use(remarkDirective)
    .use(remarkCalloutDirectives, {
      callouts: {
        assert: {
          title: "Important",
          hint: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint callout-hint-assert"><path d="M12 8v4m0 4h.01m-9.731-5.018a1.997 1.997 0 0 0 0 2.036l4.14 7A2 2 0 0 0 8.141 21h7.718a2 2 0 0 0 1.722-.982l4.14-7a1.997 1.997 0 0 0 0-2.036l-4.14-7A2 2 0 0 0 15.859 3H8.141a2 2 0 0 0-1.722.982l-4.14 7Z"/></svg>`
        }
      }
    })
    .process(await read('example.md'))

  console.log(String(file))
}
```

Running that with `node example.js` yields:

```html
<aside class="callout callout-assert">
  <div class="callout-indicator">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="callout-hint callout-hint-assert"><path d="M12 8v4m0 4h.01m-9.731-5.018a1.997 1.997 0 0 0 0 2.036l4.14 7A2 2 0 0 0 8.141 21h7.718a2 2 0 0 0 1.722-.982l4.14-7a1.997 1.997 0 0 0 0-2.036l-4.14-7A2 2 0 0 0 15.859 3H8.141a2 2 0 0 0-1.722.982l-4.14 7Z"/></svg>
    <div class="callout-title">Important</div>
  </div>
  <div class="callout-content">
    <p>Some <strong>content</strong> with <em>Markdown</em> <code>syntax</code>.</p>
  </div>
</aside>
```

## License

[MIT](./LICENSE.md)

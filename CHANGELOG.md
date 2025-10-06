# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.0] - 2025-10-07

### Added

- Support collapsible callouts
- On-demand tag name customization with `is` property
- On-demand hiding hint icon with `showHint="false"` property

### Removed

- **Breaking** `showIndicator` option

### Changed

- Expose `generate` function through options to provide complete control over callout body
- **Breaking** GitHub, Microflash and Vitepress themes
- Simpler warning hint icon

## [4.4.0] - 2025-04-03

### Patched

- Upgrade to `hastscript@9.0.1`

## [4.3.3] - 2025-02-07

### Patched

- RCE vulnerability in Vitest <https://github.com/Microflash/remark-callout-directives/security/dependabot/4>

## [4.3.2] - 2024-10-26

### Patched

- Upgrade to `mdast-util-from-markdown@2.0.2`

## [4.3.1] - 2024-06-30

### Fixed

- Icon alignment in the bundled themes

## [4.3.0] - 2024-06-30

### Fixed

- Revert the hint icons are not wrapped inside a div (introduced in [4.0.0](#400---2024-02-17)). This should fix the sizing issues on icons when `callout-indicator` is a flex container and title breaks into multiple lines.

## [4.2.0] - 2024-06-11

### Added

- **Option to remove the indicator**, available on-demand using `showIndicator="false"` property. See the [example](https://github.com/Microflash/remark-callout-directives?tab=readme-ov-file#example-remove-the-indicator).
- **Docs on how to use themes** Step by step instructions on how to use a bundled theme.

## [4.1.0] - 2024-02-21

### Fixed

- Revert unwrapping single node in the callout body since it was naively getting rid of lists and blockquotes.

## [4.0.0] - 2024-02-17

### Added

- **New themes and ready to use aliases** for GitHub and VitePress lookalike callouts. Remix your own if things don't look fancy enough for your taste. Themes and configurations are now properly exposed through `package.json` so you can directly import them.
  
  For example, you can import GitHub configuration as follows.
  
  ```js
  import githubCalloutOptions from "@microflash/remark-callout-directives/config/github";
  
  unified().use(remarkParse).use(remarkDirective)
    .use(remarkCalloutDirectives, githubCalloutOptions)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(await read("example.md"));
  ```
  
  All themes now support light and dark color schemes (through [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)).

- This version gets rid of Infima theme; the plugin gives you enough flexibility to recreate it (check out the GitHub theme as the starting point).

### Changed

- **Sheds some DOM elements** The hint icons are no longer wrapped inside a `div`. ~~Also, if there's only one paragraph in the callout body, the content of paragraph are unwrapped instead of being wrapped inside a redundant paragraph element~~ (reverted in [4.1.0](#410---2024-02-21)). _This is where things might break for you_; you might have to tweak your styles to fix them.
- **Accessibility improvements** The hint icons are now marked as decorative through `aria-hidden=true`. I'm not a screen reader user, so please do let me know if you feel papercuts because of this plugin. I'd be exceedingly happy to improve things.

## [3.1.0] - 2024-02-06

### Changed

- Handle custom classes passed to callouts (earlier they were just being ignored; now they'd be appended to other callout classes)

## [3.0.0] - 2024-02-06

### Added

- Global `tagName` configuration

### Patched

- Upgrade to `hastscript@9.0.0`
- Upgrade to `defu@6.1.4`

## [2.0.0] - 2023-12-05

### Changed

- **Breaking** Drop support for Node.js versions below 16 (since the underlying dependencies now require Node.js 16)

### Patched

- Upgrade to `hastscript@8.0.0`
- Upgrade to `mdast-util-from-markdown@2.0.0`
- Upgrade to `unist-util-visit@5.0.0`
- Upgrade to `defu@6.1.3`

## [1.6.0] - 2023-07-06

### Changed

- Relax hint parsing to allow fancy SVGs

## [1.5.0] - 2022-12-20

### Added

- Support markdown in callout title

## [1.1.0] - 2022-12-20

### Changed

- Improve alias resolution

## [1.0.3] - 2022-12-19

### Changed

- Docs with details on element customization

## [1.0.2] - 2022-12-19

### Added

- New theme: VitePress

## [1.0.1] - 2022-12-19

### Added

- Docs
- New theme: Infima
- Theme previews

## [1.0.0] - 2022-12-18

### Added

- Plugin with Microflash theme

[5.0.0]: https://github.com/Microflash/remark-callout-directives/compare/v4.4.0...v5.0.0
[4.4.0]: https://github.com/Microflash/remark-callout-directives/compare/v4.3.3...v4.4.0
[4.3.3]: https://github.com/Microflash/remark-callout-directives/compare/v4.3.2...v4.3.3
[4.3.2]: https://github.com/Microflash/remark-callout-directives/compare/v4.3.1...v4.3.2
[4.3.1]: https://github.com/Microflash/remark-callout-directives/compare/v4.3.0...v4.3.1
[4.3.0]: https://github.com/Microflash/remark-callout-directives/compare/v4.2.0...v4.3.0
[4.2.0]: https://github.com/Microflash/remark-callout-directives/compare/v4.1.0...v4.2.0
[4.1.0]: https://github.com/Microflash/remark-callout-directives/compare/v4.0.0...v4.1.0
[4.0.0]: https://github.com/Microflash/remark-callout-directives/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/Microflash/remark-callout-directives/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/Microflash/remark-callout-directives/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/Microflash/remark-callout-directives/compare/v1.6.0...v2.0.0
[1.6.0]: https://github.com/Microflash/remark-callout-directives/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/Microflash/remark-callout-directives/compare/v1.1.0...v1.5.0
[1.1.0]: https://github.com/Microflash/remark-callout-directives/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/Microflash/remark-callout-directives/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/Microflash/remark-callout-directives/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Microflash/remark-callout-directives/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Microflash/remark-callout-directives/releases/tag/v1.0.0

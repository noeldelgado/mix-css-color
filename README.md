# mix-css-color
[![npm version][npm-img]][npm-url]
![](https://img.badgesize.io/noeldelgado/mix-css-color/master/index.js.svg?compression=gzip)
[![License][license-img]][license-url]
[![Known Vulnerabilities][snyk-img]][snyk-url]
[![Libraries.io dependency status for latest release][librariesio-img]][librariesio-url]

Mix two colors together in variable proportion. Opacity is included in the calculations.

_Output should be similar to the `less`/`sass` `mix()` function._

### Supports
* \<color value\>
	* Hexadecimal RGB value: #RGB #RRGGBB
	* #RGBA #RRGGBBAA (4 and 8-digit hexadecimal RGBA notation)
	* RGB/A color module level 3 and 4 (number, percentage)
	* HSL/A color module level 3 and 4 (number, deg, rad, turn)
* \<color keyword\>
	* One of the [pre-defined color keywords](https://www.w3.org/wiki/CSS/Properties/color/keywords).
* transparent
	* Shorthand for transparent black, rgba(0,0,0,0).

### Does not support
* currentColor
* inherit

## Installation

**NPM**

```sh
npm i mix-css-color
```

Or as a `<script>` tag from a CDN as `mixCssColor`:

**Unpkg CDN**

```html
<script src="https://unpkg.com/mix-css-color"></script>
```

**jsDelivr CDN**

```html
<script src="https://cdn.jsdelivr.net/npm/mix-css-color"></script>
```

## Usage
```js
import mix from 'mix-css-color'

mix('rgb(255 255 255 / 1)', 'red') // default 50% mix
//> {rgba: [255, 128, 128, 1], hsla: [0, 100, 75, 1], hex: '#ff8080', hexa: '#ff8080ff' }

mix('black', 'rgba(255, 0, 0, 0.22)', 22) // 22% mix
//> { rgba: [78, 0, 0, 0.3916], hsla: [0, 100, 15, 0.3916], hex: '#4e0000', hexa: '#4e000064' }
  
mix('rgba(100% 255 100% / 0)') // error: mixed percetange with integer
//> null
```
See [tests](https://github.com/noeldelgado/mix-css-color/tree/master/test) for more cases.

## API
### mix(color1:string, color2: string, [percentage: number=50])
- @param color1 - CSS string
- @param color2 - CSS string
- @param [percentage=50] - a number within 0 and 100

## Dev
```sh
npm install   # install dependencies
npm test      # run the tests
npm run dev   # watch for changes and rebuild
```

## Related
- [parse-css-color](https://github.com/noeldelgado/parse-css-color) - Parse a CSS color string
- [values.js](https://github.com/noeldelgado/values.js) - Get the tints and shades of a CSS color

## License
MIT © [Noel Delgado](http://pixelia.me/)

[npm-img]: https://img.shields.io/npm/v/mix-css-color.svg?logo=npm&label=NPM
[license-img]: https://img.shields.io/npm/l/mix-css-color
[license-url]: https://github.com/noeldelgado/mix-css-color/blob/master/LICENSE
[npm-url]: https://www.npmjs.com/package/mix-css-color
[snyk-img]: https://snyk.io/test/npm/mix-css-color/badge.svg
[snyk-url]: https://snyk.io/test/npm/mix-css-color
[librariesio-img]: https://img.shields.io/librariesio/release/npm/mix-css-color.svg?logo=librariesdotio
[librariesio-url]: https://libraries.io/npm/mix-css-color
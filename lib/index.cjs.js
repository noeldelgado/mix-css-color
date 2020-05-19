'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var parse = _interopDefault(require('parse-css-color'));
var hsl2rgb = _interopDefault(require('pure-color/convert/hsl2rgb'));
var rgb2hex = _interopDefault(require('pure-color/convert/rgb2hex'));
var rgb2hsl = _interopDefault(require('pure-color/convert/rgb2hsl'));

/**
 * mix-css-color
 * @version v0.1.0
 * @link http://github.com/noeldelgado/mix-css-color/
 * @license MIT
 */

function parseColor(color) {
  const res = parse(color);
  if (res === null) return null;
  if (res.type === 'hsl') res.values = hsl2rgb(res.values);
  return res;
}

/**
 * Mix two colors together in variable proportion. Opacity is included in the calculations.
 * Copyright (c) 2006-2009 Hampton Catlin, Natalie Weizenbaum, and Chris Eppstein
 * http://sass-lang.com
 * @see https://github.com/less/less.js/blob/cae5021358a5fca932c32ed071f652403d07def8/lib/less/functions/color.js#L302
 */
function mix(color1, color2, percentage = 50) {
  const c1 = parseColor(color1);
  const c2 = parseColor(color2);

  if (!c1 || !c2) return null;

  const p = percentage / 100.0;
  const w = p * 2 - 1;
  const a = c1.alpha - c2.alpha;
  const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
  const w2 = 1 - w1;
  const [r, g, b] = c1.values.map((c, i) => Math.round(c1.values[i] * w1 + c2.values[i] * w2));
  const alpha = parseFloat((c1.alpha * p + c2.alpha * (1 - p)).toFixed(8));

  return {
    hex: rgb2hex([r, g, b]),
    hexa: rgb2hex([r, g, b, alpha]),
    rgba: [r, g, b, alpha],
    hsla: [...rgb2hsl([r, g, b]).map(Math.round), alpha]
  };
}

module.exports = mix;

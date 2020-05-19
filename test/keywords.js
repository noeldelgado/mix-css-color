import tape from 'tape';

import mix from '..';

tape('keywords', (t) => {
  const { deepEqual, end, equal } = t;

  equal(mix('foo', 'red'), null, 'invalid foo');
  equal(mix('red', 'bar'), null, 'invalid bar');
  equal(mix('re', 'red'), null, 'invalid re');
  equal(mix(' red ', 'red'), null, 'leading whitespace "red "');
  equal(mix('red ', 'red'), null, 'trailing whitespace "red "');

  deepEqual(
    mix('transparent', 'transparent'),
    {
      rgba: [0, 0, 0, 0],
      hsla: [0, 0, 0, 0],
      hex: '#000000',
      hexa: '#00000000'
    },
    'transparent -> transparent : 50'
  );

  deepEqual(
    mix('tomato', 'cyan'),
    {
      rgba: [128, 177, 163, 1],
      hsla: [163, 24, 60, 1],
      hex: '#80b1a3',
      hexa: '#80b1a3ff'
    },
    'tomato -> cyan : 50'
  );

  deepEqual(
    mix('tomato', '#0099ff80', 42),
    {
      rgba: [174, 116, 129, 0.71113725],
      hsla: [347, 26, 57, 0.71113725],
      hex: '#ae7481',
      hexa: '#ae7481b5'
    },
    'tomato -> #0099ff80 : 42'
  );

  deepEqual(
    mix('black', 'rgba(255, 0, 0, 0.22)', 22),
    {
      rgba: [78, 0, 0, 0.3916],
      hsla: [0, 100, 15, 0.3916],
      hex: '#4e0000',
      hexa: '#4e000064'
    },
    'black -> rgba(255, 0, 0, 0.22) : 22'
  );

  deepEqual(
    mix('tomato', 'rgb(0 255 255 / 0.5)', 80),
    {
      rgba: [235, 111, 85, 0.9],
      hsla: [10, 79, 63, 0.9],
      hex: '#eb6f55',
      hexa: '#eb6f55e6'
    },
    'tomato -> rgb(0 255 255 / 0.5) : 80'
  );

  deepEqual(
    mix('tomato', 'hsla(360, 100%, 50%, 0.8)', 40),
    {
      rgba: [255, 50, 36, 0.88],
      hsla: [4, 100, 57, 0.88],
      hex: '#ff3224',
      hexa: '#ff3224e0'
    },
    'tomato -> hsla(360, 100%, 50%, 0.8) : 40'
  );

  end();
});

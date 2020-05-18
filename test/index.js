import tape from 'tape';

import mix from '..';

tape('hex', (test) => {
  const { deepEqual, end, throws } = test;

  throws(() => mix('foo', 'red'), {
    name: 'Error',
    message: 'cannot parse color from “foo”'
  });

  throws(() => mix('red', 'bar'), {
    name: 'Error',
    message: 'cannot parse color from “bar”'
  });

  deepEqual(mix('rgb(255 255 255 / 1)', 'red'), {
    rgba: [255, 128, 128, 1],
    hsla: [0, 100, 75, 1],
    hex: '#ff8080',
    hexa: '#ff8080ff'
  });

  deepEqual(mix('rgb(255, 255, 255, 100%)', 'hsl(360 100% 50% / 1)', 100), {
    rgba: [255, 255, 255, 1],
    hsla: [0, 0, 100, 1],
    hex: '#ffffff',
    hexa: '#ffffffff'
  });

  deepEqual(mix('black', 'rgba(255, 0, 0, 0.22)', 22), {
    rgba: [78, 0, 0, 0.3916],
    hsla: [0, 100, 15, 0.3916],
    hex: '#4e0000',
    hexa: '#4e000064'
  });

  deepEqual(mix('tomato', '#0099ff80', 42), {
    rgba: [174, 116, 129, 0.71113725],
    hsla: [347, 26, 57, 0.71113725],
    hex: '#ae7481',
    hexa: '#ae7481b5'
  });

  end();
});

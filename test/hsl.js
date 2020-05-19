import tape from 'tape';

import mix from '..';

tape('hsl', (t) => {
  const { deepEqual, equal, end } = t;

  equal(mix('hsl()', '#fff'), null, 'missing channels');

  deepEqual(
    mix('hsl(0 0% 0% / 0)', 'hsl(0 0% 0% / 0)'),
    {
      rgba: [0, 0, 0, 0],
      hsla: [0, 0, 0, 0],
      hex: '#000000',
      hexa: '#00000000'
    },
    'transparent -> transparent : default weight 50'
  );

  deepEqual(
    mix('hsl(9, 100%, 64%)', 'hsl(180, 100%, 50%)'),
    {
      rgba: [128, 177, 163, 1],
      hsla: [163, 24, 60, 1],
      hex: '#80b1a3',
      hexa: '#80b1a3ff'
    },
    'hsl(9, 100%, 64%) -> hsl(180, 100%, 50%) : 50'
  );

  deepEqual(
    mix('hsl(9, 100%, 64%)', '#0099ff80', 42),
    {
      rgba: [174, 116, 129, 0.71113725],
      hsla: [347, 26, 57, 0.71113725],
      hex: '#ae7481',
      hexa: '#ae7481b5'
    },
    'hsl(9, 100%, 64%)  -> #0099ff80 : 42'
  );

  deepEqual(
    mix('hsl(0 0% 0% / 1)', 'rgba(255, 0, 0, 0.22)', 22),
    {
      rgba: [78, 0, 0, 0.3916],
      hsla: [0, 100, 15, 0.3916],
      hex: '#4e0000',
      hexa: '#4e000064'
    },
    'hsl(0 0% 0% / 1) -> rgba(255, 0, 0, 0.22) : 22'
  );

  deepEqual(
    mix('hsl(9 100% 64%)', 'rgb(0 255 255 / 0.5)', 80),
    {
      rgba: [235, 111, 86, 0.9],
      hsla: [10, 79, 63, 0.9],
      hex: '#eb6f56',
      hexa: '#eb6f56e6'
    },
    'hsl(9 100% 64%) -> rgb(0 255 255 / 0.5) : 80'
  );

  deepEqual(
    mix('hsl(0 0% 100% / 1)', 'hsl(0 100% 50% / 1)'),
    {
      rgba: [255, 128, 128, 1],
      hsla: [0, 100, 75, 1],
      hex: '#ff8080',
      hexa: '#ff8080ff'
    },
    'hsl(0 0% 100% / 1) -> hsl(0 100% 50% / 1) : 50'
  );

  deepEqual(
    mix('hsl(9 100% 64%)', 'hsla(360 100% 50% / 0.8)', 40),
    {
      rgba: [255, 49, 36, 0.88],
      hsla: [4, 100, 57, 0.88],
      hex: '#ff3124',
      hexa: '#ff3124e0'
    },
    'hsl(9 100% 64%) -> hsla(360 100% 50% / 0.8) : 40'
  );

  end();
});

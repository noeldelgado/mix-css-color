import tape from 'tape';

import mix from '..';

tape.only('misc', (t) => {
  const { equal, end } = t;

  equal(mix(), null);
  equal(mix(''), null);
  equal(mix(undefined), null); // eslint-disable-line
  equal(mix(null), null); // eslint-disable-line
  equal(mix('', ''), null);
  equal(mix('', 'red'), null);
  equal(mix('red', ''), null);
  equal(mix(undefined, 'red'), null); // eslint-disable-line
  equal(mix('red', undefined), null); // eslint-disable-line
  equal(mix(undefined, undefined), null); // eslint-disable-line
  equal(mix(null, 'red'), null);
  equal(mix(null), null);
  equal(mix('currentColor', 'red'), null);
  equal(mix('inherit', 'red'), null);

  end();
});

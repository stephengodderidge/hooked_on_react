import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Hierarchy, IMyObject } from 'components/atoms';
import React from 'react';
import docs from './docs.mkd';

const hierarchy: IMyObject = {
  name: 'Hierarchy Level 1',
  children: [
    {
      name: 'Hierarchy Child 1',
      children: [],
    },
    {
      name: 'Hierarchy Child 2',
      children: [
        {
          name: 'Nested Child',
          children: [],
        },
      ],
    },
  ],
};

storiesOf('_PATTERNS', module).add(
  'Children as Object',
  withInfo({
    text: docs,
    source: false,
    header: false,
    propTables: [],
    propTablesExclude: [],
    inline: true,
  })(() => <Hierarchy>{hierarchy}</Hierarchy>),
);

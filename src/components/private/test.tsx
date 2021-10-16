/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React from 'react';
import { shallow } from 'enzyme';

import { Private } from './index';

describe('Private Container', () => {
  describe('Private', () => {
    const mount = shallow(
      <Private loading={false} authorized={true}>some text to imitate a children</Private>,
    );
    it('<Private /> is authorized test should work', () => {
      expect(mount.find('Private')).toHaveLength(0);
    });
  });
});

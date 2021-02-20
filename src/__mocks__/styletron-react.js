// eslint-disable-next-line import/prefer-default-export
import React from 'react';

export const styled        = (Component) => (props) => React.createElement(Component, props);
export const withStyle     = (Component) => () => Component;
export const withStyleDeep = (Component) => () => Component;

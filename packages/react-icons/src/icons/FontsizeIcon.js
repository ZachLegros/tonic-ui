// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const FontsizeIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon
      ref={ref}
      viewBox="0 0 16 16"
      {...styleProps}
      {...props}
    >
      <g><path key="fontsize-0" d="M1 8.5h5v1.449h-0.597l-0.148-0.877-0.127-0.104h-1.042v4.459l0.148 0.128 0.563 0.044v0.4h-2.595v-0.4l0.567-0.044 0.144-0.128v-4.459h-1.037l-0.131 0.104-0.148 0.877h-0.597zM5 3h10v3h-1l-0.49-1.855-0.254-0.145h-2.256v9l0.469 0.111 1.127 0.089v0.8h-5.191v-0.8l1.135-0.089 0.46-0.111v-9h-2.247l-0.263 0.145-0.49 1.855h-1z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  FontsizeIcon.displayName = 'FontsizeIcon';
}
export default React.forwardRef(FontsizeIcon);

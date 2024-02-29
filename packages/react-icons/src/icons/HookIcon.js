// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const HookIcon = (
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
      <g><path key="hook-0" d="M14.25 2c0-1.103-0.897-2-2-2s-2 0.897-2 2c0 0.837 0.518 1.554 1.25 1.851v7.149c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5h2.5l-4-6v6c0 2.75 2.25 5 5 5h0c2.75 0 5-2.25 5-5v-7.149c0.732-0.298 1.25-1.014 1.25-1.851zM12.25 3c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  HookIcon.displayName = 'HookIcon';
}
export default React.forwardRef(HookIcon);

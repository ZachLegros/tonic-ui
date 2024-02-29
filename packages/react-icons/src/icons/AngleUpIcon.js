// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const AngleUpIcon = (
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
      <g><path key="angle-up-0" d="M3.5 10l4.5-4.5 4.5 4.5-1 1-3.5-3.5-3.5 3.5-1-1z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  AngleUpIcon.displayName = 'AngleUpIcon';
}
export default React.forwardRef(AngleUpIcon);

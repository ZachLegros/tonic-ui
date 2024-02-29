// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const BoltIcon = (
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
      <g><path key="bolt-0" d="M6 16l0.823-7h-3.823l1-9h6l-2 6h5z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  BoltIcon.displayName = 'BoltIcon';
}
export default React.forwardRef(BoltIcon);

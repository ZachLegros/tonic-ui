// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const MobileIcon = (
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
      <g><path key="mobile-0" d="M12 0h-8c-0.552 0-1 0.448-1 1v0 14c0 0.552 0.448 1 1 1v0h8c0.552 0 1-0.448 1-1v0-14c0-0.552-0.448-1-1-1v0zM9 15h-2v-1h2zM12 13h-8v-11h8z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  MobileIcon.displayName = 'MobileIcon';
}
export default React.forwardRef(MobileIcon);

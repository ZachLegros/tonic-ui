// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const InstallIcon = (
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
      <g><path key="install-0" d="M8 11l-5-5h3v-5h4v5h3l-5 5zM15 10h-4l-3 3-3-3h-4c-0.6 0-1 0.4-1 1v3c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-3c0-0.5-0.4-1-1-1z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  InstallIcon.displayName = 'InstallIcon';
}
export default React.forwardRef(InstallIcon);

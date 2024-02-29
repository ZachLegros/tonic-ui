// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const PermissionIcon = (
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
      <g><path key="permission-0" d="M12.38 11h-1.36v-0.010l-0.020 5h-9v-5.090c-1.14-0.29-1.99-1.31-2-2.54 0-1.22 0.84-2.24 1.96-2.55h0.020c0.23-1.66 1.64-2.93 3.35-2.93h0.020c0.28 0 0.53 0.040 0.79 0.1 0.71-1.19 1.98-1.98 3.44-1.98h0.040c1.85 0 3.4 1.26 3.84 2.98v0.030c1.48 0.46 2.54 1.81 2.54 3.41-0.020 1.98-1.63 3.58-3.62 3.58zM3 15h7v-8h-1.020v1h-5v-1h-0.98v8zM5 7h3v-1h-3v1zM6.010 11.36l-1.19-1.19 0.36-0.36 0.82 0.83 1.82-1.84 0.36 0.36-2.17 2.2zM6.514 13.841l1.146 1.129 0.35-0.36-1.142-1.124 1.122-1.126-0.36-0.35-1.119 1.123-1.141-1.123-0.36 0.35 1.146 1.129-1.146 1.151 0.36 0.35 1.144-1.149z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  PermissionIcon.displayName = 'PermissionIcon';
}
export default React.forwardRef(PermissionIcon);

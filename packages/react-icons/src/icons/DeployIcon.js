// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const DeployIcon = (
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
      <g><path key="deploy-0" d="M1 2v3h14v-3h-14zM5 4h-3v-1h3v1zM1 9h14v-3h-14v3zM2 7h3v1h-3v-1zM10 10l5 5h-14v-2h9v-3z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  DeployIcon.displayName = 'DeployIcon';
}
export default React.forwardRef(DeployIcon);

// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const CollapseRightIcon = (
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
      <g><path key="collapse-right-0" d="M9.5 12.5l-1-1 3.5-3.5-3.5-3.5 1-1 4.5 4.5-4.5 4.5zM3.5 12.5l-1-1 3.5-3.5-3.5-3.5 1-1 4.5 4.5-4.5 4.5z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  CollapseRightIcon.displayName = 'CollapseRightIcon';
}
export default React.forwardRef(CollapseRightIcon);

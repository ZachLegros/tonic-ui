// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const ChevronRightIcon = (
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
      <g><path key="chevron-right-0" d="M12 8l-6.607 7-1.393-1.476 5.214-5.524-5.214-5.524 1.393-1.476z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ChevronRightIcon.displayName = 'ChevronRightIcon';
}
export default React.forwardRef(ChevronRightIcon);

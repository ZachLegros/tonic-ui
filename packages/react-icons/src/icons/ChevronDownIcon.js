// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const ChevronDownIcon = (
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
      <g><path key="chevron-down-0" d="M8 12l-7-6.607 1.476-1.393 5.524 5.214 5.524-5.214 1.476 1.393z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ChevronDownIcon.displayName = 'ChevronDownIcon';
}
export default React.forwardRef(ChevronDownIcon);

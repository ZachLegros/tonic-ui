// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const LockSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="lock-0" d="M13.25 6h-1.25v-3c-0.002-1.656-1.344-2.998-3-3h-2c-1.656 0.002-2.998 1.344-3 3v3h-1.25c-0.414 0.002-0.748 0.336-0.75 0.75v8.5c0.002 0.414 0.336 0.748 0.75 0.75h10.5c0.414-0.002 0.748-0.336 0.75-0.75v-8.5c-0.002-0.414-0.336-0.748-0.75-0.75h-0zM9 12h-2v-2h2zM10 6h-4v-3c0.001-0.552 0.448-0.999 1-1h2c0.552 0.001 0.999 0.448 1 1v0z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  LockSVGIcon.displayName = 'LockSVGIcon';
}
export default React.forwardRef(LockSVGIcon);
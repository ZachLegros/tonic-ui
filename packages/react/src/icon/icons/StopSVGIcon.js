// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const StopSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="stop-0" d="M3 3h10v10h-10v-10z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  StopSVGIcon.displayName = 'StopSVGIcon';
}
export default React.forwardRef(StopSVGIcon);
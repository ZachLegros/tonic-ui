// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const AlignCenterSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="align-center-0" d="M11 5h-6v-2h6zM13 6h-10v2h10zM12 9h-8v2h8zM14 12h-12v2h12z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  AlignCenterSVGIcon.displayName = 'AlignCenterSVGIcon';
}
export default React.forwardRef(AlignCenterSVGIcon);
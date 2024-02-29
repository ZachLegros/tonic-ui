// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const AlignRightSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="align-right-0" d="M14 5h-9v-2h9zM14 9h-9v2h9zM14 6h-11v2h11zM14 12h-12v2h12z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  AlignRightSVGIcon.displayName = 'AlignRightSVGIcon';
}
export default React.forwardRef(AlignRightSVGIcon);
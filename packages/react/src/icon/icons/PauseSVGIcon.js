// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const PauseSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="pause-0" d="M3 3h4v10h-4v-10zM9 3h4v10h-4v-10z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  PauseSVGIcon.displayName = 'PauseSVGIcon';
}
export default React.forwardRef(PauseSVGIcon);
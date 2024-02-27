// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const BoxOutSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="box-out-0" d="M10 13v-3h-5v-4h5v-3l5 5zM8 2h-6v12h6v1h-6c-0.552 0-1-0.448-1-1v0-12c0-0.552 0.448-1 1-1v0h6v1z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  BoxOutSVGIcon.displayName = 'BoxOutSVGIcon';
}
export default React.forwardRef(BoxOutSVGIcon);
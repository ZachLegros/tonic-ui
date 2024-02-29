// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const PictureSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="picture-0" d="M15 1h-14c-0.5 0-1 0.5-1 1v12c0 0.5 0.5 1 1 1h14c0.5 0 1-0.5 1-1v-12c0-0.6-0.4-1-1-1zM15 14h-14v-12h14v12zM14 13h-12v-3l2.5-3 2.5 2.5 3.5-4.5 3.5 4v4zM3 4.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  PictureSVGIcon.displayName = 'PictureSVGIcon';
}
export default React.forwardRef(PictureSVGIcon);
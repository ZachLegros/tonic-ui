// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const MobileOffSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="mobile-off-0" d="M13 12v-11c0.004-0.032 0.006-0.069 0.006-0.106 0-0.497-0.403-0.9-0.9-0.9-0.037 0-0.074 0.002-0.111 0.007l0.004-0h-8c-0.032-0.004-0.069-0.006-0.106-0.006-0.497 0-0.9 0.403-0.9 0.9 0 0.037 0.002 0.074 0.007 0.111l-0-0.004v1l-2-2-1 1 15 15 1-1zM4 2h8v9l-8-8zM4 13v-6l-1-1v9c-0.004 0.032-0.006 0.069-0.006 0.106 0 0.497 0.403 0.9 0.9 0.9 0.037 0 0.074-0.002 0.111-0.007l-0.004 0h8c0.009 0 0.019 0 0.029 0 0.266 0 0.506-0.116 0.67-0.3l0.001-0.001-2.7-2.7zM9 15h-2v-1h2z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  MobileOffSVGIcon.displayName = 'MobileOffSVGIcon';
}
export default React.forwardRef(MobileOffSVGIcon);
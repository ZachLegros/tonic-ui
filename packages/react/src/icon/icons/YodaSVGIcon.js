// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const YodaSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="yoda-0" d="M4.1 7.9c-1.5 0.4-2.7 1.6-3.1 3.1l-1 4h16l-1-4c-0.4-1.5-1.6-2.7-3.1-3.1-0.3-0.1-0.6-0.2-0.8-0.4 0.3-0.4 0.6-1 0.7-1.5v0c1 0.1 2-0.4 2.5-1.2 0 0 0.4-1 1.2-1.2 0.5-0.1 0.3-0.4 0.3-0.4-0.3-0.3-0.8-0.3-1.8 0-0.8 0.1-1.7 0.1-2.4-0.2-0.7-1.6-2-3-3.6-3s-2.9 1.4-3.6 3c-0.8 0.3-1.6 0.3-2.4 0.2-1-0.3-1.5-0.3-1.9-0.1 0 0-0.2 0.2 0.3 0.4 0.8 0.2 1.2 1.2 1.2 1.2 0.5 0.9 1.5 1.4 2.5 1.3v0c0.1 0.6 0.4 1.1 0.8 1.5-0.3 0.2-0.5 0.4-0.8 0.4z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  YodaSVGIcon.displayName = 'YodaSVGIcon';
}
export default React.forwardRef(YodaSVGIcon);
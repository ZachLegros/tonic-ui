// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const ArrowDownSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="arrow-down-0" d="M13.708 9.297l-5.705 5.726-5.739-5.707 1.41-1.418 3.326 3.307v-10.205h2v10.189l3.292-3.305z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  ArrowDownSVGIcon.displayName = 'ArrowDownSVGIcon';
}
export default React.forwardRef(ArrowDownSVGIcon);
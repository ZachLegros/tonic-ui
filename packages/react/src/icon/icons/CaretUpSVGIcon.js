// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const CaretUpSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="caret-up-0" d="M8 5l4 5h-8z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  CaretUpSVGIcon.displayName = 'CaretUpSVGIcon';
}
export default React.forwardRef(CaretUpSVGIcon);
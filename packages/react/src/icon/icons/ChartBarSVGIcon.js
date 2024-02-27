// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const ChartBarSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="chart-bar-0" d="M16 14v1h-16v-14h1v13zM5 9h-2v4h2zM8 5h-2v8h2zM11 7h-2v6h2zM14 3h-2v10h2z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  ChartBarSVGIcon.displayName = 'ChartBarSVGIcon';
}
export default React.forwardRef(ChartBarSVGIcon);
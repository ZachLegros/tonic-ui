// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const ChartLineSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="chart-line-0" d="M16 14v1h-16v-14h1v13zM3.404 11.377l3.336-3.285 2.993 2.993 5.681-5.639-1.414-1.414-4.246 4.246-3.016-3.016-1.414 1.414 0.003 0.003-3.325 3.273z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  ChartLineSVGIcon.displayName = 'ChartLineSVGIcon';
}
export default React.forwardRef(ChartLineSVGIcon);
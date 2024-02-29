// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const ChartPieIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon
      ref={ref}
      viewBox="0 0 16 16"
      {...styleProps}
      {...props}
    >
      <g><path key="chart-pie-0" d="M7 8l5.067 5.125c-1.173 1.159-2.787 1.875-4.567 1.875-3.59 0-6.5-2.91-6.5-6.5v0c0-3.59 2.41-6.5 6-6.5zM9.036 8l4.398 4.398c0.975-1.187 1.567-2.722 1.567-4.394 0-0.001 0-0.003 0-0.004v0zM8 1v6h6.922c-0.766-3.267-3.522-5.71-6.893-5.998l-0.029-0.002z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ChartPieIcon.displayName = 'ChartPieIcon';
}
export default React.forwardRef(ChartPieIcon);

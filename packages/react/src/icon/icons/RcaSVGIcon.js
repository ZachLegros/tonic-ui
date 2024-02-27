// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const RcaSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="rca-0" d="M13.5 8.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5v0c1.381 0 2.5 1.119 2.5 2.5v0zM16 8.5c-0 2.761-2.239 5-5 5-2.585 0-4.712-1.962-4.973-4.478l-0.002-0.021h-2.125c-0.202 0.865-0.966 1.5-1.879 1.5-0.007 0-0.015-0-0.022-0l0.001 0c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c0.006-0 0.013-0 0.021-0 0.913 0 1.678 0.635 1.877 1.487l0.003 0.013h2.125c0.263-2.538 2.39-4.5 4.975-4.5 2.761 0 5 2.239 5 5v0zM15 8.5c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 2.209 1.791 4 4 4v0c2.209 0 4-1.791 4-4v0z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  RcaSVGIcon.displayName = 'RcaSVGIcon';
}
export default React.forwardRef(RcaSVGIcon);
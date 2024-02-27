// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const ListCloseSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="list-close-0" d="M14 1c0.6 0 1 0.4 1 1v12c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-1h1v1h10v-12h-10v1h-1v-1c0-0.6 0.4-1 1-1h10zM12 5h-5v1h5v-1zM12 7.5h-7v1h7v-1zM12 10h-5v1h5v-1zM4.5 12.5l1-1-3.5-3.5 3.5-3.5-1-1-4.5 4.5 4.5 4.5z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  ListCloseSVGIcon.displayName = 'ListCloseSVGIcon';
}
export default React.forwardRef(ListCloseSVGIcon);
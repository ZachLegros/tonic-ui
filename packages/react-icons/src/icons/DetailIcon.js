// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const DetailIcon = (
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
      <g><path key="detail-0" d="M15 1h-14c-0.552 0-1 0.448-1 1v0 12c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-12c0-0.552-0.448-1-1-1v0zM15 14h-14v-11h14v11zM14 7h-5v-1h5v1zM14 9h-5v-1h5v1zM14 11h-5v-1h5v1zM5 11l-3-5h6z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  DetailIcon.displayName = 'DetailIcon';
}
export default React.forwardRef(DetailIcon);

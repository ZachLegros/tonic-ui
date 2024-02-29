// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const StarHalfIcon = (
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
      <g><path key="star-half-0" d="M16 6.122l-5.519-0.842-2.481-5.28-2.481 5.28-5.519 0.842 3.993 4.088-0.945 5.79 4.952-2.735 4.953 2.735-0.945-5.79zM8.483 12.39l-0.483-0.267v-9.771l1.803 3.837 4.121 0.629-2.984 3.056 0.695 4.257z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  StarHalfIcon.displayName = 'StarHalfIcon';
}
export default React.forwardRef(StarHalfIcon);

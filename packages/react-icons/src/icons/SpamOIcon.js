// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const SpamOIcon = (
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
      <g><path key="spam-o-0" d="M15 2h-14c-0.552 0.002-0.998 0.448-1 1v10c0.002 0.552 0.448 0.998 1 1h14c0.552-0.002 0.998-0.448 1-1v-10c-0.002-0.552-0.448-0.998-1-1h-0zM4.796 7.957l3.204 1.602 3.204-1.602 3.362 5.043h-13.131zM1 11.849v-5.79l2.895 1.447zM12.105 7.506l2.895-1.447v5.79zM4 3h11v1.941l-7 3.5-7-3.5v-1.941z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  SpamOIcon.displayName = 'SpamOIcon';
}
export default React.forwardRef(SpamOIcon);

// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const EmailOIcon = (
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
      <g><path key="email-o-0" d="M15 2h-14c-0.552 0-1 0.448-1 1v0 10c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-10c0-0.552-0.448-1-1-1v0zM15 3v1l-7 4.75-7-4.75v-1h14zM1 13v-7.76l7 4.76 7-4.78v7.78h-14z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  EmailOIcon.displayName = 'EmailOIcon';
}
export default React.forwardRef(EmailOIcon);

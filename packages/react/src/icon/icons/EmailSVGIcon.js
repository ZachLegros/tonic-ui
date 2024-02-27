// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const EmailSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="email-0" d="M8 8.75l8-5.55v-0.2c0-0.552-0.448-1-1-1v0h-14c-0.552 0-1 0.448-1 1v0 0.19z" />,<path key="email-1" d="M8 10l-8-5.54v8.54c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-8.54z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  EmailSVGIcon.displayName = 'EmailSVGIcon';
}
export default React.forwardRef(EmailSVGIcon);
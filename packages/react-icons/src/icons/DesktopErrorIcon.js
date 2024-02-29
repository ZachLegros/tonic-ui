// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const DesktopErrorIcon = (
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
      <g><path key="desktop-error-0" d="M14 7c-0.56-0.439-1.234-0.76-1.969-0.914l-0.031-0.006c-0.297-0.063-0.639-0.099-0.989-0.099-2.045 0-3.804 1.228-4.578 2.987l-0.013 0.032c-0.13 0.285-0.24 0.62-0.314 0.967l-0.006 0.033c-0.064 0.299-0.1 0.643-0.1 0.995 0 0.002 0 0.004 0 0.005v-0c0 0.13 0 0.25 0 0.38 0.009 0.193 0.027 0.372 0.054 0.548l-0.004-0.028s0 0.070 0 0.1 0.080 0.26 0.12 0.39c0.063 0.243 0.131 0.447 0.212 0.643l-0.012-0.033c0.094 0.199 0.184 0.363 0.282 0.521l-0.012-0.021c0.886 1.482 2.482 2.459 4.306 2.459 2.761 0 5-2.239 5-5 0-1.606-0.758-3.036-1.935-3.951l-0.011-0.008zM12 11l2 2-1 1-2-2-2 2-1-1 2-2-2-2 1-1 2 2 2-2 1 1-2 2zM5 11h-4c-0.552 0-1-0.448-1-1v0-9c0-0.552 0.448-1 1-1v0h12c0.552 0 1 0.448 1 1v0 4.8c-0.576-0.339-1.248-0.59-1.964-0.715l-0.036-0.005v-3.080h-10v7h3.34c-0.215 0.593-0.34 1.277-0.34 1.991 0 0.003 0 0.006 0 0.009v-0zM5.070 11.89c0.119 0.791 0.375 1.502 0.745 2.139l-0.015-0.029h-3.3c-0.274-0.003-0.495-0.226-0.495-0.5 0-0.182 0.097-0.341 0.243-0.429l0.002-0.001z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  DesktopErrorIcon.displayName = 'DesktopErrorIcon';
}
export default React.forwardRef(DesktopErrorIcon);

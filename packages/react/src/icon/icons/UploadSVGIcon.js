// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const UploadSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="upload-0" d="M15 10v4c0 0.5-0.5 1-1 1h-12c-0.5 0-1-0.5-1-1v-4h1v4h12v-4h1zM6 11h4v-5h3l-5-5-5 5h3v5z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  UploadSVGIcon.displayName = 'UploadSVGIcon';
}
export default React.forwardRef(UploadSVGIcon);
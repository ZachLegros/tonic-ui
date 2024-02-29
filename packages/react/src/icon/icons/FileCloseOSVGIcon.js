// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const FileCloseOSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="file-close-o-0" d="M2 1h8v4h4v2h1v-3l-4-4h-9c-0.5 0-1 0.5-1 1v14c0 0.5 0.5 1 1 1h5v-1h-5v-14zM11 1.4l2.6 2.6h-2.6v-2.6zM15.8 14.8l0.2 0.2-1 1-3-3-3 3-1-1 3-3-3-3 1-1 3 3 3-3 1 1-3 3 2.8 2.8z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  FileCloseOSVGIcon.displayName = 'FileCloseOSVGIcon';
}
export default React.forwardRef(FileCloseOSVGIcon);
// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const FileImageOIcon = (
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
      <g><path key="file-image-o-0" d="M11 0h-9c-0.5 0-1 0.5-1 1v14c0 0.5 0.5 1 1 1h12c0.5 0 1-0.5 1-1v-11l-4-4zM11 1.4l2.6 2.6h-2.6v-2.6zM14 15h-12v-14h8v4h4v10zM3.5 6.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5zM10 7l3 4v3h-10v-2l2-3 2 2.5 3-4.5z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  FileImageOIcon.displayName = 'FileImageOIcon';
}
export default React.forwardRef(FileImageOIcon);

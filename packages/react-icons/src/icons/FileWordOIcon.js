// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const FileWordOIcon = (
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
      <g><path key="file-word-o-0" d="M11 0h-9c-0.5 0-1 0.5-1 1v14c0 0.5 0.5 1 1 1h12c0.5 0 1-0.5 1-1v-11l-4-4zM11 1.4l2.6 2.6h-2.6v-2.6zM14 15h-12v-14h8v4h4v10zM10 6h3v1h-1l-1.5 7h-1l-1.5-6.2-1.5 6.2h-1l-1.5-7h-1v-1h3v1h-1l1.1 4.9 1.4-5.9h1l1.5 5.9 1-4.9h-1v-1z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  FileWordOIcon.displayName = 'FileWordOIcon';
}
export default React.forwardRef(FileWordOIcon);

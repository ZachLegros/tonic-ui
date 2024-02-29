// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const FolderAddIcon = (
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
      <g><path key="folder-add-0" d="M16 11h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />,<path key="folder-add-1" d="M16 3.93c-0.005-0.516-0.424-0.932-0.94-0.932-0.021 0-0.042 0.001-0.063 0.002l0.003-0h-7l-1-2h-6c-0.018-0.001-0.039-0.002-0.060-0.002-0.516 0-0.935 0.416-0.94 0.931v3.070h16v-1.070z" />,<path key="folder-add-2" d="M7 15h-6c-0.559-0.033-1-0.494-1-1.058 0-0.004 0-0.008 0-0.012v0.001-7.93h16v1h-9v8z" />,<path key="folder-add-3" d="M7 7h3v3h-3v-3z" />,<path key="folder-add-4" d="M7 14h3v1h-3v-1z" />,<path key="folder-add-5" d="M14 6.99h1.99v3.010h-1.99v-3.010z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  FolderAddIcon.displayName = 'FolderAddIcon';
}
export default React.forwardRef(FolderAddIcon);

// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const FolderOIcon = forwardRef((
  {
    spin = false,
    sx,
    ...rest
  },
  ref,
) => {
  const styleProps = useIconStyle({ spin });
  return (
    <SVGIcon
      ref={ref}
      viewBox="0 0 16 16"
      sx={[
        styleProps,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      <g><path key="folder-o-0" d="M15 3h-7l-1-2h-6c-0.552 0-1 0.448-1 1v0 12c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-10c0-0.552-0.448-1-1-1v0zM6.38 2l0.72 1.45 0.28 0.55h7.62v1h-14v-3h5.38zM1 14v-8h14v8h-14z" /></g>
    </SVGIcon>
  );
});

FolderOIcon.displayName = 'FolderOIcon';

export default FolderOIcon;

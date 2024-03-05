// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const DeleteIcon = forwardRef((
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
      <g><path key="delete-0" d="M11 3l-1-2h-5l-1 2h-3v1h1v10c0 0.552 0.448 1 1 1v0h9c0.552 0 1-0.448 1-1v0-10h1v-1zM5 13h-1v-8h1zM7 13h-1v-8h1zM9 13h-1v-8h1zM11 13h-1v-8h1zM5.5 2h4l0.5 1h-5z" /></g>
    </SVGIcon>
  );
});

DeleteIcon.displayName = 'DeleteIcon';

export default DeleteIcon;

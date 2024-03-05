// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const WidgetsIcon = forwardRef((
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
      <g><path key="widgets-0" d="M7 2v6c0 0.6-0.4 1-1 1h-4c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h4c0.6 0 1 0.4 1 1zM6 11h-4c-0.6 0-1 0.4-1 1v2c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1zM14 1h-4c-0.6 0-1 0.4-1 1v2c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1zM14 7h-4c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1z" /></g>
    </SVGIcon>
  );
});

WidgetsIcon.displayName = 'WidgetsIcon';

export default WidgetsIcon;

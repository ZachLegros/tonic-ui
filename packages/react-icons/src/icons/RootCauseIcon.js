// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const RootCauseIcon = forwardRef((
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
      <g><path key="root-cause-0" d="M5 4.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5zM16 12c0 1.1-0.9 2-2 2-1 0-1.8-0.7-2-1.6-3-0.4-5.4-2.5-6.2-5.3-0.6 0.6-1.4 0.9-2.3 0.9-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c1.8 0 3.2 1.3 3.5 3h5.1c0.2-0.9 1-1.5 1.9-1.5 1.1 0 2 0.9 2 2s-0.9 2-2 2c-0.9 0-1.7-0.6-1.9-1.5h-5.1c-0.1 0.4-0.2 0.8-0.4 1.1 0.5 2.8 2.7 4.9 5.5 5.3 0.2-0.8 1-1.4 1.9-1.4 1.1 0 2 0.9 2 2zM6 4.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5z" /></g>
    </SVGIcon>
  );
});

RootCauseIcon.displayName = 'RootCauseIcon';

export default RootCauseIcon;

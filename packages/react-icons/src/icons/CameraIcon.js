// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const CameraIcon = forwardRef((
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
      <g><path key="camera-0" d="M2.020 1l-2.020 6 4 1.030-0.32 0.97 1.32 0.33v3.66l-5-0.010v2l7 0.020v-5.16l0.64 0.16 0.36-1 4 1 1-3 3-2-13.98-4z" /></g>
    </SVGIcon>
  );
});

CameraIcon.displayName = 'CameraIcon';

export default CameraIcon;

// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const DetailIcon = forwardRef((
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
      <g><path key="detail-0" d="M15 1h-14c-0.552 0-1 0.448-1 1v0 12c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-12c0-0.552-0.448-1-1-1v0zM15 14h-14v-11h14v11zM14 7h-5v-1h5v1zM14 9h-5v-1h5v1zM14 11h-5v-1h5v1zM5 11l-3-5h6z" /></g>
    </SVGIcon>
  );
});

DetailIcon.displayName = 'DetailIcon';

export default DetailIcon;

// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const ObservableIcon = forwardRef((
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
      <g><path key="observable-0" d="M15.429 3.429v0c-0.566-1.973-2.341-3.398-4.454-3.429l-0.003-0h-0.040c-1.679 0.004-3.145 0.913-3.937 2.264l-0.012 0.022h-0.971c-1.873 0.002-3.426 1.366-3.723 3.155l-0.003 0.022c-1.319 0.323-2.284 1.494-2.286 2.891v0.086c0.016 0.928 0.457 1.75 1.136 2.281l0.007 0.005v2.417l5.714 2.857 5.714-2.857v-1.714h1.6c2.272 0 4.114-1.842 4.114-4.114v0c-0.046-1.792-1.199-3.303-2.799-3.876l-0.030-0.009h-0.029zM6.286 14.4l-4-1.943v-3.771l4 1.943zM3.086 7.771l3.771-1.943 3.771 1.943-3.771 1.829zM11.429 12.457l-4 1.943v-3.771l4-1.943z" /></g>
    </SVGIcon>
  );
});

ObservableIcon.displayName = 'ObservableIcon';

export default ObservableIcon;

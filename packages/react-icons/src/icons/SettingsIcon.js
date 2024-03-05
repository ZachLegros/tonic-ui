// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const SettingsIcon = forwardRef((
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
      <g><path key="settings-0" d="M16 9v-2l-2.13-0.27c-0.163-0.757-0.447-1.427-0.834-2.023l0.014 0.023 1.33-1.7-1.38-1.39-1.74 1.36c-0.573-0.376-1.242-0.664-1.96-0.823l-0.040-0.007-0.26-2.17h-2l-0.26 2.13c-0.757 0.163-1.427 0.447-2.023 0.834l0.023-0.014-1.67-1.31-1.41 1.42 1.34 1.69c-0.376 0.573-0.664 1.242-0.823 1.96l-0.007 0.040-2.17 0.25v2l2.14 0.27c0.163 0.757 0.447 1.427 0.834 2.023l-0.014-0.023-1.32 1.7 1.41 1.41 1.71-1.38c0.574 0.37 1.243 0.65 1.961 0.803l0.039 0.007 0.24 2.19h2l0.27-2.14c0.757-0.163 1.427-0.447 2.023-0.834l-0.023 0.014 1.73 1.34 1.38-1.38-1.38-1.75c0.373-0.573 0.657-1.243 0.813-1.96l0.007-0.040zM8 11c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3v0c0 1.657-1.343 3-3 3v0z" /></g>
    </SVGIcon>
  );
});

SettingsIcon.displayName = 'SettingsIcon';

export default SettingsIcon;

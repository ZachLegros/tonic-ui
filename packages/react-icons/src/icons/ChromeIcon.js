// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const ChromeIcon = forwardRef((
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
      <g><path key="chrome-0" d="M4.242 6.759l-2.465-3.787c1.478-1.819 3.715-2.971 6.221-2.971 3.103 0 5.793 1.767 7.119 4.349l0.021 0.045-6.623-0.348c-0.101-0.009-0.219-0.014-0.338-0.014-1.791 0-3.321 1.12-3.927 2.698l-0.010 0.029zM5.303 8.001c0 0 0 0 0 0 0 1.489 1.207 2.697 2.697 2.697s2.697-1.207 2.697-2.697c0-1.489-1.207-2.697-2.697-2.697v0c-0 0-0.001 0-0.001 0-1.489 0-2.696 1.207-2.696 2.696 0 0 0 0.001 0 0.001v-0zM15.462 5.123l-4.507 0.232c0.595 0.723 0.955 1.658 0.955 2.677 0 0.895-0.278 1.724-0.752 2.408l0.009-0.014-3.616 5.561c0.132 0.008 0.286 0.012 0.442 0.012 4.42 0 8.002-3.583 8.002-8.002 0-1.034-0.196-2.022-0.553-2.929l0.019 0.054zM4.313 9.536l-3.010-5.919c-0.817 1.234-1.303 2.749-1.303 4.378 0 3.981 2.906 7.283 6.712 7.9l0.046 0.006 2.055-4.026c-0.208 0.036-0.447 0.057-0.691 0.057-1.668 0-3.111-0.967-3.798-2.371l-0.011-0.025z" /></g>
    </SVGIcon>
  );
});

ChromeIcon.displayName = 'ChromeIcon';

export default ChromeIcon;

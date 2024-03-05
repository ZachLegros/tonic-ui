// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const AddGroupIcon = forwardRef((
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
      <g><path key="add-group-0" d="M16 13h-3v3h-2v-3h-3v-2h3v-3h2v3h3zM0 7h13v-2h-13zM0 4h13v-2h-13zM0 10h10v-2h-10z" /></g>
    </SVGIcon>
  );
});

AddGroupIcon.displayName = 'AddGroupIcon';

export default AddGroupIcon;

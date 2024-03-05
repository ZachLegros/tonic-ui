// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const FilterDeleteIcon = forwardRef((
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
      <g><path key="filter-delete-0" d="M13.867 1.067v-1.067h-13.867v1.067zM5.333 8.533l-5.333-5.333v-1.067h13.867v1.067l-4.046 4.046-1.287-1.288-2.575 2.575 2.575 2.575v1.25l-2.575 2.575 0.39 0.39-1.015 0.677zM16 14.933l-1.067 1.067-3.2-3.2-3.2 3.2-1.067-1.067 3.2-3.2-3.2-3.2 1.067-1.067 3.2 3.2 3.2-3.2 1.067 1.067-3.2 3.2z" /></g>
    </SVGIcon>
  );
});

FilterDeleteIcon.displayName = 'FilterDeleteIcon';

export default FilterDeleteIcon;

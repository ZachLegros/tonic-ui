// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const AddIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon
      ref={ref}
      viewBox="0 0 16 16"
      {...styleProps}
      {...props}
    >
      <g><path key="add-0" d="M15 9h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  AddIcon.displayName = 'AddIcon';
}
export default React.forwardRef(AddIcon);

// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const AddSquareOIcon = (
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
      <g><path key="add-square-o-0" d="M7 9h-3v-2h3v-3h2v3h3v2h-3v3h-2v-3zM15 2v12c0 0.552-0.448 1-1 1v0h-12c-0.552 0-1-0.448-1-1v0-12c0-0.552 0.448-1 1-1v0h12c0.552 0 1 0.448 1 1v0zM14 2h-12v12h12v-12z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  AddSquareOIcon.displayName = 'AddSquareOIcon';
}
export default React.forwardRef(AddSquareOIcon);

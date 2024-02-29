// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const TagIcon = (
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
      <g><path key="tag-0" d="M9.577 0l-9.101 9.101c-0.282 0.27-0.457 0.65-0.457 1.071s0.175 0.8 0.456 1.070l0.001 0 4.283 4.282c0.27 0.282 0.65 0.457 1.071 0.457s0.8-0.175 1.070-0.456l0-0.001 9.1-9.101v-6.424zM12.5 5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v0c0 0.828-0.672 1.5-1.5 1.5v0z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  TagIcon.displayName = 'TagIcon';
}
export default React.forwardRef(TagIcon);

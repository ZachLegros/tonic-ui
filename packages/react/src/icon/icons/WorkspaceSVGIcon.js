// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const WorkspaceSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="workspace-0" d="M8 1l-7 3v8l7 3 7-3v-8l-7-3zM12.9 4.7l-4.9 2.4-4.9-2.4 4.9-2.1 4.9 2.1zM2.5 6.1l4.8 2.4v4.6l-4.8-2.1v-4.9zM8.7 13.1v-4.6l4.8-2.4v4.9l-4.8 2v0.1z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  WorkspaceSVGIcon.displayName = 'WorkspaceSVGIcon';
}
export default React.forwardRef(WorkspaceSVGIcon);
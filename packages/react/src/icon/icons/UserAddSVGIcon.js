// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SVGIcon from '../SVGIcon';
import { getIconStyleProps } from '../utils';

const UserAddSVGIcon = (
  {
    spin = false,
    ...props
  },
  ref
) => {
  const styleProps = getIconStyleProps({ spin });
  return (
    <SVGIcon ref={ref} viewBox="0 0 16 16" {...styleProps} {...props}>
      <g><path key="user-add-0" d="M7 10v4h-4.788c-4.005 0-1.572-3.5-0.425-4.666 0.996-1.006 2.25-1.754 3.656-2.136l0.057-0.013v-0.534c-1.192-0.575-2-1.774-2-3.162 0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.388-0.808 2.587-1.979 3.153l-0.021 0.009v0.534c0.573 0.152 1.071 0.349 1.54 0.596l-0.040-0.019v2.239zM13 11v-3h-2v3h-3v2h3v3h2v-3h3v-2z" /></g>
    </SVGIcon>
  )
};

if (process.env.NODE_ENV !== 'production') {
  UserAddSVGIcon.displayName = 'UserAddSVGIcon';
}
export default React.forwardRef(UserAddSVGIcon);
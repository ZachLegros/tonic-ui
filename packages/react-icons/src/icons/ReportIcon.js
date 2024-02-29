// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const ReportIcon = (
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
      <g><path key="report-0" d="M14 0h-12c-0.5 0-1 0.5-1 1v14c0 0.5 0.5 1 1 1h12c0.5 0 1-0.5 1-1v-14c0-0.6-0.4-1-1-1zM14 15h-12v-13h12v13zM12 12h-8v-1h8v1zM12 14h-8v-1h8v1zM9 10h-2v-5h2v5zM12 10h-2v-7h2v7zM6 10h-2v-3h2v3z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ReportIcon.displayName = 'ReportIcon';
}
export default React.forwardRef(ReportIcon);

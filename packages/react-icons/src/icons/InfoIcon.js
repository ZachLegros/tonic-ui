// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const InfoIcon = (
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
      <g><path key="info-0" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c0-4.418-3.582-8-8-8v0zM7 4h2v2h-2zM10 12h-4v-1h1v-3h-1v-1h3v4h1z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  InfoIcon.displayName = 'InfoIcon';
}
export default React.forwardRef(InfoIcon);

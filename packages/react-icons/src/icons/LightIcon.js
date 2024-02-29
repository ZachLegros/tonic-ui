// GENERATED BY icon/generate.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { getIconStyleProps } from '../utils';

const LightIcon = (
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
      <g><path key="light-0" d="M7.25 13.5h1.5v2.5h-1.5v-2.5z" />,<path key="light-1" d="M13.8 7h2.2v1.5h-2.2v-1.5z" />,<path key="light-2" d="M0 7h2.2v1.5h-2.2v-1.5z" />,<path key="light-3" d="M11.712 12.773l1.061-1.061 1.414 1.414-1.061 1.061-1.414-1.414z" />,<path key="light-4" d="M1.813 13.127l1.414-1.414 1.061 1.061-1.414 1.414-1.061-1.061z" />,<path key="light-5" d="M10.25 3.091v-3.091h-4.5v3.091c-1.5 0.819-2.5 2.384-2.5 4.183 0 2.623 2.127 4.75 4.75 4.75s4.75-2.127 4.75-4.75c0-1.799-1-3.365-2.475-4.171l-0.025-0.012z" /></g>
    </SVGIcon>
  );
};

if (process.env.NODE_ENV !== 'production') {
  LightIcon.displayName = 'LightIcon';
}
export default React.forwardRef(LightIcon);

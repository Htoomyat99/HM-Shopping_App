import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SettingIcon = props => (
  <Svg
    data-name="20.SETTING"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={props.width}
    height={props.height}
    {...props}>
    <Path
      fill={props.inColor}
      d="m28.28 12.77-1.66-.28a10 10 0 0 0-.62-1.55C30 6.73 25.22 2 21 6a11.2 11.2 0 0 0-1.55-.64c-.08-5.83-6.88-5.82-7 0a11.17 11.17 0 0 0-1.64.69c-4.22-4-9 .82-4.89 5a9.92 9.92 0 0 0-.64 1.55c-5.83.13-5.78 6.93.05 7a12.38 12.38 0 0 0 .65 1.55c-4 4.22.8 9 5 4.9a11.2 11.2 0 0 0 1.55.64c.11 5.84 6.91 5.8 7 0a9.58 9.58 0 0 0 1.55-.69c4.21 4.06 9-.77 4.92-4.95a11.32 11.32 0 0 0 .63-1.54l1.66-.28c3.56-.59 3.55-5.92-.01-6.46ZM28 17.21c-.73.26-2.89.08-3.07 1.13s-1.47 2.23-.87 3.33c.48.86 2.35 2.46 1.21 3.49s-2.63-.71-3.5-1.19c-1.12-.59-2.15.82-3.33.9-1.62.53-.17 4.09-2.33 4.13-1.54.07-1.36-2.33-1.63-3.31-.37-1.19-2.17-1-3-1.73s-2.21 1-3 1.41a1.26 1.26 0 0 1-1.76-1.73c2.37-3.16 1.43-2 .43-5.24-.18-1-2.26-.85-3.08-1.09a1.26 1.26 0 0 1 0-2.47c.69-.25 2.91-.11 3.06-1.14s1.49-2.24.88-3.34L6.62 8.49a1.26 1.26 0 0 1 1.74-1.76l1.88 1.33c1.15.59 2.23-.87 3.42-.94a1 1 0 0 0 .73-.81c.27-1 .07-3.37 1.61-3.31 2.16 0 .72 3.59 2.33 4.11 1.22.1 2.22 1.49 3.35.9.87-.49 2.46-2.36 3.5-1.22s-.71 2.63-1.2 3.5c-.59 1.11.83 2.2.89 3.34a1 1 0 0 0 .8.73l2.28.38a1.26 1.26 0 0 1 .05 2.47Z"
    />
    <Path
      fill={props.outColor}
      d="M16 8.64c-9.71.25-9.71 14.47 0 14.72 9.71-.25 9.71-14.47 0-14.72Zm0 12.72c-7.07-.18-7.07-10.54 0-10.72 7.07.18 7.07 10.54 0 10.72Z"
    />
  </Svg>
);

export default SettingIcon;

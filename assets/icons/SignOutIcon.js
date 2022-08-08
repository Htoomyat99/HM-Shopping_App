import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SignOutIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    width={props.width}
    height={props.height}
    {...props}>
    <Path
      fill={props.inColor}
      d="M10 12c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-3 1a1 1 0 1 1 .001-2.001A1 1 0 0 1 7 13zM8.035 15h-2.07A3.969 3.969 0 0 0 2 18.965V21a1 1 0 1 0 2 0v-2.035C4 17.882 4.882 17 5.965 17h2.07C9.118 17 10 17.882 10 18.965V21a1 1 0 1 0 2 0v-2.035A3.969 3.969 0 0 0 8.035 15zM29 3H14a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V5h13v22H15v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
    />
    <Path
      fill={props.outColor}
      d="M16.707 13.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414L16.414 17H23a1 1 0 1 0 0-2h-6.586l.293-.293a1 1 0 0 0 0-1.414z"
    />
  </Svg>
);

export default SignOutIcon;

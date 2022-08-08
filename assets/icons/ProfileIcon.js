import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ProfileIcon = props => (
  <Svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width={props.width}
    height={props.height}>
    <Path
      fill={props.outColor}
      d="M41.245 33.035a16 16 0 1 0-18.49 0A26.041 26.041 0 0 0 4 58a2 2 0 0 0 2 2h52a2 2 0 0 0 2-2 26.041 26.041 0 0 0-18.755-24.965ZM20 20a12 12 0 1 1 12 12 12.014 12.014 0 0 1-12-12ZM8.09 56A22.03 22.03 0 0 1 30 36h4a22.03 22.03 0 0 1 21.91 20Z"
    />
  </Svg>
);

export default ProfileIcon;

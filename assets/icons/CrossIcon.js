import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const CrossIcon = props => (
  <Svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={props.width}
    height={props.height}
    {...props}>
    <Path
      fill={props.Color}
      d="m286.17 256 134.25-134.25a21.33 21.33 0 1 0-30.17-30.17L256 225.83 121.75 91.58a21.33 21.33 0 1 0-30.17 30.17L225.83 256 91.58 390.25a21.33 21.33 0 1 0 30.17 30.17L256 286.17l134.25 134.25a21.33 21.33 0 1 0 30.17-30.17Z"
    />
  </Svg>
);

export default CrossIcon;

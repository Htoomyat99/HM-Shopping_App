import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon = props => (
  <Svg
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    {...props}>
    <Path
      clipRule="evenodd"
      d="M31.106 15H3.278l8.325-8.293a.999.999 0 1 0-1.414-1.414l-9.9 9.899a1.01 1.01 0 0 0 0 1.414l9.9 9.9a.999.999 0 1 0 1.414-1.414L3.278 17h27.828a1 1 0 0 0 0-2z"
      fill={props.Color}
      fillRule="evenodd"
    />
  </Svg>
);

export default BackIcon;

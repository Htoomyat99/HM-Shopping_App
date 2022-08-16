import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MoreIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={props.width}
    height={props.height}
    style={{
      enableBackground: 'new 0 0 16 16',
    }}
    xmlSpace="preserve"
    {...props}>
    <Path fill={props.Color} d="M0 0h16v2H0zM0 7h16v2H0zM0 14h16v2H0z" />
  </Svg>
);

export default MoreIcon;

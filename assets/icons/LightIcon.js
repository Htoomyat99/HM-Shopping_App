import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const LightIcon = props => (
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
    <Circle cx={8.5} cy={7.5} r={4.5} fill={props.inColor} />
    <Path
      fill={props.outColor}
      d="M8 0h1v2H8zM8 13h1v2H8zM14 7h2v1h-2zM1 7h2v1H1zM12.035 11.743l.707-.707 1.414 1.414-.707.707zM2.843 2.55l.707-.707 1.415 1.414-.707.707zM2.843 12.45l1.414-1.415.707.707-1.414 1.415zM12.035 3.257l1.414-1.414.708.707-1.415 1.415z"
    />
  </Svg>
);

export default LightIcon;

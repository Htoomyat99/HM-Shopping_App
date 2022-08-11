import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    stroke={props.outColor}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    width={props.width}
    height={props.height}
    {...props}>
    <Circle cx={14} cy={14} r={12} />
    <Path d="m23 23 7 7" />
  </Svg>
);

export default SearchIcon;

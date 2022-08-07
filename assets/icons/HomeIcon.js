import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 73.5 64.9"
    xmlSpace="preserve"
    width={props.width}
    height={props.height}
    {...props}>
    <Path
      fill={props.inColor}
      d="M60.1 63.6c1.3 0 2.3-1 2.3-2.3V36.8h6c2.2 0 4-1.8 4-4 0-1.3-.6-2.4-1.5-3.1L63.2 23V11.8c0-1.3-1.1-2.4-2.4-2.4h-4.9c-1.3 0-2.4 1.1-2.4 2.4v2.8l-13.8-12c-1.5-1.3-3.7-1.3-5.2 0L3 29.9c-1.3 1.1-1.7 2.8-1.1 4.4.6 1.6 2.1 2.6 3.7 2.6h6v24.5c0 1.3 1 2.3 2.3 2.3h13.5V45.8c0-2.5 2-4.6 4.6-4.6h10c2.5 0 4.6 2 4.6 4.6v17.8h13.5z"
    />
  </Svg>
);

export default SvgComponent;

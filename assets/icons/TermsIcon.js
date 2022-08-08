import * as React from 'react';
import Svg, {Defs, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 64"
    {...props}
    height={props.height}
    width={props.width}>
    <Defs></Defs>
    <G id="Layer_2" data-name="Layer 2">
      <G id="Layer_1-2" data-name="Layer 1">
        <Path
          fill={props.inColor}
          className="cls-1"
          d="M47.79 15a2.68 2.68 0 0 0-.57-.87L33.89.78A2.68 2.68 0 0 0 33 .21 2.59 2.59 0 0 0 32 0H2.67A2.66 2.66 0 0 0 0 2.67v58.66A2.66 2.66 0 0 0 2.67 64h42.66A2.66 2.66 0 0 0 48 61.33V16a2.59 2.59 0 0 0-.21-1ZM34.67 9.1l4.23 4.23h-4.23Zm8 49.57H5.33V5.33h24V16A2.68 2.68 0 0 0 32 18.67h10.67Z"
        />
        <Path
          fill={props.outColor}
          className="cls-1"
          d="M34.67 32H13.33a2.67 2.67 0 0 1 0-5.33h21.34a2.67 2.67 0 0 1 0 5.33ZM21.33 21.33h-8a2.67 2.67 0 0 1 0-5.33h8a2.67 2.67 0 1 1 0 5.33ZM34.67 42.67H13.33a2.67 2.67 0 0 1 0-5.34h21.34a2.67 2.67 0 0 1 0 5.34ZM34.67 53.33H13.33a2.67 2.67 0 0 1 0-5.33h21.34a2.67 2.67 0 0 1 0 5.33Z"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;

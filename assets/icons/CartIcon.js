import * as React from 'react';
import Svg, {Defs, Path, Circle} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

const CartIcon = props => (
  <Svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={props.width}
    height={props.height}>
    <Defs></Defs>
    <Path
      fill={props.inColor}
      d="M450.56 348.16H163.84l-40.96-204.8h368.64l-40.96 204.8z"
    />
    <Path
      className="cls-2"
      fill={props.outColor}
      d="M511.6 147.38a20.48 20.48 0 0 0-20.08-24.5H139.67l-17.19-85.94a20.48 20.48 0 0 0-20.08-16.46H20.48a20.48 20.48 0 1 0 0 41h65.13l37.67 188.35v.18l12.77 63.86 7.67 38.35a20.48 20.48 0 0 0 20.08 16.46h286.76a20.48 20.48 0 0 0 20.08-16.46L491.08 250v-.21Zm-45.06 16.46-12.29 61.44h-294.1l-11.5-57.47-.79-4ZM180.63 327.68l-12.29-61.44h277.72l-12.29 61.44Z"
    />
    <Circle className="cls-2" cx={225.28} cy={450.56} r={40.96} />
    <Circle className="cls-2" cx={389.12} cy={450.56} r={40.96} />
  </Svg>
);

export default CartIcon;

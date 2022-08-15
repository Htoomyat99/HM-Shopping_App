import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const HelpIcon = props => (
  <Svg
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2-2h24v24H-2z" />
      <Path
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm1 17H9v-2h2v2Zm2.07-7.75-.9.92C11.45 10.9 11 11.5 11 13H9v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25Z"
        fill={props.Color}
      />
    </G>
  </Svg>
);

export default HelpIcon;

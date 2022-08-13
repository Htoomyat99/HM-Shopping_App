import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FavoriteIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 426.668 426.668"
    width={props.width}
    height={props.height}
    style={{
      enableBackground: 'new 0 0 426.668 426.668',
    }}
    xmlSpace="preserve"
    {...props}>
    <Path
      fill={props.inColor}
      d="M401.788 74.476c-63.492-82.432-188.446-33.792-188.446 49.92 0-83.712-124.962-132.356-188.463-49.92-65.63 85.222-.943 234.509 188.459 320.265 189.393-85.756 254.08-235.043 188.45-320.265z"
    />
  </Svg>
);

export default FavoriteIcon;

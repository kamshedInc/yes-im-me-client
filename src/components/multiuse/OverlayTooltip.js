import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip'


function OverlayTooltip(props) {
    return (
      <Tooltip id="button-tooltip">
        {props}
      </Tooltip>
    );
}
export default OverlayTooltip
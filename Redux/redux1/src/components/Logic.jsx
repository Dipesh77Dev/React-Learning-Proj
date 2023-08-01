import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, resetNumber } from '../redux/action/index';

import Button from '@mui/material/Button';

const Logic = () => {
  const state1 = useSelector((state) => state.getUserDemo);
  const state2 = useSelector((state) => state.changeValue);
  const dispatch = useDispatch();

  return (
    <div className='logic'>
      <h3>Increment/Decrement Counter</h3>

      <div className='logic-container'>
        <input name="" type="text" value={state1} className="logic-input input1"></input>
        <hr className='logic-hr'/>
        <input name="" type="text" value={state2} className="logic-input input2"></input>

        <div className="logic-buttons">
          <Button variant="outlined" onClick={() => dispatch(incNumber())} style={{ marginLeft: '10px' }}>Increase</Button>
          <Button variant="outlined" onClick={() => dispatch(decNumber())} style={{ marginLeft: '10px' }}>Decrease</Button>
          <Button variant="outlined" onClick={() => dispatch(resetNumber())} style={{ marginLeft: '10px' }}>Reset</Button>
        </div>

      </div>

    </div>
  )
}

export default Logic;



/*
<input name="" type="text"></input>
<input name="" type="text" value="0"></input>
<Button variant="outlined" onClick = { () => incNumber()}>Increase</Button>
<Button variant="outlined" onClick={() => dispatch(resetNumber())} className="logic-indi-button">Reset</Button>
*/

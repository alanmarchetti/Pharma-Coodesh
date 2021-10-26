import React from 'react';
import { AuthContext } from '../../provider/data';

function Select() {
    const { search, handleChange } = React.useContext(AuthContext);
    return(
        <div className="col-md-4">

        <select
          className="form-select"
          id="inputGroupSelect01"
          onChange={handleChange}
          search={search}
        >
          <option value="neutro">Chosse..</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        
      </div>
    );
}

export { Select };
import React from 'react';
import { useState } from 'react';
import {NumericFormat} from 'react-number-format'
const Test = () => {
    const [v, setv] = useState();
    const handleChange=(val)=>{   
        var f=val.toLocaleString()
        setv(comma(val));
        
    }
    function comma(num) {
        return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    }
    console.log(v);
    return (
        <div style={{marginTop:'200px'}}>
            {/* <NumericFormat style={{border:'1px solid #000',display:'block'}} onChange={(e)=>handleChange(e.target.value)} value={v} displayType={'number'} thousandSeparator={true} prefix={'$'} /> */}

            <input onChange={(e)=>handleChange(e.target.value)} type="text" class="rls" value={v}></input>
        </div>
    );
}

export default Test;

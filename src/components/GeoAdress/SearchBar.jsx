import React from 'react';
import { debounce,handleChange } from '../../store/GeoAddress/GeoAddress.action';
import { useDispatch,useSelector } from 'react-redux';

const SearchBar = () => {
  let dispatch = useDispatch();
  let ref = React.useRef();
  let results = useSelector((state)=>state.results) || null;
  // console.log('results',results)

  return (
    <div>gi
        <input placeholder='Search Places...' onChange={({target:{value}})=>{
            debounce(handleChange,value,1000,dispatch,ref)}
            }/>
        {/* {results && results.map((result)=>{
          return (
            <div style={{border: '1px solid black',cursor: 'pointer'}} >{result.name},{result.state}</div>
          )
        })} */}
    </div>
  )
}

export default SearchBar;
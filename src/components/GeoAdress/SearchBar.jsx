import React from 'react';
import { debounce,handleChange } from '../../store/GeoAddress/GeoAddress.action';
import { useDispatch,useSelector } from 'react-redux';
import { SHOW_MAPS_LATITUDE_LONGITUDE } from '../../store/GeoAddress/GeoAddress.type';

const SearchBar = () => {
  let dispatch = useDispatch();
  let ref = React.useRef();
  let results = useSelector((state)=>state.results) || null;
  console.log('results',results)

  return (
    <div>
        <input placeholder='Search Places...' onChange={({target:{value}})=>{
            debounce(handleChange,value,1000,dispatch,ref)}
            }/>
        {results && results.map((result)=>{
          return (
            <div onClick={()=>dispatch({type: SHOW_MAPS_LATITUDE_LONGITUDE, lat: result.lat, lng: result.lon})} style={{border: '1px solid black',cursor: 'pointer'}} >{result.name},{result.state}</div>
          )
        })}
    </div>
  )
}

export default SearchBar;
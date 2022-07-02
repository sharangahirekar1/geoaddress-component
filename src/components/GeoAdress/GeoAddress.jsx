import React from 'react'
import SideBar from './SideBar';
import ShowMap from './ShowMap';
import SearchBar from './SearchBar';
import { useSelector,useDispatch } from 'react-redux';
import { GeoCoding } from '../../store/GeoAddress/GeoAddress.action';


const GeoAddress = () => {
  let dispatch = useDispatch();
  let goSearch = useSelector((state)=>state.goSearch);
  let query = useSelector((state)=>state.query);
  React.useEffect(() => {
    GeoCoding(query,dispatch);
  },[query])
  return (
    <div style={{display: 'flex',}}>
      <SideBar /><ShowMap/><div style={{position:"absolute",right:'0',top:'0'}}>{goSearch?<SearchBar/>:null}</div>
        
    </div>
  )
}

export default GeoAddress;
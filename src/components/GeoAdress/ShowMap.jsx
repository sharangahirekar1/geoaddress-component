import React from 'react'
import styled from 'styled-components';
import { Map, Marker, Overlay } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers';
import axios from 'axios';
import { getLocation, ReverseGeoCoding } from '../../store/GeoAddress/GeoAddress.action';
import { useDispatch,useSelector } from 'react-redux';


const ShowMap = () => {
  let dispatch = useDispatch();
  let latiV = useSelector((state)=>state.lat);
  let longV = useSelector((state)=>state.lng);
  console.log(latiV,longV,'latitude and longitude');


  React.useEffect(()=>{
    if(latiV == "" & longV == ""){
      getLocation(dispatch);
    }
  },[latiV, longV])

  React.useEffect(()=>{
     ReverseGeoCoding(dispatch,latiV,longV);
  },[latiV,longV])

  const Container = styled.div`
  background-color:grey;
  width:75px;
`;
  return (
    <Container id='map' style={{backgroundColor:"grey",width:"100%",height:"100vh"}} >
      <Map provider={osm} height={700} defaultCenter={[latiV,longV]} center={[latiV,longV]} defaultZoom={11}>
        <Marker width={50} anchor={[latiV,longV ]} />
        {/* <Overlay anchor={[latiV,longV]} offset={[120, 79]}>
          <img src='/logo192.png' width={240} height={158} alt='' />
        </Overlay> */}
      </Map>
    </Container>
  )
}

export default ShowMap;
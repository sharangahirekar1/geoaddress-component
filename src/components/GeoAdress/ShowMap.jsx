import React from 'react'
import styled from 'styled-components';
import { Map, Marker } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers';
import axios from 'axios';
import { getLocation, ReverseGeoCoding } from '../../store/GeoAddress/GeoAddress.action';
import { useDispatch,useSelector } from 'react-redux';


const ShowMap = () => {
  let dispatch = useDispatch();
  let latiV = useSelector((state)=>state.lat);
  let longV = useSelector((state)=>state.lng);



  getLocation(dispatch);

  React.useEffect(()=>{
     ReverseGeoCoding(dispatch,latiV,longV);
  },[latiV,longV])

  const Container = styled.div`
  background-color:grey;
  width:75px;
`;
  return (
    <Container id='map' style={{backgroundColor:"grey",width:"100%",height:"100vh"}} >
      <Map provider={osm} height={600} defaultCenter={[latiV,longV]} defaultZoom={11}>
        <Marker width={50} anchor={[latiV,longV ]} />
      </Map>
    </Container>
  )
}

export default ShowMap;
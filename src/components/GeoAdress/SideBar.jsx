import React from 'react'
import styled from 'styled-components';
import { FaMapMarker } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { SIDEBAR_GOSEARCH } from '../../store/GeoAddress/GeoAddress.type';

const Container = styled.div`
background-color:#ffffff;
width:25%;
height:100vh;
`;
const Button = styled.div`
border:2px solid black;
margin-top:10px;
border-radius:5px;
`;
const Button2 = styled.div`
background-color:black;
margin-top:10px;
color:white;
border-radius:3px;
padding:5px;
`;
const Button3 = styled.div`
background-color:#FC46AA;
margin-top:10px;
padding:3px;
color:white;
border-radius:5px;
`;

const SideBar = () => {
  let dispatch = useDispatch();
  let address = useSelector((state)=>state.address);
  let goSearch = useSelector((state)=>state.goSearch);

  return (
    <Container>
        <div>
          <h3>Confirm Address</h3>
          <h4><FaMapMarker/>{address.pincode}</h4>
          <p>{address.formatted_address}</p>
        </div>
        <Button onClick={goSearch?()=>{dispatch({type:SIDEBAR_GOSEARCH,value:false})}:()=>{dispatch({type:SIDEBAR_GOSEARCH,value:true})}}>Change Address</Button>
        <Button2>Add Address Manually</Button2>
        <Button3>Confirm Location</Button3>
    </Container>
  )
} 

export default SideBar;
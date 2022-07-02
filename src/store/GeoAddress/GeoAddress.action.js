import { SEARCHBAR_GEOCODING_RESULTS, SEARCHBAR_QUERY, SHOW_MAPS_LATITUDE_LONGITUDE, SIDEBAR_ADDRESS } from "./GeoAddress.type";
import axios from "axios";

export const getLocation = (dispatch)=>{
    navigator.geolocation.getCurrentPosition((e)=>{
        // setLatiV(+(e.coords.latitude));
        // setLongV(+(e.coords.longitude));
        dispatch({type: SHOW_MAPS_LATITUDE_LONGITUDE,lat:e.coords.latitude,lng:e.coords.longitude});
      })
}

export const ReverseGeoCoding = (dispatch,latiV,longV)=>{
    axios.get(`https://apis.mapmyindia.com/advancedmaps/v1/76b92b0c0fa1a4aa728a1f50ab2fe773/rev_geocode?lat=${latiV}&lng=${longV}`)
    .then((r)=>{
    //   setAddress(r.data.results[0]);
         dispatch({type: SIDEBAR_ADDRESS,address:r.data.results[0]});
    });
}

export const GeoCoding = (query,dispatch)=>{
    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=86868d59ce13f7861eabfadd396decc5`)
    .then((r)=>{
        dispatch({type:SEARCHBAR_GEOCODING_RESULTS,results:r.data});
        console.log(r.data);
    })
    .catch((e)=>console.log(e));
}

export const handleChange = (e,dispatch)=>{
    // setQuery(...query,e);
    dispatch({type: SEARCHBAR_QUERY,query:e})
    
//   console.log(query);
}

export const debounce = (func,e,delay,dispatch,ref)=>{
        if(ref.current){
            clearTimeout(ref.current);
        }
        ref.current = setTimeout(()=>{
              func(e,dispatch);
        },delay)
}

export const showItOnMap = (lat,lng,dispatch)=>{
    dispatch({type: SHOW_MAPS_LATITUDE_LONGITUDE,lat,lng})
}

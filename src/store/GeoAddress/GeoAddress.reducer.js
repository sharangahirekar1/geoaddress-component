import { SEARCHBAR_GEOCODING_RESULTS, SEARCHBAR_QUERY, SHOW_MAPS_LATITUDE_LONGITUDE, SIDEBAR_ADDRESS, SIDEBAR_GOSEARCH } from "./GeoAddress.type";

const init_state = {
      lat:"",
      lon:"",
      address:"",
      goSearch:"",
      query:"",
      results:{}
}

export const reducer = (state = init_state,action)=>{
      switch(action.type){
            case SHOW_MAPS_LATITUDE_LONGITUDE : {
                 return {
                  ...state,
                  lat: action.lat,
                  lng: action.lng
                 }
            }
            case SIDEBAR_ADDRESS : {
                  return {
                        ...state,
                        address:action.address
                  }
            }
            case SIDEBAR_GOSEARCH : {
                  return {
                        ...state,
                        goSearch:action.value
                  }
            }
            case SEARCHBAR_QUERY : {
                  return {
                        ...state,
                        query:action.query
                  }
            }
            case SEARCHBAR_GEOCODING_RESULTS : {
                  return {
                        ...state,
                        results:action.results
                  }
            }
            default : {
                  return state;
            }
      }
};
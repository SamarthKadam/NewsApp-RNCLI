

const initialState = {
    activeTab:0,
    All:null,
    Business:null,
    Crypto:null,
    Technology:null,
    Nature:null
  };
   
  export default (state = initialState, action) => {


    switch (action.type) {
      case 'SETTAB':
        return {
          ...state,
          activeTab: action.payload,
        };

      case 'SETALL':
        return {
          ...state,
          All:action.payload
        };
      case 'SETBUSINESS':
        return {
          ...state,
          Business:action.payload
        };
      case 'SETCRYPTO':
        return {
          ...state,
          Crypto:action.payload
        };
      case 'SETTECHNOLOGY':
        return {
          ...state,
          Technology:action.payload
        };
      case 'SETNATURE':
        return {
          ...state,
          Nature:action.payload
        };
      default:
        return state;
    }
  };
  
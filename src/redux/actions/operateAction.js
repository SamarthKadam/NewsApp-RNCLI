export const setTab = (value) => {
    return {
      type: 'SETTAB',
      payload:value
    };
  };

  export const setAll=(value)=>{
    return {
      type:"SETALL",
      payload:value
    }
  }
  export const setBusiness=(value)=>{
    return {
      type:"SETBUSINESS",
      payload:value
    }
  }
  export const setCrypto=(value)=>{
    return {
      type:"SETCRYPTO",
      payload:value
    }
  }
  export const setTechnology=(value)=>{
    return {
      type:"SETTECHNOLOGY",
      payload:value
    }
  }
  export const setNature=(value)=>{
    return {
      type:"SETNATURE",
      payload:value
    }
  }
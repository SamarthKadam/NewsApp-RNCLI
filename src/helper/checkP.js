export const checkPresent=(type,data)=>{
    if(type==='All'&&data.All!==null)
    return true;
    else if(type==='Business'&&data.Business!==null)
    return true;
    else if(type==='Crypto'&&data.Crypto!==null)
    return true;
    else if(type==='Technology'&&data.Technology!==null)
    return true;
    else if(type==='Nature'&&data.nature!==null)
    return true;

    return false;
}
const jwtProvider = () => {
    let inMemoryJwt = null;
  
    const getJwt = () => inMemoryJwt;
  
    const setJwt = (token) => {
      inMemoryJwt = token;
      return true;
    };
  
    const deleteJwt = () => {
      inMemoryJwt = null;
      return true;
    };
  
    return {
      getJwt,
      setJwt,
      deleteJwt
    };
  };
  export default jwtProvider();
  
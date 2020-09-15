const TYPES_AUTH = {
    UPDATE_AUTH: 'UPDATE_AUTH',
  }
  
  
  const updateAuth = (data) => {
    return ({
      type: TYPES_AUTH.UPDATE_AUTH,
      payload: data,
    })
  }
  
  export {TYPES_AUTH, updateAuth};
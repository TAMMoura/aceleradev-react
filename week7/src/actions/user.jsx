const TYPES_USER = {
    UPDATE_USER: 'UPDATE_USER',
  }
  
  const updateUser = (data) => {
    return ({
      type: TYPES_USER.UPDATE_USER,
      payload: data,
    })
  }
  
  export {TYPES_USER, updateUser};
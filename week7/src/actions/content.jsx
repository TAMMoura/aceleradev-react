const TYPES_CONTENT = {
    UPDATE_CONTENT: 'UPDATE_CONTENT',
  }
  
  
const updateContent = (data) => {
    return ({
        type: TYPES_CONTENT.UPDATE_CONTENT,
            payload: data,
    })
  }
  
  export {TYPES_CONTENT, updateContent};
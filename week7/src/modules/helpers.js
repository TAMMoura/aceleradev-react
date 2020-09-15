export function getParams(path) {
    const regexp = /\/.*\/\w+/;
    if (typeof path === 'string' && !regexp.test(path))
      throw new Error(
        'The parameter should be a valid pathname string extracted from an url'
      );
    if (isNegZero(path)) throw new TypeError('The value is negative zero');
    if (isNaN(path)) throw new TypeError('The value is NaN');
    if (isNullOrUndef(path)) throw new TypeError('The value is null/undefined');
  
    const [params] = path.match(/[^/]+$/);
    return params;
  }
    
  export function isNaN(val) {
    return val !== val;
  }
  
  export function isNegZero(val) {
    return val === 0 && 1 / val === -Infinity;
  
  }
  
  export function isNullOrUndef(val) {
    const test =
      (typeof val === 'undefined' && val == null) ||
      (typeof val === 'object' && val == undefined); 
    return test;
  }
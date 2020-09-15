import { isNaN, isNegZero, isNullOrUndef } from './helpers';

export function mapAuthResponse(hash) {
  if (
    typeof hash === 'string' &&
    !(
      hash.includes('access_token') &&
      hash.includes('token_type') &&
      hash.includes('expires_in')
    )
  )
    throw new Error(
      'The parameter should be a valid hash string extracted from an url'
    );
  if (isNegZero(hash)) throw new TypeError('The value is negative zero');
  if (isNaN(hash)) throw new TypeError('The value is NaN');
  if (isNullOrUndef(hash)) throw new TypeError('The value is null/undefined');

  return hash.match(/[^#|&]+/g).reduce(mapParams, {});

  function mapParams(map, param) {
    const [key, value] = param.split('=');
    map[key] = value;
    return map;
  }
}
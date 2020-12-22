/**
 * Generates RFC4122 version 4 guid ()
 */

// TODO: Move to own file?
declare global { 
  interface Window{
     msCrypto: Crypto;
  }
}
var crypto = (typeof window !== 'undefined') ? (window.crypto || window.msCrypto) : null;

function _cryptoUuidv4() {
  return (""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    ((c as any) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> (c as any) / 4).toString(16)
  )
}

function _uuidv4() {
    return (""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    ((c as any) ^ Math.random() * 16 >> (c as any) / 4).toString(16)
  )
}

export default function random() {
  var hasCrypto = crypto !== undefined && crypto !== null;
  var hasRandomValues = hasCrypto && (typeof(crypto.getRandomValues) != 'undefined');  
  var uuid = hasRandomValues ? _cryptoUuidv4 : _uuidv4;
  return uuid().replace(/-/g, '');
}

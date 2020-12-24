/**
 * Generates RFC4122 version 4 guid ()
 */
declare global {
    interface Window {
        msCrypto: Crypto;
    }
}
export default function random(): string;

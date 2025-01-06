const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Invalid arguments');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      
      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        const encryptedChar = String.fromCharCode((charCode - 65 + keyCharCode - 65) % 26 + 65);
        encryptedMessage += encryptedChar;

        keyIndex++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Invalid arguments');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      
      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        const decryptedChar = String.fromCharCode((charCode - 65 - (keyCharCode - 65) + 26) % 26 + 65);
        decryptedMessage += decryptedChar;

        keyIndex++;
      } else {
        decryptedMessage += char;
      }
    }

    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

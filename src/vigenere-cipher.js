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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (alphabet.includes(char)) { // Encrypt only letters
        const keyChar = key[keyIndex % key.length];
        const keyShift = alphabet.indexOf(keyChar);
        const newIndex = (alphabet.indexOf(char) + keyShift) % 26;

        result += alphabet[newIndex];
        keyIndex++; // Advance key only for letters
      } else {
        result += char; // Keep special characters unchanged
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (alphabet.includes(char)) { // Decrypt only letters
        const keyChar = key[keyIndex % key.length];
        const keyShift = alphabet.indexOf(keyChar);
        const newIndex = (alphabet.indexOf(char) - keyShift + 26) % 26;

        result += alphabet[newIndex];
        keyIndex++; // Advance key only for letters
      } else {
        result += char; // Keep special characters unchanged
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};

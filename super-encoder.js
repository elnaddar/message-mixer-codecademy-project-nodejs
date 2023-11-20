// Import the encryptors functions here.
const {caesarCipher, symbolCipher, reverseCipher} = require("./encryptors");


const encodeMessage = (str) => {
    // Use the encryptor functions here.
    let first = caesarCipher(str, 13);
    let second = symbolCipher(first);
    let third = caesarCipher(second, 13);
    let fourth = reverseCipher(third);
    let fifth = caesarCipher(fourth, 11);
    return fifth;
  }
  
  const decodeMessage = (str) => {
    // Use the encryptor functions here.
    let fifth = caesarCipher(str, -11);
    let fourth = reverseCipher(fifth);
    let third = caesarCipher(fourth, -13);
    let second = symbolCipher(third);
    let first = caesarCipher(second, -13);
    return first
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);
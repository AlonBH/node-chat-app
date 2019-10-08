const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'alon';
    const text = 'Hi!';

    const message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number'); 
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    const from = 'alon';
    const coords ={
      latitude: '1',
      longitude:'1'
    };
    const url = `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;

    const message = generateLocationMessage(from, coords);

    expect(message).toInclude({from, url});
    expect(message.createdAt).toBeA('number'); 
  });
});
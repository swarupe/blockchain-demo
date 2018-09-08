const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2321, 'SGHDJGYETUISGJG', 'SHKFJSHKFJHSKDJSH');

bitcoin.createNewTransaction(100, 'ALEXDJHGHSG7987SAD','JENNSHDJHDJ87987SB')

bitcoin.createNewBlock(123456, 'sfdsgdg', 'SHKFJSHKFJHSdsgsdgsdgKDJSH');

console.log(bitcoin);
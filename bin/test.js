var bitcore = require('bitcore');
var timers = require('timers');

bitcore.Networks.add({
  name: 'regtest',
  alias: 'regtest',
  pubkeyhash: 0x6f,
  privatekey: 0xef,
  scripthash: 0xc4,
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  networkMagic: 0xFABFB5DA,
  port: 8333,
  dnsSeeds: [ ]
});
var p2p = require('bitcore-p2p');
console.log("Hello world");

var peer = new p2p.Peer({host: 'localhost', port:8333, network: 'regtest'});

  timers.setImmediate(function() {
    peer.connect()
  });
peer.on('inv', function(inv) {
console.log('New inventory event: ', inv);
 });

const Web3 = require('web3');
const { OpenSeaPort, Network } = require('opensea-js');
const http = require('http');

const hostname = '0.0.0.0';
const port = 4200;

const server = http.createServer(async (req, res) => {
  // This example provider won't let you make transactions, only read-only calls:
  const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
  const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main
  })
  const asset = await seaport.api.getAsset({
    tokenAddress: "0x06012c8cf97bead5deae237070f9587f8e7a266d", // string
    tokenId: "1", // string | number | null
  })
  console.log(asset);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


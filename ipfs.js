import IPFS from 'ipfs-api'
// const ipfs = create()

const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export default ipfs;
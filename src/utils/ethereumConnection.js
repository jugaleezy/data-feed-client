const ethers = require('ethers')

// JsonRpc host and port
const host = process.env.ETHEREUM_NETWORK_HOST
const port = process.env.ETHEREUM_NETWORK_PORT

// JsonRpcProvider URL
const url = host + ':' + port   

// Connecting to ethereum blockchain using JsonRpcProvider URL
const provider = new ethers.providers.JsonRpcProvider(url)

// Connecting to ethereum account
const signer = provider.getSigner()

const address = async () => {
    console.log(await signer.getAddress())
}

const balance = async () => {
    let value = await signer.getBalance()
    value = ethers.utils.formatEther(value.toString())
    console.log('Balance:',value, 'Ethers')
}

address()
balance()

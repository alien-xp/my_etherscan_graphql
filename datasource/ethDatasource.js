const { RESTDataSource } = require("apollo-datasource-rest"); 

// Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Etherscan Data Source Class that extends RESTDataSource
// This allows querying the Etherscan API in a GraphQL context
class EtherDataSource extends RESTDataSource {

  constructor() {
    super(); 

    // Base URL for Etherscan API 
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Get ETH balance for a specific address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get total ETH supply
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`  
    );
  }

  // Get latest ETH price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get estimated block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;

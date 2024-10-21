require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.4',
    networks: {
        base: {
            url: 'https://mainnet.base.org',
            accounts: ['YOUR_PRIVATE_KEY']
        }
    }
};

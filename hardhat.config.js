require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.4',
    networks: {
        base: {
            url: 'https://mainnet.base.org',
            accounts: ['20973dae6ad6df912fd07e381ead387d1a819794ececd6f93c37b88ddb2c9b4f']
        }
    }
};

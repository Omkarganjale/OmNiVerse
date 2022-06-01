require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
	solidity: '0.8.4',
	paths: {
		artifacts: './src/backend/artifacts',
		sources: './src/backend/contracts',
		cache: './src/backend/cache',
		tests: './src/backend/test',
	},
	networks: {
		mumbai: {
			url: `${process.env.MUMBAI_JSON_ENDPOINT}`,
			accounts: [`${process.env.PRIVATE_KEY}`],
		},
	},
}

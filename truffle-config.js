
module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: "*" // Any network (default: none)
        },
        teams: {
            url: "https://sandbox.truffleteams.com/3f8399a7-6b76-4eb5-ab68-ab212e72a44e",
            network_id: 1,
        },
    },
    compilers: {
        solc: {
            version: "0.7.0"
        }
    }
};

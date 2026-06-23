const axios = require('axios');

const getCotacao = async (moeda) => {

    const response = await axios.get(
        `https://economia.awesomeapi.com.br/json/last/${moeda}`
    );

    return response.data;
};

module.exports = {
    getCotacao
};
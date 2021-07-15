const got = require('got')  // HTTP request library. Alternative for Request library

const getDataFeed = async (symbol, callack) => {
    const url = 'https://www.vinterapi.com/api/v2/single_assets_daily/?symbol='+encodeURIComponent(symbol)

    try {
        var response = await got(url, {
                            headers: {'Authorization': process.env.VINTER_API},
                            responseType: 'json'
                        })
        callack(undefined, response.body)
    } 
    catch (error) {
        if (error.code === 'ENOTFOUND') {
            callack('Unable to connect to data feed service.', undefined)
        }
    }
}


module.exports = getDataFeed

const fetch = require('node-fetch');
const key = '';
const apiKey = ('?api_key=' + key);


async function callApi(summoner){
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}${apiKey}`;
    let response = await fetch(url);
    return await response.json();
}



async function summonerRank(user) {
    let data = await callApi(user);
    let id = data.id;
    const url = `https://na1.api.riotgames.com/lol/league/v4/positions/by-summoner/${id}${apiKey}`;
    let response = await fetch(url);
    return await response.json();
}



module.exports = {
    callApi,
    summonerRank
};


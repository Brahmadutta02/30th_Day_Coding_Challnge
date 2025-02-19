async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f386a80e-4a90-47ed-ac14-f6c616858b3e&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "49fc7a37-da67-435e-bf5f-00da233e9ff4").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '80382b637fmsh33a2048e81b263ep15a5fdjsn9b8a6917ff97',
    },
  };

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = response.json();

    return data;
}
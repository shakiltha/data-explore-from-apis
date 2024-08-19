const fetchCovidData = async () => {
  const url = "https://api.covidtracking.com/v1/us/daily.json";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchCovidData;

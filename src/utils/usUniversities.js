const usUniversities = async () => {
  const url = "http://universities.hipolabs.com/search?country=United+States";
  const options = {
    method: "GET",
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default usUniversities;

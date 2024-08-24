const harryPotterCharacters = async () => {
  const url = "https://potterapi-fedeperin.vercel.app/en/characters";
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

export default harryPotterCharacters;

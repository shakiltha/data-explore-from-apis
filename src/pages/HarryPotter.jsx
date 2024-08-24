import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import harryPotterBooks from "../utils/harryPotterBooks";
import HarryPotterBooks from "../harryPotterComponents/HarryPotterBooks";
import harryPotterCharacters from "../utils/harryPotterCharacters";
import HarryPotterCharacters from "../harryPotterComponents/HarryPotterCharacters";
import harryPotterHouses from "../utils/harryPotterHouses";
import HarryPotterHouses from "../harryPotterComponents/HarryPotterHouses";

const HarryPotter = () => {
  const [harryBooks, setHarryBooks] = useState(null);
  const [harryCharacters, setHarryCharacters] = useState(null);
  const [harryHouses, setHarryHouses] = useState(null);

  // fetch books
  useEffect(() => {
    const potterBook = async () => {
      const potterBooksData = await harryPotterBooks();
      setHarryBooks(potterBooksData);
    };
    potterBook();
  }, []);

  // fetch characters
  useEffect(() => {
    const potterCharacter = async () => {
      const potterCharactersData = await harryPotterCharacters();
      setHarryCharacters(potterCharactersData);
    };
    potterCharacter();
  }, []);

  // fetch houses
  useEffect(() => {
    const potterHouse = async () => {
      const potterHouseData = await harryPotterHouses();
      setHarryHouses(potterHouseData);
    };
    potterHouse();
  }, []);

  return (
    <div className="mt-14 ml-2 lg:ml-96">
      <h2 className="text-xl lg:text-2xl p-4">Harry Potter Relations</h2>
      <Tabs>
        <TabList>
          <Tab>Book</Tab>
          <Tab>Character</Tab>
          <Tab>House</Tab>
        </TabList>

        <TabPanel>
          {" "}
          {harryBooks?.map((book) => (
            <HarryPotterBooks key={book.number} book={book} />
          ))}
        </TabPanel>
        <TabPanel>
          {harryCharacters?.map((character) => (
            <HarryPotterCharacters
              key={character.index}
              character={character}
            />
          ))}
        </TabPanel>
        <TabPanel>
          {harryHouses?.map((house) => (
            <HarryPotterHouses key={house.index} houses={house} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HarryPotter;

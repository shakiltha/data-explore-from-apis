// import { useEffect, useState } from "react";
import usUniversities from "../utils/usUniversities";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const UsUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const universityData = await usUniversities(); // Replace with your actual data fetching function
        setUniversities(universityData);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, []);

  const fetchData = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    if (endIndex >= universities.length) {
      setHasMore(false);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="lg:ml-96">
      <h2 className="text-3xl font-semibold mt-20 ml-3 mb-10">
        United States University Lists
      </h2>
      <InfiniteScroll
        dataLength={currentPage * 10}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {universities?.slice(0, currentPage * 10).map((item, idx) => (
          <div key={idx} className="p-2 border">
            <li className="text-xl font-bold">
              country: <span className="font-normal">{item.country}</span>
            </li>
            <li className="text-xl font-bold">
              name: <span className="font-normal">{item.name}</span>
            </li>
            <li>
              web page:{" "}
              <a
                className="underline hover:text-blue-500"
                href={item.web_pages[0]}
                target="_blank"
              >
                {item.web_pages[0]}
              </a>
            </li>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default UsUniversities;

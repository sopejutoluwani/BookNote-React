import { useEffect, useState } from "react";
import Books from "../Books";
import axios from "axios";
import Header from "../Header";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/");
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <Header />
      <div>
        {
          //data.length > 0 ? (data.map()<Books key={data[0].id} info={data[0]}></Books>): <p>Loading</p>
          data.map((book) => {
            return (
              <Books
                key={book.id}
                info={book}
                onDelete={(id) => {
                  setData((prevData) =>
                    prevData.filter((item) => item.id !== id)
                  );
                }}
              ></Books>
            );
          })
        }
      </div>
    </div>
  );
}

export default Home;

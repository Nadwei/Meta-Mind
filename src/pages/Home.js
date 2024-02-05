import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import NewItem from "../components/NewItem";
import ErrorBoundary from "../components/ErrorBoundary";

const getTodayDateString = (date) => {
  if (date) {
    return date.toLocaleDateString("en-US");
  } else {
    return "no date";
  }
};

const generateDateProperties = () => {
  const currentDate = new Date();
  return {
    timestamp: currentDate.toISOString(),
    month: currentData.getMonth() + 1,
    year: currentDate.getFullYear(),
  };
};



export default function Home() {

  // state declared 
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastUpdateDate, setLastUpdateDate] = useState(getTodayDateString());
  const [formData, setFormData] = useState({
    itemType: "",
    title: "",
    description: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [newItems, setNewItems] = useState([]);

  // function to open the menu and form
  const handlePlusClick = () => {
    setMenuOpen(true);
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("newItems");
    const storedLastUpdateDate = localStorage.getItem("lastUpdateDate");

    if (!storedLastUpdateDate || storedLastUpdateDate !== getTodayDateString()) {
      localStorage.removeItem("newItems");
      setNewItems([]);
      setLastUpdateDate(getTodayDateString());
    } else if (storedItems) {
      setNewItems(JSON.parse(storedItems));
    }

    const timer = setInterval(() => {
      setLastUpdateDate((prevDate) => {
        const newDate = getTodayDateString(new Date());

        if (newDate !== prevDate) {
          localStorage.removeItem("newItems");
          setNewItems([]);
        }







        return newDate;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleExitClick = () => {
    setMenuOpen(false);
  };

  const generateSummary = () => {
    const todaysItems = newItems.filter((item) => {
      const itemDate = new Date(item.timestamp).toLocaleDateString("en-US");
      const todayDate = new Date().toLocaleDateString("en-US");
      return itemDate === todayDate;
    });

    console.log("Today's Items:", todaysItems);
  };


  const handleItemDelete = (index) => {
    setNewItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("newItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "select-one" ? e.target.value : value,
    }));
    console.log("input changed!");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { itemType, title, description,} = formData;

    const dateProperties = generateDateProperties()

    const newItem = {
      itemType: itemType,
      title: title,
      description: description,
      timestamp: new Date().toISOString(),
      month: month,
      year: year,
    };

    setNewItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      localStorage.setItem("newItems", JSON.stringify(updatedItems));
      setMenuOpen(false);
      return updatedItems;
    });
  };

  useEffect(() => {
    const generateSummary = () => {
      // Fetch the data from the server
      // Generate the summary
    };

    // Call the generateSummary function once per day
    const interval = setInterval(generateSummary, 86400000); // 1 day in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ErrorBoundary componentName="Home">
      <main id="main">
        <div id="today-container">
          <div className="today-top-div">
            <i
              id="plus"
              className="fa-regular fa-square-plus fa-2xl"
              onClick={handlePlusClick}
            ></i>
            <span id="weekday-month-year">
              <span className="weekday">
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </span>
              <span className="date">
                {currentTime.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </span>
          </div>
          {menuOpen && (

            <Form
              formData={formData}
              setFormData={setFormData}
              handleExitClick={handleExitClick}
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
            />

          )}
          {newItems.map((newItem, index) => (
            <NewItem
              key={newItem.timestamp}
              itemType={newItem.itemType}
              title={newItem.title}
              description={newItem.description}
              handleItemDelete={handleItemDelete}
              index={index}
              month={newItem.month}
              year={newItem.year}
            />
          ))}
        </div>
      </main>
    </ErrorBoundary>
  );
}
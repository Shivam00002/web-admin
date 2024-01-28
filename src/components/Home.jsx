import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { EventCard } from "./EventCard";

const Home = () => {
  const [webinars, setWebinars] = useState([]);

  const Api = "https://webinar-backend.vercel.app/data";

  const fetchWebinars = async () => {
    try {
      const response = await fetch(Api);
      if (response.ok) {
        const data = await response.json();
        setWebinars(data.Webinars);
      } else {
        console.error(
          "Failed to fetch webinars:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching webinars:", error.message);
    }
  };

  useEffect(() => {
    fetchWebinars();
  }, []);

  console.log(webinars);

  return (
    <div className="md:max-w-[1050px] w-full mx-auto md:flex   ">
      <div className="w-full h-fit md:sticky top-0 ">
        <Dashboard />
      </div>
      <div className="w-full  h-fit px-2 py-2    overflow-y-scroll ">
        <h2 className="text-center  h-fit  font-semibold text-xl md:text-2xl py-2">
          Events
        </h2>
        <div className="md:block flex w-full md:mt-0  h-fit overflow-x-scroll">
          {webinars.map((el, index) => {
            return (
              <EventCard
                key={index}
                title={webinars.title}
                teacher={webinars.teacher_name}
                time={webinars.time}
                date={webinars.date}
                price={webinars.price}
                imgurl={webinars.teacher_img}
                id={webinars._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

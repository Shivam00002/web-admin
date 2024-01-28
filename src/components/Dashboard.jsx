import React, { useState } from "react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [newWebinar, setNewWebinar] = useState({
    title: "",
    teacher_name: "",
    description: "",
    teacher_img: "",
    date: "",
    time: "",
    price: "",
  });

  const apiEndpoint = "https://webinar-backend.vercel.app/data";

  const handleAddCard = async () => {
    const requiredFields = [
      "title",
      "description",
      "date",
      "price",
      "teacher_img",
      "teacher_name",
      "time",
    ];

    if (requiredFields.some((field) => newWebinar[field] === "")) {
      toast.error("All the fields are required!");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWebinar),
      });

      if (response.ok) {
        console.log("Data successfully posted to the API:", newWebinar);
        toast.success("Card Added!");
        setLoading(false);

        setNewWebinar({
          title: "",
          teacher_name: "",
          description: "",
          teacher_img: "",
          date: "",
          time: "",
          price: "",
        });
      } else {
        console.error(
          "Failed to post data to the API:",
          response.status,
          response.statusText
        );
        toast.error("Failed to add card. Please try again later.");
      }
    } catch (error) {
      console.error("Error posting data to the API:", error.message);
      toast.error("Error adding card. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center font-semibold text-2xl md:text-4xl mb-4">
        Webinar Dashboard
      </h1>

      <div className="shadow-lg md:max-w-[500px] w-full h-fit px-4 py-4 border rounded-lg mx-auto">
        <input
          type="text"
          value={newWebinar.title}
          onChange={(e) =>
            setNewWebinar({ ...newWebinar, title: e.target.value })
          }
          placeholder="Enter Webinar Title"
          className="border rounded-lg w-full h-fit px-2 md:py-2 py-1 mt-2"
        />

        <input
          type="text"
          value={newWebinar.teacher_name}
          onChange={(e) =>
            setNewWebinar({ ...newWebinar, teacher_name: e.target.value })
          }
          placeholder="Enter teacher name "
          className="border rounded-lg w-full h-fit px-2 md:py-2 py-1 mt-2"
        />

        <input
          type="text"
          value={newWebinar.teacher_img}
          onChange={(e) =>
            setNewWebinar({ ...newWebinar, teacher_img: e.target.value })
          }
          placeholder="Enter Dp img Url"
          className="border rounded-lg w-full h-fit px-2 md:py-2 py-1 mt-2"
        />
        <input
          type="text"
          value={newWebinar.description}
          onChange={(e) =>
            setNewWebinar({ ...newWebinar, description: e.target.value })
          }
          placeholder="Enter Description"
          className="border rounded-lg w-full h-fit px-2 md:py-2 py-1 mt-2"
        />
        <input
          type="date"
          value={newWebinar.date}
          onChange={(e) =>
            setNewWebinar({ ...newWebinar, date: e.target.value })
          }
          placeholder="Enter Date"
          className="border rounded-lg w-full h-fit px-2 md:py-2 py-1 mt-2"
        />
        <input
          type="time"
          value={newWebinar.time}
          onChange={(e) =>
            setNewWebinar({ ...newWebinar, time: e.target.value })
          }
          placeholder="Enter Time"
          className="border rounded-lg w-full h-fit px-2 md:py-2 py-1 mt-2"
        />
        <input
          type="text"
          value={newWebinar.price}
          onChange={(e) =>
            setNewWebinar({ ...newWebinar, price: e.target.value })
          }
          placeholder="Enter Price"
          className="border rounded-lg w-full h-fit px-2 md:py-2 py-1 mt-2"
        />

        <button
          type="button"
          onClick={handleAddCard}
          className={`border ${
            loading ? "bg-yellow-700" : "bg-pink-500"
          } rounded-lg w-full h-fit px-2 md:py-2 py-1 mt-5  text-white font-semibold md:text-[18px]`}
        >
          {loading ? "Loading..." : "Add Card"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

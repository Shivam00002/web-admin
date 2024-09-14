import React, { useState } from "react";
import toast from "react-hot-toast";
export const EventCard = ({
  id,
  title,
  teacher,
  date,
  time,
  price,
  imgurl,
}) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {



    try {
      setIsDeleted(true);
      toast.promise(
        fetch(`https://webinar-backend.vercel.app/data/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })

          .then(() => {
            toast.success("Card Deleted!");
          })
          .catch((error) => {
            console.error("Error deleting card:", error);
            setIsDeleted(false);
            toast.error("Error deleting card");

          }),
        {
          loading: "Deleting...",
          success: "Card Deleted!",
          error: "Error deleting card",
        }
      );
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  if (isDeleted) {
    return null;
  }
  return (
    <div className="mt-2 md:mt-10">
      <div className="md:w-[380px] mx-auto w-full md:h-fit shadow-lg pb-5 px-2 md:px-0 border">
        <div className="w-full h-fit bg-[#FFF3EB] py-4">
          <div className="flex items-center gap-10 w-full px-5 md:px-10 mt-2">
            <div className="w-[50%] h-fit">

              <h2 className="font-bold leading-6 text-[20px]">{title}</h2>
              <h2 className="font-bold leading-6 text-[20px] text-[#000000] whitespace-nowrap py-1">
                With Top Expert
              </h2>
              <p className="mt-9 font-semibold text-sm">
                Course Overview with {teacher}
              </p>
            </div>
            <div className="w-[50%] h-fit">
              <div className="w-[110px] h-[110px] rounded-full border relative">
                <img src={imgurl} alt="img" className="fill absolute" />
              </div>
              <p className="font-semibold text-[16px] mt-2">{teacher}</p>
              <p className="font-semibold text-[16px]">Masterclasses</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-2 mt-4">
          <h2 className="font-semibold text-[20px]">{title}</h2>
          <button className="px-4 py-1 bg-[#FF7F37] font-semibold whitespace-nowrap rounded-lg text-white">
            Price ₹ {price}/-
          </button>
        </div>
        <div className="flex items-center justify-around gap-2 w-full mt-4">
          <div className="font-semibold bg-[#FFCAB9] px-2 py-1 rounded-lg whitespace-nowrap">
            {date}
          </div>
          <div className="font-semibold bg-[#ED9BB7] px-2 py-1 rounded-lg whitespace-nowrap">
            {time}
          </div>
          <div className="font-semibold bg-[#FDDDB1] px-2 py-1 rounded-lg whitespace-nowrap">
            2 Hour
          </div>
        </div>
        <button
          className="mt-4 w-[95%] mx-auto grid place-content-center h-fit md:text-[15px] text-sm py-2 bg-red-500 text-white font-semibold rounded-lg"
          onClick={handleDelete}
        >
          Delete card
        </button>
      </div>
    </div>
  );
};

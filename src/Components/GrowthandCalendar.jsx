import dayjs from "dayjs";
import { Months, generateDate } from "../utils/calendar";
import cn from "../utils/cn";
import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function GrowthAndCalendar() {
  const days = ["S", "M", "T", "W", "Th", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  return (
    <>
      <div className="flex flex-row bg-[#262626] rounded-xl shadow-xl shadow-black">
        <div className="flex flex-col p-4">
          <h1 className="font-Popins font-bold text-white text-4xl p-8">
            Growth
          </h1>
          <div className="bg-[#2B2B2B] shadow-lg shadow-black rounded-xl m-[1rem] flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="182"
              height="182"
              viewBox="0 0 182 182"
              fill="none"
            >
              <path
                d="M155.921 90.9214C155.921 77.1947 151.576 63.8204 143.508 52.7153C135.439 41.6102 124.062 33.3445 111.008 29.1027C97.9527 24.8609 83.8902 24.8609 70.8353 29.1027C57.7805 33.3445 46.4037 41.6103 38.3353 52.7153L54.1112 64.1772C59.759 56.4036 67.7228 50.6176 76.8612 47.6483C85.9996 44.6791 95.8434 44.6791 104.982 47.6483C114.12 50.6176 122.084 56.4036 127.732 64.1772C133.38 71.9507 136.421 81.3127 136.421 90.9214H155.921Z"
                fill="#66E650"
              />
              <path
                opacity="0.6"
                d="M71.1185 153.667C80.8686 156.854 91.2344 157.688 101.369 156.101C111.503 154.514 121.118 150.551 129.427 144.536C137.736 138.522 144.504 130.626 149.177 121.494C153.849 112.363 156.295 102.255 156.313 91.9973L136.813 91.9631C136.8 99.1435 135.089 106.219 131.818 112.611C128.546 119.003 123.809 124.53 117.993 128.74C112.176 132.951 105.446 135.725 98.3519 136.836C91.258 137.946 84.0019 137.362 77.1768 135.132L71.1185 153.667Z"
                fill="#66E650"
              />
              <path
                opacity="0.4"
                d="M38.6913 52.2301C32.5854 60.4725 28.517 70.043 26.8186 80.1591C25.1202 90.2752 25.8401 100.65 28.9194 110.434C31.9987 120.219 37.3501 129.136 44.5358 136.456C51.7216 143.776 60.5379 149.291 70.2637 152.551L76.461 134.062C69.6529 131.78 63.4816 127.92 58.4515 122.795C53.4215 117.671 49.6755 111.43 47.52 104.58C45.3645 97.7312 44.8605 90.4691 46.0494 83.3878C47.2383 76.3065 50.0862 69.6072 54.3604 63.8375L38.6913 52.2301Z"
                fill="#66E650"
              />
            </svg>
            <p className="text-md text-white p-2 hover:text-green-600 cursor-default">
              more
            </p>
          </div>
          <div className="flex flex-row gap-3 p-1">
            <div className="w-15 h-15 bg-[#66E550] rounded-full">
              <div className="w-7 h-7 rounded-full"></div>
            </div>
            <h1 className="font-Popins text-md font-bold text-white">
              Clarity : 40%
            </h1>
          </div>
          <div className="flex flex-row gap-3 p-1">
            <div className="w-15 h-15 bg-[#57A34A] rounded-full">
              <div className="w-7 h-7 rounded-full"></div>
            </div>
            <h1 className="font-Popins text-md font-bold text-white">
              Earn : 30%
            </h1>
          </div>
          <div className="flex flex-row gap-3 p-1">
            <div className="w-15 h-15 bg-[#4F8246] rounded-full">
              <div className="w-7 h-7 rounded-full"></div>
            </div>
            <h1 className="font-Popins text-md font-bold text-white">
              Growth: 30%
            </h1>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <div className="flex flex-row justify-between gap-7">
            <h1 className="text-white p-8 text-4xl font-Popins font-bold">
              Calendar
            </h1>
            <div className="flex flex-row justify-end">
              <div className="w-10 h-10 relative p-2">
                <div className="w-7 h-7 rounded-full bg-[#66E650] opacity-[0.15]"></div>
                <svg
                  className="z-2 absolute top-[10px] left-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.352 20.242C8.78715 20.7922 9.34165 21.2364 9.97361 21.541C10.6056 21.8455 11.2985 22.0025 12 22C12.7015 22.0025 13.3944 21.8455 14.0264 21.541C14.6584 21.2364 15.2129 20.7922 15.648 20.242C13.2271 20.5702 10.7729 20.5702 8.352 20.242ZM18.75 9V9.704C18.75 10.549 18.99 11.375 19.442 12.078L20.55 13.801C21.561 15.375 20.789 17.514 19.03 18.011C14.4338 19.313 9.56625 19.313 4.97 18.011C3.211 17.514 2.439 15.375 3.45 13.801L4.558 12.078C5.01158 11.3694 5.25211 10.5454 5.251 9.704V9C5.251 5.134 8.273 2 12 2C15.727 2 18.75 5.134 18.75 9Z"
                    fill="#66E650"
                  />
                </svg>
              </div>
              <div className="w-10 h-10 relative p-2">
                <div className="w-8 h-8 rounded-full bg-[#66E650] opacity-[0.15]"></div>
                <svg
                  className="z-2 absolute top-[12px] left-[12px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.46399 20.535C4.92999 22 7.28599 22 12 22C16.714 22 19.071 22 20.535 20.535C21.806 19.265 21.975 17.322 21.997 13.75H18.84C17.866 13.75 17.611 13.766 17.398 13.864C17.184 13.963 17.006 14.146 16.372 14.884L15.767 15.591L15.679 15.693C15.177 16.28 14.779 16.745 14.229 16.998C13.679 17.251 13.067 17.251 12.295 17.25H11.706C10.933 17.25 10.321 17.252 9.77099 16.998C9.22099 16.745 8.82299 16.28 8.32099 15.693L8.23299 15.591L7.62799 14.885C6.99399 14.145 6.81599 13.963 6.60199 13.865C6.38899 13.766 6.13399 13.75 5.15999 13.75H2.00299C2.02599 17.322 2.19299 19.265 3.46399 20.535Z"
                    fill="#66E650"
                  />
                  <path
                    d="M20.535 3.464C19.072 2 16.714 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12V12.25H5.295C6.067 12.25 6.679 12.248 7.229 12.502C7.779 12.755 8.177 13.22 8.679 13.807L8.767 13.909L9.372 14.615C10.006 15.355 10.184 15.537 10.398 15.635C10.611 15.734 10.866 15.75 11.84 15.75H12.16C13.134 15.75 13.389 15.734 13.602 15.636C13.816 15.537 13.994 15.354 14.628 14.616L15.233 13.909L15.321 13.807C15.823 13.22 16.221 12.755 16.771 12.502C17.321 12.248 17.933 12.249 18.705 12.25H22V12C22 7.286 22 4.929 20.535 3.464Z"
                    fill="#66E650"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-96 h-96 shadow-xl text-white font-Popins">
            <h1 className="text-center text-black rounded-xl font-bold bg-green-400 flex justify-center">
              {Months[today.month()]}, {today.year()}
            </h1>
            <div className="flex items-center gap-4">
              <GrFormPreviousLink
                className="w-5 h-5 cursor-pointer"
                size={23}
                style={{ fill: "white" }}
                onClick={() => setToday(today.month(today.month() - 1))}
              />
              <h1
                className="cursor-pointer"
                onClick={() => setToday(currentDate)}
              >
                Today
              </h1>
              <GrFormNextLink
                className="w-5 h-5 cursor-pointer"
                onClick={() => setToday(today.month(today.month() + 1))}
              />
            </div>
            <div className="w-full pt-5 grid grid-cols-7">
              {days.map((day, index) => {
                return (
                  <h1
                    className="h-7 grid place-content-center text-sm"
                    key={index}
                  >
                    {day}
                  </h1>
                );
              })}
            </div>
            <div className="w-full grid grid-cols-7">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }) => (
                  <div
                    key={date.toString()}
                    className="h-12 grid place-content-center"
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-green-300 bg-white",
                        today ? "bg-green-800 font-bold" : "",
                        "h-10 w-10 grid place-content-center rounded-full hover:bg-green-500 hover:text-black transition-all"
                      )}
                    >
                      {date.date()}
                    </h1>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

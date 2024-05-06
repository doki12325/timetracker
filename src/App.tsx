import { useState } from "react";
import "./App.css";

import userImage from "./assets/images/image-jeremy.png";
import workIcon from "./assets/images/icon-work.svg";
import playIcon from "./assets/images/icon-play.svg";
import studyIcon from "./assets/images/icon-study.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import socialIcon from "./assets/images/icon-social.svg";
import selfCareIcon from "./assets/images/icon-self-care.svg";
import ellipsisIcon from "./assets/images/icon-ellipsis.svg";

function App() {
  const data = [
    {
      title: "Work",
      bgColor: "hsl(15, 100%, 70%)",
      icon: workIcon,
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      bgColor: "hsl(195, 74%, 62%)",
      icon: playIcon,
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      bgColor: "hsl(348, 100%, 68%)",
      icon: studyIcon,
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      bgColor: "hsl(145, 58%, 55%)",
      icon: exerciseIcon,
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      bgColor: "hsl(264, 64%, 52%)",
      icon: socialIcon,
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      bgColor: "hsl(43, 84%, 65%)",
      icon: selfCareIcon,
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];
  const [activeFilter, setActiveFilter] = useState("weekly");
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="profile-container">
          <div className="profile-intro-container">
            <div className="profile-image">
              <img src={userImage} alt="user-image" />
            </div>
            <div className="profile-intro-text">
              <h4>Report for</h4>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <div className="display-filters">
            <button
              className={`filter-button ${
                activeFilter === "daily" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("daily")}
            >
              Daily
            </button>
            <button
              className={`filter-button ${
                activeFilter === "weekly" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("weekly")}
            >
              Weekly
            </button>
            <button
              className={`filter-button ${
                activeFilter === "monthly" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
        {data.map((item, index) => (
          <div
            className="activity-card"
            key={index}
            style={{
              backgroundColor: item.bgColor,
            }}
          >
            <img
              src={item.icon}
              alt="activity-icon"
              className="activity-icon"
            />
            <div className="activity-info">
              <div className="activity-header">
                <span>{item.title}</span>
                <img src={ellipsisIcon} alt="ellipsis" />
              </div>
              <div className="activity-data-container">
                <h1>{`${
                  item.timeframes[activeFilter as keyof typeof item.timeframes]
                    .current
                }hrs`}</h1>
                <h3>{`Last ${
                  activeFilter === "daily" ? "Day" : activeFilter.slice(0, -2)
                } - ${
                  item.timeframes[activeFilter as keyof typeof item.timeframes]
                    .previous
                }hrs`}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

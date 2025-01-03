import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface TimelineItem {
  year: string;
  description: string;
  photo: string;
  isLoading: boolean;
}

const UNSPLASH_API = "https://api.unsplash.com/photos/random";
const UNSPLASH_ACCESS_KEY = "_Mpvpov8tu8HF_KWSMNzZ5Q_q_ijIbeTrJjEqIAbulM";

const LifeJourney: React.FC = () => {
  const [currentYear, setCurrentYear] = useState("2000");
  const [timeline, setTimeline] = useState<TimelineItem[]>([
    {
      year: "2000",
      description: "Childhood adventures.",
      photo: "",
      isLoading: true,
    },
    {
      year: "2010",
      description: "Discovering coding in school.",
      photo: "",
      isLoading: true,
    },
    {
      year: "2020",
      description: "Graduated and joined my first job.",
      photo: "",
      isLoading: true,
    },
    {
      year: "2025",
      description: "Running my software agency.",
      photo: "",
      isLoading: true,
    },
  ]);

  // Fetch photos from Unsplash
  useEffect(() => {
    const fetchPhotos = async () => {
      const updatedTimeline = await Promise.all(
        timeline.map(async (item) => {
          try {
            const response = await fetch(
              `${UNSPLASH_API}?query=person&client_id=${UNSPLASH_ACCESS_KEY}`
            );
            const data = await response.json();
            return {
              ...item,
              photo: data.urls?.regular || "",
              isLoading: false,
            };
          } catch (error) {
            console.error("Error fetching Unsplash photo:", error);
            return { ...item, photo: "", isLoading: false };
          }
        })
      );
      setTimeline(updatedTimeline);
    };

    fetchPhotos();
  }, []);

  // Observe which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setCurrentYear(
            visibleEntry.target.getAttribute("data-year") || "2000"
          );
        }
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll("[data-year]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Static Left Section */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="p-4 border border-gray-700 rounded-lg shadow-lg">
          {timeline.find((item) => item.year === currentYear)?.isLoading ? (
            <Skeleton width={320} height={320} />
          ) : (
            <img
              src={
                timeline.find((item) => item.year === currentYear)?.photo || ""
              }
              alt={`Photo of ${currentYear}`}
              className="w-80 h-80 object-cover rounded-lg"
            />
          )}
        </div>
      </div>

      {/* Scrolling Right Section */}
      <div className="w-1/2 h-screen overflow-y-auto snap-y snap-mandatory">
        <div>
          {timeline.map((item) => (
            <motion.section
              key={item.year}
              data-year={item.year}
              className="h-screen flex flex-col justify-center snap-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold">{item.year}</h2>
              <p className="text-lg mt-4">{item.description}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeJourney;

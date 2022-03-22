import { useEffect, useState } from "react";

export const useBlog = () => {
  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setRecentData(data));
  }, []);

  return [recentData];
};

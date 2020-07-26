import { useState, useEffect } from "react";

import youtube from "../api/youtube";
const KEY = "AIzaSyDJ6taxsVRcJKUjBVxECpozoOd80iMlIx4";



const useVideos = (defaultSearch) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearch);
  }, [defaultSearch]);

  const search = async (search) => {
    const res = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: search,
      },
    });
    setVideos(res.data.items);
  };
  return [videos, search]
};

export default useVideos;

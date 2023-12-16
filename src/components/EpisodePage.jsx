// EpisodePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Episode from "./Episode";
import Episode1 from "../EpisodeData/Episode1.json";
import Episode2 from "../EpisodeData/Episode2.json";
// Import additional episodes as needed

const episodes = {
  1: Episode1,
  2: Episode2,
  // Add more episodes as needed
};

const EpisodePage = () => {
  const { episodeId } = useParams();
  const selectedEpisode = episodes[episodeId];

  if (!selectedEpisode) {
    return <div>Episode not found</div>;
  }

  return <Episode episodeData={selectedEpisode} />;
};

export default EpisodePage;

import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import styles from "./AnimeList.module.scss";

interface Anime {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

interface AnimeListProps {
  animes: Anime[];
}

const AnimeList: React.FC<AnimeListProps> = ({ animes }) => {
  return (
    <div className={styles.list}>
      {animes.map((anime) => (
        <AnimeCard
          key={anime.id}
          title={anime.title}
          imageUrl={anime.imageUrl}
          description={anime.description}
        />
      ))}
    </div>
  );
};

export default AnimeList;

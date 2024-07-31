import React from "react";
import Image from "next/image";
import styles from "./AnimeCard.module.scss";

interface AnimeCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={300}
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AnimeCard;

import styles from "./page.module.scss";
import Banner from "../components/Banner/Banner";
import AnimeList from "../components/AnimeList/AnimeList";

const animes = [
  {
    id: 1,
    title: "Naruto",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    description: "A story about a ninja named Naruto.",
  },
  {
    id: 2,
    title: "One Piece",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    description: "A story about a pirate named Luffy.",
  },
  {
    id: 3,
    title: "Attack on Titan",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    description: "A story about humans fighting titans.",
  },
  {
    id: 4,
    title: "My Hero Academia",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    description: "A story about a world where nearly everyone has superpowers.",
  },
  {
    id: 5,
    title: "Fullmetal Alchemist",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    description:
      "Two brothers search for a way to restore their bodies after a failed alchemy experiment.",
  },
  {
    id: 6,
    title: "Death Note",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    description:
      "A high school student discovers a notebook that allows him to kill anyone by writing their name in it.",
  },
];

export default function Home() {
  return (
    <>
      <Banner />
      <div className="main__container">
        <h1 className={styles.title}>Новые поступления</h1>
        <AnimeList animes={animes} />
      </div>
    </>
  );
}

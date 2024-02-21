import Card from "@/components/Card";
import Headline from "@/components/Headline";

export default function HomePage({ pieces, favorites, toggleIsFavorite }) {
  const randomPiecePosition = Math.floor(Math.random() * pieces.length) + 1;
  const piece = pieces[randomPiecePosition];
  const isFavorite = favorites.includes(piece.slug);
  return (
    <>
      <Headline>ART GALLERY</Headline>
      <Card
        imageSource={piece.imageSource}
        slug={piece.slug}
        artist={piece.artist}
        name={piece.name}
        $isFavorite={isFavorite}
        toggleIsFavorite={toggleIsFavorite}
      ></Card>
    </>
  );
}

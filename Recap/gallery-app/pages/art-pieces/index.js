import Card from "@/components/Card";
import Headline from "@/components/Headline";

export default function ArtPieces({ pieces, favorites, toggleIsFavorite }) {
  return (
    <>
      <Headline>ART GALLERY</Headline>
      {pieces.map((piece) => (
        <Card
          key={piece.slug}
          imageSource={piece.imageSource}
          imageWidth={piece.dimensions.width}
          imageHeight={piece.dimensions.height}
          slug={piece.slug}
          artist={piece.artist}
          name={piece.name}
          $isFavorite={favorites.includes(piece.slug)}
          toggleIsFavorite={toggleIsFavorite}
        ></Card>
      ))}
    </>
  );
}

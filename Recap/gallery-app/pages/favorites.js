import React from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function ArtGallery({ pieces, favorites, toggleIsFavorite }) {
  const filteredPieces = pieces
    .filter((piece) => favorites.includes(piece.slug))
    .map((piece) => (
      <Card
        key={piece.slug}
        imageSource={piece.imageSource}
        imageWidth={piece.dimensions.width}
        imageHeight={piece.dimensions.height}
        slug={piece.slug}
        artist={piece.artist}
        name={piece.name}
        $isFavorite
        toggleIsFavorite={toggleIsFavorite}
      />
    ));

  return (
    <>
      <h1>ART GALLERY</h1>
      {filteredPieces.length > 0 ? (
        filteredPieces
      ) : (
        <p>
          You currently have no favorites...<br></br>
          Go to the <Link href="/art_pieces">art pieces</Link> and chose some!
        </p>
      )}
    </>
  );
}

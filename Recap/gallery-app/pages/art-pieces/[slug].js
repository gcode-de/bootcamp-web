import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Headline from "@/components/Headline";
import Comments from "@/components/Comments";
import CommentForm from "@/components/CommentForm";
import Link from "next/link";

export default function PieceDetails({
  pieces,
  favorites,
  toggleIsFavorite,
  comments,
  addComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const [piece, setPiece] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [pieceComments, setPieceComments] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      const foundPiece = pieces.find((p) => p.slug === slug);
      if (foundPiece) {
        setPiece(foundPiece);
        setIsFavorite(favorites.includes(foundPiece.slug));

        const foundComments = comments.filter(
          (comment) => comment.slug === slug
        );
        setPieceComments(foundComments);
      }
    }
  }, [router.isReady, slug, pieces, favorites, comments]);

  if (!piece) return <div>Loading...</div>;

  return (
    <>
      <Link href="/art-pieces">back to list</Link>
      <Headline>{piece.name}</Headline>
      <Card
        imageSource={piece.imageSource}
        imageWidth={piece.dimensions.width}
        imageHeight={piece.dimensions.height}
        slug={piece.slug}
        artist={piece.artist}
        name={piece.name}
        year={piece.year}
        genre={piece.genre}
        $isFavorite={isFavorite}
        toggleIsFavorite={toggleIsFavorite}
        colors={piece.colors}
      ></Card>
      <Comments comments={pieceComments} />
      <CommentForm addComment={addComment} slug={slug} />
    </>
  );
}

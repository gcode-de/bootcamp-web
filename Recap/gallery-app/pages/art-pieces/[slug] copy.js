import { useRouter } from "next/router";
import Card from "@/components/Card";
import Headline from "@/components/Headline";
import Comments from "@/components/Comments";
import CommentForm from "@/components/CommentForm";

export default function PieceDetails({
  pieces,
  favorites,
  toggleIsFavorite,
  comments,
  addComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((p) => p.slug === slug);
  const isFavorite = favorites.includes(piece.slug);
  const pieceComments = comments.filter((piece) => piece.slug === slug)[0]
    .comments;
  // console.log(piece, isFavorite, pieceComments);

  return (
    <>
      <Headline>{piece.name}</Headline>
      <Card
        imageSource={piece.imageSource}
        imageWidth={piece.dimensions.width}
        imageHeight={piece.dimensions.height}
        slug={piece.slug}
        artist={piece.artist}
        name={piece.name}
        $isFavorite={isFavorite}
        toggleIsFavorite={toggleIsFavorite}
      ></Card>
      <Comments comments={pieceComments} />
      <CommentForm addComment={addComment} slug={slug} />
    </>
  );
}

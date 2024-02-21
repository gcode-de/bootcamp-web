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

  const piece = pieces.find((piece) => piece.slug === slug);

  const pieceComments = comments.filter((comment) => comment.slug === slug);

  if (!piece) return <div>Loading...</div>;

  return (
    <>
      <Link href="/art-pieces">back to list</Link>
      <Headline>{piece.name}</Headline>
      <Card
        imageSource={piece.imageSource}
        slug={piece.slug}
        artist={piece.artist}
        name={piece.name}
        year={piece.year}
        genre={piece.genre}
        $isFavorite={piece.isFavorite}
        toggleIsFavorite={toggleIsFavorite}
        colors={piece.colors}
      ></Card>
      <Comments comments={pieceComments} />
      <CommentForm addComment={addComment} slug={slug} />
    </>
  );
}

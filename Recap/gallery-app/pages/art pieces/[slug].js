import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeId = volumes.findIndex((v) => v.slug === slug);
  const volume = volumes[volumeId];

  return (
    <>
      <Link href="/volumes">⬅️ All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.title}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <Image
        width="140"
        height="230"
        src={`/images/${volume.slug}.png`}
        alt={`Cover of ${volume.title}`}
      />
      <br></br>
      {volumeId !== 0 && (
        <Link href={`/volumes/${volumes[volumeId - 1].slug}`}>
          ⬅️ previous Volume
        </Link>
      )}{" "}
      {volumeId !== volumes.length - 1 && (
        <Link href={`/volumes/${volumes[volumeId + 1].slug}`}>
          ➡️ next Volume
        </Link>
      )}
    </>
  );
}

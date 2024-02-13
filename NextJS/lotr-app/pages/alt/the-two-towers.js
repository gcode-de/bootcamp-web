import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
const volumeSlug = "the-two-towers";

export default function Volume() {
  const volumeId = volumes.findIndex(({ slug }) => slug === volumeSlug);
  const volume = volumes[volumeId];
  return (
    <>
      <Link href="./">⬅️ All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <Image
        width="140"
        height="230"
        src={"/../public/images/" + volume.slug + ".png"}
      />
      <br></br>
      {volumeId !== 0 && (
        <Link href={`./` + volumes[volumeId - 1].slug}>⬅️ previous Volume</Link>
      )}{" "}
      {volumeId !== volumes.length - 1 && (
        <Link href={`./` + volumes[volumeId + 1].slug}>➡️ next Volume</Link>
      )}
    </>
  );
}

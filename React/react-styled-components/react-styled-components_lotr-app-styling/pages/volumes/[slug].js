import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled, { css } from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <Container>
      <Link href="/volumes">← All Volumes</Link>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image src={cover} alt={`Cover image of ${title}`} width={140} height={230} />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>← Previous Volume: {previousVolume.title}</Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>Next Volume: {nextVolume.title} →</Link>
        </div>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 60px 40px;
  background-color: lightgray;
  color: black;
  @media (prefers-color-scheme: dark) {
    background-color: black;
    color: lightgray;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Description = styled.p`
  font-size: 1rem;
`;

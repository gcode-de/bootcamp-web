import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

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
      <Link href="/volumes">
        <Image height={30} width={30} src="/images/chevron-screenLeft.svg" />
        All Volumes
      </Link>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Books $color={volume.color}>
        <ul>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <i>{ordinal}</i>
              <br></br>
              <strong>{title}</strong>
            </li>
          ))}
        </ul>
        <Image src={cover} alt={`Cover image of ${title}`} width={140} height={230} />
      </Books>
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

const Container = styled.div``;

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Description = styled.p`
  font-size: 1rem;
`;

const Books = styled.div`
  background-color: ${(props) => props.$color};
  margin: 40px -40px;
  padding: 40px 40px;
  display: flex;
  gap: 40px;
  align-items: center;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 0.8rem;
    strong {
      font-size: 1.2rem;
    }
    margin-bottom: 20px;
  }
  img {
    box-shadow: var(--box-shadow-book);
  }
`;

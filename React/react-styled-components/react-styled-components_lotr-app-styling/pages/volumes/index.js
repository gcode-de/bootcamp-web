import Link from "next/link";
import styled from "styled-components";
import { introduction, volumes } from "../../lib/data";
import Image from "next/image";

export default function Volumes() {
  return (
    <>
      <Title>The Lord of the Rings</Title>
      <Description>{introduction}</Description>
      <SubTitle>All Volumes</SubTitle>
      <BooksContainer>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>
              <Image src={volume.cover} alt={`Cover image of ${volume.title}`} width={105} height={173} />
              {volume.title}
            </Link>
          </li>
        ))}
      </BooksContainer>
    </>
  );
}

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Description = styled.p`
  font: var(--font-body);
`;

const SubTitle = styled.h2`
  font: var(--font-headline-2);
`;

const BooksContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px;

  li {
    width: 105px;
    img {
      display: block;
      box-shadow: var(--box-shadow-book);
      margin-bottom: 10px;
      &:hover {
        box-shadow: var(--box-shadow-book-hover);
      }
    }
    font-size: 0.7rem;
  }
`;

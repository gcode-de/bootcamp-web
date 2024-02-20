import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: person, error: personError, isLoading: personIsLoading } = useSWR("/api/random-character", fetcher);
  const {
    data: image,
    error: imageError,
    isLoading: imageIsLoading,
  } = useSWR(person?.gender ? `https://randomuser.me/api/?gender=${person.gender}` : null, fetcher);
  if (personError || imageError) return <div>failed to load</div>;
  if (personIsLoading || imageIsLoading) return <div>loading...</div>;
  return (
    <div>
      <Person>
        <Image src={image.results[0].picture.large} alt={`${person.firstName}`} width={150} height={150} />
        <br></br>
        <b>
          {person.prefix} {person.firstName} {person.lastName} ({person.gender})
        </b>
        <br></br>
        Twitter: <Link href={`https://twitter.com/@${person.twitter_name}`}>{person.twitter_name}</Link>
        <br></br>
        Location: {person.geohash}
        <br></br>
      </Person>
    </div>
  );
}

const Person = styled.div`
  margin: 20px;
`;

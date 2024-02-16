import Link from "next/link";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import styled from "styled-components";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://swapi.dev/api/people/";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(URL + id, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card id={id} name={data.name} height={data.height} eyeColor={data.eye_color} birthYear={data.birth_year} />
      <StyledLink href="../">{"<-back to home page"}</StyledLink>
    </Layout>
  );
}

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-top: 40px;
`;

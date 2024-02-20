import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductsPage() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      <Product key={data.id}>
        <b>{data.name}</b> - {data.price} {data.currency}
        <br></br>
        Category: ({data.category})<br></br>
        Description: {data.description}
        <br></br>
      </Product>
      <Link href="/products/">all products</Link>
    </div>
  );
}

const Product = styled.div`
  margin-bottom: 20px;
`;

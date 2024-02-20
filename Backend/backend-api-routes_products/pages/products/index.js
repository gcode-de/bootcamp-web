import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

export default function ProductsPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      {data.map((product) => (
        <>
          <Product key={product.id}>
            <b>{product.name}</b> - {product.price} {product.currency}
            <br></br>
            Category: ({product.category})<br></br>
            Description: {product.description}
            <br></br>
            <Link href={`/products/${product.id}`}>see details</Link>
          </Product>
        </>
      ))}
    </div>
  );
}

const Product = styled.div`
  margin-bottom: 20px;
`;

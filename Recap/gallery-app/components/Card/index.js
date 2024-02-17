import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Heart from "@/public/assets/heart.svg";

export default function Card({
  slug,
  name,
  artist,
  year,
  genre,
  imageSource,
  imageWidth,
  imageHeight,
  colors,
  $isFavorite,
  toggleIsFavorite,
}) {
  return (
    <StyledCard>
      <Image
        alt={name}
        src={imageSource}
        height={200}
        width={(200 / imageHeight) * imageWidth}
      ></Image>
      <StyledHeart
        onClick={() => {
          toggleIsFavorite(slug);
        }}
        $isFavorite={$isFavorite}
      ></StyledHeart>
      <div id="colors">
        {colors &&
          colors.map((color, index) => (
            <StyledCircle color={color} key={index} />
          ))}
      </div>
      <div>
        {year}
        {genre && ` - ${genre}`}
      </div>
      <Link href={`/art-pieces/` + slug}>
        <p>{`"${name}" by ${artist}`}</p>
      </Link>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  position: relative;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  width: 400px;
  margin-bottom: 25px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  img {
    border-radius: 10px;
  }
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const StyledHeart = styled(Heart)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  fill: ${(props) => (props.$isFavorite ? "red" : "black")};
  height: 2rem;
`;

const StyledCircle = styled.div`
  height: 2rem;
  width: 2rem;
  margin: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: inline-block;
`;

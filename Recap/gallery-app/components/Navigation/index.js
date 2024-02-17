import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <Link href="/../">
          <li>Spotlight</li>
        </Link>
        <Link href="/../art-pieces">
          <li>Art Pieces</li>
        </Link>
        <Link href="/../favorites">
          <li>Favorites</li>
        </Link>
      </ul>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  width: 400px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  background-color: #999;
  z-index: index 3;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }
  li {
    padding: 20px 0;
    text-align: center;
  }
  li:hover {
    background-color: #777;
  }
  a {
    color: black;
    text-decoration: none;
    flex: 1;
  }
  a:hover {
    text-decoration: underline;
  }
`;

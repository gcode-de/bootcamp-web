import styled from "styled-components";

export default function Comments({ comments }) {
  return (
    <StyledComments>
      {comments.map((comment, index) => (
        <li key={index}>
          &quot;{comment.comment}&quot; ({comment.date})
        </li>
      ))}
    </StyledComments>
  );
}

const StyledComments = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

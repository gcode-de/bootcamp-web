import styled from "styled-components";

export default function CommentForm({ addComment, slug }) {
  function handleAddComment(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    addComment(slug, comment);
  }

  return (
    <StyledForm onSubmit={handleAddComment}>
      <label htmlFor="comment">Add comment:</label>
      <input name="comment" required></input>
      <button>Add</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-top: 20px;
  label {
    display: block;
  }
  input {
    margin-right: 5px;
  }
`;

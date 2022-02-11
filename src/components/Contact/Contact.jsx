import { ButtonStyled } from './Contact.styled';

export default function Contact({ id, name, phone, deleteContact }) {
  return (
    <>
      <span>
        {name} : {phone}
      </span>
      <ButtonStyled type="button" onClick={() => deleteContact(id)}>
        Delete
      </ButtonStyled>
    </>
  );
}

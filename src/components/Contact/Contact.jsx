import { ButtonStyled } from './Contact.styled';

export default function Contact({ id, name, phone, removeContact }) {
  return (
    <>
      <span>
        {name} : {phone}
      </span>
      <ButtonStyled type="button" onClick={() => removeContact(id)}>
        Delete
      </ButtonStyled>
    </>
  );
}

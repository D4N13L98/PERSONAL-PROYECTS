import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 1rem;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(200, 200, 200, 0.8);
`;

export const BoldLink = styled.a`
  font-size: 1rem;
  color: #e84a5f;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px dashed #e84a5f;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  outline: none;
  border: 1.5px solid #2a363b;
  border-radius: 5px;
  padding: 0px 15px;
  transition: all 200ms ease-in-out;
  margin-bottom: 15px;

  &::placeholder {
    color: #2a363b;
  }

  &:focus {
    outline: none;
    border: 2px solid #e84a5f;
  }

  &:hover {
    border: 2px solid #e84a5f;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 10px;
  color: #2a363b;
  font-size: 1.1rem;
  font-weight: 600;
  border: 1.5px solid #2a363b;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background-color: transparent;

  &:hover {
    border-color: #e84a5f;
    color: white;
    background-color: #e84a5f;
  }
`;

export const LineText = styled.p`
  font-size: 1rem;
  color: #2a363b;
  font-weight: 500;
`;
import styled from 'styled-components';

const Box = styled.div`
  background: ${({ theme }) => theme.box.backgroundPrimary};
  border-radius: 8px;
  padding: 16px;

  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: ${({ theme }) => theme.box.boxLinkText};
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.box.title};
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.box.subTitle};
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.box.smallTitle};
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.box.underLine};
  }
  input {
    width: 100%;
    background-color: ${({ theme }) => theme.box.inputBackground};
    color: ${({ theme }) => theme.box.inputText};
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: ${({ theme }) => theme.box.inputText};
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: ${({ theme }) => theme.box.buttonText};
    border-radius: 10000px;
    background-color: ${({ theme }) => theme.box.buttonBackground};
  }
`;

export default Box;

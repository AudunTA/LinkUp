import styled from "styled-components";

const FormSignUp = styled.form`
  .manager-account {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--border);
    border-radius: var(--main-border-radius);
    background-color: var(--text-color-highlight);
    backdrop-filter: var(--backdrop-filter);
    color: var(--text-color-main);

    .manager-switch {
      margin-right: 10px;
    }
    .manager-margin {
      margin-left: 10px;
    }
  }
  .error {
    font-size: 15px;
    color: var(--text-color-error);

    line-height: 25px;
  }
  .margin-error {
    display: flex;
    justify-content: center;
  }
  button {
    cursor: pointer;
    background-color: var(--btn-color-primary);
    width: 100%;
    height: 32px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--secondary-border-radius);
    border: 1px solid var(--border-color);
    font-size: 15px;
    color: white;
    text-align: center;
  }
`;

const FormRow = styled.div``;
export { FormSignUp, FormRow };

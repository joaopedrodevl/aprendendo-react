import ButtonLogin from "./styled";

interface IButton {
    onClickF: () => void;
}

export function Button({onClickF}: IButton) {
  return (
    <ButtonLogin type="submit" onClick={onClickF}>
        Login
    </ButtonLogin>
    );
}


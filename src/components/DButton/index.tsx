import { MouseEventHandler } from "react";
import ButtonLogin from "./styled";

interface IButton {
    onClick: MouseEventHandler;
}

export function DButton({onClick}: IButton) {
  return (
    <ButtonLogin type="submit" onClick={onClick}>
        Login
    </ButtonLogin>
    );
}


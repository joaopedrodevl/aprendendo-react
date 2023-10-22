import Nav from "./styled";

export default function Header() {
    return (
        <>
            <Nav>
                <h1>Dio Bank</h1>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#cartao">Cartão</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                </ul>
            </Nav>
        </>
    );
}
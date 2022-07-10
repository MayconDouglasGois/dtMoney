
import {Content, Container } from "./style";
import logo from "../../assets/Logo.svg"

interface IModalNewTransaction {
    ModalNewTransaction: ()=> void;
}
const Header = (props: IModalNewTransaction)=> {
    return (
<Container>
    <Content>
    <img src={logo} alt="" />
   <button onClick={props.ModalNewTransaction}>Nova Transação</button>
    </Content>
</Container>



    )
}
export {Header}
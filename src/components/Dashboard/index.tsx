import { Sumary } from "../Summary"
import { TableTransaction } from "../tableTransactin"
import { Container } from "./style"


const Dashboard = ()=> {
    return(
        <Container>
            <Sumary/>
            <TableTransaction/>
        </Container>
    )
}
export {Dashboard}
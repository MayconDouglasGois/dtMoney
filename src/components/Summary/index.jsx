import { Container } from "./style"
import { useTransaction } from "../../hooks/useContextTransaction"
import entrada from "../../assets/Entradas.svg"
import saida from "../../assets/Saídas.svg"
import total from "../../assets/Total.svg"
const Sumary = () => {
    const {tfootTransacion} = useTransaction()
    
    const sumery = tfootTransacion.reduce((acc, transaction)=>{
        if(transaction.type==="deposit"){
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdrawal += transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    },{
        deposit: 0,
        withdrawal: 0,
        total: 0
    })
   
return (
        <Container>
           <div>
            <header>
                <p>Entrada</p>
                <img src={entrada} alt="Entrada" />
            </header>
                <strong>{
          new Intl.NumberFormat(
            'pt-br',{style: 'currency', currency: 'BRL'}
            )
            .format(
                sumery.deposit
              )}</strong>
            </div>
<div>
            <header>
                <p>Saída</p>
                <img src={saida} alt="Saídas" />
            </header>
                <strong>- {
          new Intl.NumberFormat(
            'pt-br',{style: 'currency', currency: 'BRL'}
            )
            .format(
                sumery.withdrawal
              )}</strong>
            </div>
            <div className="total">
            <header>
                <p>Total</p>
                <img src={total} alt="Total" />
            </header>
                <strong>{
          new Intl.NumberFormat(
            'pt-br',{style: 'currency', currency: 'BRL'}
            )
            .format(
                sumery.total
              )}</strong>
            </div>
        </Container>
    )
}
export {Sumary}
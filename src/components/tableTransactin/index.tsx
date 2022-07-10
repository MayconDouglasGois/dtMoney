import { useTransaction } from "../../hooks/useContextTransaction"
import { Container } from "./style"


const TableTransaction = () =>{
  
  const {tfootTransacion} = useTransaction()

  return (
    <Container>
        <table>
  <thead>
    <tr>
      <th>Titulo</th>
      <th>Preço</th>
      <th>Categoria</th>
      <th>Data</th>
    </tr>
  </thead>
  <tfoot>    
      {tfootTransacion.map((transaction) => {
        
        return (
          <tr key={transaction.id}>
          <td>{transaction.title}</td>

          <td className={transaction.type}>{
          new Intl.NumberFormat(
            'pt-br',{style: 'currency', currency: 'BRL'}
            )
            .format(
              transaction.amount
              )}</td>
            
          <td>{transaction.category}</td>
          <td>{new Intl.DateTimeFormat('pt-br')
          .format(new Date(transaction.createdAt))}</td>
        </tr>
        )
      })}
   
  </tfoot>
        </table>
    </Container>
)




}
export {TableTransaction}
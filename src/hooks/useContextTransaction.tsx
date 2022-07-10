import React, { ReactNode } from "react"
import { api } from "../services/api"



interface ITransaction {
  id:number,
  title: string,
  type: string,
  category: string,
  amount:number,
  createdAt:string,
}
interface IChildrenApp {
  children: ReactNode
}

interface IPostTransaction {
  title: string,
  type: string,
  category: string,
  amount: number,
}
interface ItransactionContextData {
  tfootTransacion: ITransaction[];
  postTransaction: (transaction: IPostTransaction)=> Promise<void>;
}




const ContextTransaction = React.createContext<ItransactionContextData>
({} as ItransactionContextData) 


const TransactionProvider = ({children}: IChildrenApp)=>{

        const [tfootTransacion, setTfootTransacion] = React.useState<ITransaction[]>([])
        
        React.useEffect(()=>{
          api.get("transactions")
          .then(Response => setTfootTransacion(Response.data.transactions))
            }
        ,[])
        
       async function postTransaction (inputTransaction: IPostTransaction){
         
        const Response =  await api.post("transactions", inputTransaction)
        const {transaction} = Response.data
        setTfootTransacion([...tfootTransacion,transaction,])
          
        }

        return (
          <ContextTransaction.Provider value={{tfootTransacion,postTransaction}}>

          {children}

          </ContextTransaction.Provider>
        
        )
        
}
function useTransaction(){
  const context = React.useContext(ContextTransaction)
  return context
}
      export{TransactionProvider,useTransaction}
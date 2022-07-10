import Modal from 'react-modal';

import imgVetorX from '../../assets/Vector.svg'
import imgSaida from '../../assets/Saídas.svg'
import imgEntrada from '../../assets/Entradas.svg'


import {Container, TransitionTypeContainer,BoxBotton} from "./style";
import React, { FormEvent } from 'react';
import { useTransaction } from '../../hooks/useContextTransaction';






Modal.setAppElement("body")


interface INewTransaction {
    isOpen: boolean;
    closeNewTransaction: () =>void;
    }
  
   

const NewTransaction = ({isOpen,closeNewTransaction}: INewTransaction) => {
  const {postTransaction} = useTransaction()
const [type, setType] = React.useState("deposit")
const [title, setTitle] = React.useState("")
const [amount, setValue] = React.useState(0)
const [category, setCategory] = React.useState("")

function resetForm (){
  setType("deposit")
  setTitle("")
  setValue(0)
  setCategory("")
}
async function handleSubmitForm (event: FormEvent){

  event.preventDefault()


  await postTransaction({
    title,
    type,
    category,
    amount
   })
  
   resetForm()
 closeNewTransaction()

}
    
return (
    <Modal isOpen={isOpen}
        onRequestClose={closeNewTransaction}
        contentLabel="Example Modal"
        className="react-modal-content" 
        overlayClassName="react-modal-overley">
          


        <img className='react-modal-close' src= {imgVetorX} alt="Sair" onClick={closeNewTransaction}/>
        
          <h2>Cadastrar Transação</h2>
          
        <Container onSubmit={handleSubmitForm}>
          <input 
          placeholder='Titulo' 
          value={title}
          onChange = {(event)=> setTitle(event.target.value)}
          />

          <input 
          placeholder='Valor' type='number'
          value={amount}
          onChange = {(event)=> setValue(Number(event.target.value))}
          />


          <TransitionTypeContainer>

            <BoxBotton 
            type='button'
            isActive = {type ==="deposit"}
            onClick={()=>setType("deposit")}
            bgColor = "green"
            >
              <img  src={imgEntrada} alt="Entrada" />
              <span>Entrada</span>
            </BoxBotton>

            <BoxBotton 
            type='button'
            isActive = {type ==="withdrawal"}
            onClick={()=>setType("withdrawal")} 
            bgColor = "red"
            >
              <img src={imgSaida} alt="Saida" />
              <span>Saída</span>
            </BoxBotton>

          </TransitionTypeContainer>


            <input 
          placeholder='Categoria' 
          value={category}
          onChange = {(event)=> setCategory(event.target.value)}
          />
          
            <button type="submit">Cadastrar</button>
          
        </Container>
      </Modal>
      )
    }
    export {NewTransaction}
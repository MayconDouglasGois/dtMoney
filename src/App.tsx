import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransaction } from "./components/ModalNewTransaction";
import { TransactionProvider } from "./hooks/useContextTransaction";
import { GlobalStyle } from "./styles/global";

function App() {

  const [modalIsOpenNewTransaction, setIsOpenNewTransaction] = React.useState(false);

  function openModalNewTransaction() {
    setIsOpenNewTransaction(true);
  }
  function closeModalNewTransaction() {
    setIsOpenNewTransaction(false);
  }


  return (
    <TransactionProvider>

    <NewTransaction 
    isOpen = {modalIsOpenNewTransaction}
    closeNewTransaction = {closeModalNewTransaction}
    />
    <GlobalStyle/>
    <Header ModalNewTransaction = {openModalNewTransaction}/>
    <Dashboard/>
    
    </TransactionProvider>
  );
}

export {App};

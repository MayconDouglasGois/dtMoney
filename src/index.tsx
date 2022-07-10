import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs'


createServer({
  models:{
    transaction: Model
  },
  seeds(server){
    server.db.loadData(
     {
      transactions: [
        {
        id:1,
        title: "Frelancer de Web Site",
        type: "deposit",
        category: "Dev",
        amount:600,
        createdAt: "2022-04-14 09:00:00",
       },
       {
        id:2,
        title: "Aluguel",
        type: "withdrawal",
        category: "Contas",
        amount:200,
        createdAt: "2022-04-15 08:00:00",
       },
       {
        id:3,
        title: "Salário",
        type: "deposit",
        category: "Contas",
        amount:1200,
        createdAt: "2022-04-15 14:00:00",
       }]
     }
    )
  },

  routes(){
    this.namespace = 'api'

    this.get("/transactions",(schema, request) => {
      return this.schema.all("transaction")
    })

    this.post("/transactions",(schema, request) => {
      const data = {...(JSON.parse(request.requestBody)), createdAt: new Date()}
      return schema.create("transaction",data)

    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

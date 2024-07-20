import React from 'react'

const UserDetails = ({nome, idade, profissao, maiorDeIdade}) => {
  return (
    <div>
        {nome}<br/>
        {idade}<br/>
        {profissao}<br/>
        {maiorDeIdade ? "pode tirar habilitação" : "não pode tirar habilitação"}<br/><br/>
    </div>
  )
}

export default UserDetails
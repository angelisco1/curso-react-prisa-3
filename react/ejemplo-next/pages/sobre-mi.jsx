import React from 'react'
import Router from 'next/router'

const SobreMi = () => {

  const volverAInicio = () => {
    Router.push('/')
  }

  return (
    <div>
      <h1>Sobre mi</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nihil ullam assumenda reiciendis impedit consequatur at dolore ratione dolorem amet obcaecati eius, porro laudantium iste quasi aliquid, pariatur rerum illo?
      Accusantium molestias magni possimus autem illo in, ipsam laudantium vero sapiente dicta aliquam repudiandae iusto, quae consequatur magnam perferendis ratione voluptatibus pariatur, aspernatur vel? Commodi, illo nulla. Praesentium, id unde?
      Magnam accusamus fugit ullam eaque placeat vero, velit minus tenetur deserunt, commodi adipisci voluptates dolorum iusto iure doloremque neque nihil et. Velit provident consequuntur facilis voluptates, atque vitae doloribus maxime?</p>
      <button type="button" onClick={volverAInicio}>Volver a inicio</button>
    </div>
  )
}

export default SobreMi

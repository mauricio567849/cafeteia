
/* >>> LOGICA DE PROGRAMAÇAO <<<

   [1ª] saber qendo o usuario clicar no botao 
   [2ª] mudar o posionamento do modal
   [] fazer a mascara ficar visível
   [] Quando clicar na mascara, fechar o modals

    */

   const modal = document.querySelector('.modal')
   const mascara = document.querySelector('.mascara')

    /* 1ª*/ function mostrarModal(){
      modal.style.left = '50%'
      mascara.style.visibility = 'visible'
    }
    function esconderModal(){
       modal.style.left = '-30%'
      mascara.style.visibility = 'hidden'
    }
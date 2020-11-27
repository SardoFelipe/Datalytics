			
function descricao1(){

		let descricao1 = document.getElementById("descricao1");

		descricao1.innerHTML = "<h5> Daniel, 16 anos, Encarregado da programação do site ";

		descricao1.style.textAlign = 'initial';
        descricao1.style.backgroundColor = 'Blue';
        descricao1.style.font = 'popins, sans serif'; 
        descricao1.style.color = 'white';
        descricao1.style.borderRadius = '4px';
        descricao1.style.padding = '10px';
        descricao1.style.marginLeft = '30px'
}

function descricao2(){

    let descricao2 = document.getElementById("descricao2");

    descricao2.innerHTML = "<h5> Felipe, 16 anos, Encarregado das pesquisas para o conteudo do site ";

    descricao2.style.textAlign = 'initial';
    descricao2.style.backgroundColor = 'Blue';
    descricao2.style.font = 'popins, sans serif'; 
    descricao2.style.color = 'white';
    descricao2.style.borderRadius = '4px';
    descricao2.style.padding = '10px';
    descricao2.style.marginLeft = '30px'
}

function descricao3(){

    let descricao3 = document.getElementById("descricao3");

    descricao3.innerHTML = "<h5> Giovanni, 15 anos......";

    descricao3.style.textAlign = 'initial';
    descricao3.style.backgroundColor = 'Blue';
    descricao3.style.font = 'popins, sans serif'; 
    descricao3.style.color = 'white';
    descricao3.style.borderRadius = '4px';
    descricao3.style.padding = '10px';
    descricao3.style.marginLeft = '30px'
}


function descricao4(){

    let descricao4 = document.getElementById("descricao4");

    descricao4.innerHTML = "<h5> Gian, 16 anos......";

    descricao4.style.textAlign = 'initial';
    descricao4.style.backgroundColor = 'Blue';
    descricao4.style.font = 'popins, sans serif'; 
    descricao4.style.color = 'white';
    descricao4.style.borderRadius = '4px';
    descricao4.style.padding = '10px';
    descricao4.style.marginLeft = '30px'
}


const hamburger_menu = document.querySelector(".hamburger-menu");
const cont1 = document.querySelector(".cont1");
hamburger_menu.addEventListener("click", () => {
  cont1.classList.toggle("active");
});

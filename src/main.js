'use strict';

fetch("arquivoJson.json").then((response) => {
    response.json().then((res) => {
        this.renderCharacters(res)
    })

})

var renderCharacters = function (data) {

    data.sort((a, b) => {
        return b.episode.length - a.episode.length || a.name.localeCompare(b.name)
    })

    data.forEach(element => {

        if (element.status == 'Alive') {
            $('.carousel-inner').append(`
            <div id='card'>
                <div class="carousel-item ${data.indexOf(element) === 0 ? 'active' : ''} "">
                <img class="d-block w-100 img-card" src="${element.image}" alt="${element.nome}">
                <ul>
                <div id='visto-por-ultimo'>
                    <span>${element.name}</span>
                </div>
                <li><span>Visto por ultimo em: </span> ${element.location.name}</li>             
                <li><span>Gênero: </span>${element.gender == 'Male'? 'Masculino' : 'Feminino'}</li>
                <li><span>Aparições na 1º temporada: </span>${element.episode.filter((e) => 
                    {return parseInt(e.toString().split('/')[5]) <= 11}).length}</li>
                <li><span>Aparições na 2º temporada: </span>${element.episode.filter((e) => 
                    {return parseInt(e.toString().split('/')[5]) >= 12 && e.toString().split('/')[5] <= 21}).length}</li>
                <li><span>Aparições na 3º temporada: </span>${element.episode.filter((e) => 
                    {return parseInt(e.toString().split('/')[5]) > 21}).length}</li>
                <li><span>Aparições no total: </span>${element.episode.length}</li>
                <li><span>Status: </span>Vivo</li>
                </ul>
                </div>
            </div>`)
        }
    });
}



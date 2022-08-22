//exibir_load(true)


function renderiza_foto(foto){
    const img_foto =  document.getElementById('foto')
    img_foto.src=`${foto}`;
}
function renderiza_nome(nome){
    const nav_nome = document.getElementById('nome')
    nav_nome.innerText = nome;
}
function renderiza_repos(repositorio){
    const div_repos = document.getElementById('portifolio')
    div_repos.innerHTML += `<div class = "portifolio-items"><a href = "${repositorio.html_url}"><button>${repositorio.name}</button></a></div>`
}
headers = new Headers();
headers.append('Authorization', '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')
fetch("https://api.github.com/users/RASROWDK", {headers: headers})
.then(response => response.json())
    .then(data => {
        console.log(data)
        renderiza_foto(data.avatar_url);
        renderiza_nome(data.name)
})

.catch(error => {
    /* para status de erro*/console.error('Algo deu errado na requisição', error);
    document.getElementsByName('#erro').innerHTML = "Algo deu errado"
}).finally(() => {
    //exibir_load(false);
    console.warn('Sempre cai aqui');
})

fetch("https://api.github.com/users/RASROWDK/repos", {headers: headers})
.then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(renderiza_repos);
        
})

.catch(error => {
    /* para status de erro*/console.error('Algo deu errado na requisição', error);
    document.getElementsByName('#erro').innerHTML = "Algo deu errado"
}).finally(() => {
    //exibir_load(false);
    console.warn('Sempre cai aqui');
})
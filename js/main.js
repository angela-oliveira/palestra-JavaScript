const cepField = document.querySelector('#cep')
const nome = document.querySelector('#nome')
const main = document.getElementById('main')

cepField.addEventListener('keyup', function(event) {
  if (event.key == 'Enter') {
    let cepvalue = cepField.value
    let nomeValue = nome.value
    pesqusiarCep(cepvalue, nomeValue)
  }
})


function pesqusiarCep (cep, nome) {
  let url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url)
    .then(res => res.json())
    .then(cepInfo => {
      if(cepInfo.erro) {
        return false
      } else {
        const card =  `
        <div class="card">
        <h4>${nome} mora em</h4>
          <p>${cepInfo.logradouro}</p>
          <p>${cepInfo.bairro}</p>
          <p>${cepInfo.localidade}</p>
          <p>${cepInfo.uf} - Brasil</p>
        </div>`
        main.insertAdjacentHTML('beforeend', card)
      }
    })
}

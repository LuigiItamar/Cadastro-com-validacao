function enviar () {
    var nome = document.getElementById('nome')
    var idade = document.getElementById('idade')
    var salario = document.getElementById('salario')

    if (nome.value.length == 0 || idade.value.length == 0 || salario.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos!')

    } else if (nome.value.length < 3) {
        window.alert('[ERRO] O campo nome deve ter no minimo 3 character!')

    } else if (idade.value < 1 || idade.value > 110){
        window.alert('[ERRO] A idade deve ter no minimo 1 ano e no máximo 110 anos!')

    } else if (salario.value < 100) {
        window.alert('[ERRO] O salario deve ser acima de 100!')

    } else {
      window.alert('Tudo ok!')
    
        
    } 
     
     

}
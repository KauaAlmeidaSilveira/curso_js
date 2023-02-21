const alunos= [
    {nome: 'Kauã', nota: 7, bolsista: false},
    {nome: 'Leandro', nota: 10, bolsista: true},
    {nome: 'Gleice', nota: 9, bolsista: true},
    {nome: 'Naryeli', nota: 9, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador+atual
}, 10)

console.log(resultado)
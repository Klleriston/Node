
// Elabore uma função para calcular o gasto de combustível por km rodado. Utilize as seguintes recomendações:
// Essa função deve receber dois parâmetros: a distância a ser percorrida em metros, e o tipo de combustível do carro;
// Um carro roda 16km/litro com gasolina e 11km/litro com etanol;
// A função deve retornar um int que representa quantos litros serão necessários para o percurso;
// O parâmetro de distância deve ser um inteiro e não pode ser negativo. Já o de combustível deve ser uma string e só pode ter “gasolina” ou “etanol”
// Implementar testes unitários para garantir que as validações e as funções principais estão funcionando como o esperado. Importante que os testes sejam implementados em um arquivo diferente das funções principais.


function CalcCombustivelPorKM(distancia, tp_combustivel) {

    if (tp_combustivel == "gasolina") {
        const consumo = 10
        let litros_necessarios = distancia - consumo
        if (litros_necessarios < 0) {
            return `você tem combustivel suficiente !!`
        }
        return parseInt(litros_necessarios)
    }

    if (tp_combustivel == "etanol") {
        const consumo = 7
        let litros_necessarios = distancia - consumo
        if (litros_necessarios < 0) {
            return `você tem combustivel suficiente !!`
        }
        return litros_necessarios
    }

    if (tp_combustivel != "etanol" || "gasolina" || distancia < 0) {
        return "parametros invalidos"
    }

}

module.exports = { CalcCombustivelPorKM }
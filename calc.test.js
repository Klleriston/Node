const calculos = require("./calc")

test('param invalido', () => {expect(calculos.CalcCombustivelPorKM(0, "solar")).toMatch(`parametros invalidos`)})

test("gasolina maior doq distancia", () => {expect(calculos.CalcCombustivelPorKM(5, "gasolina")).toMatch(`você tem combustivel suficiente !!`)})

test("execução gasolina", () => {expect(calculos.CalcCombustivelPorKM(16, "gasolina")).toBe(6)})

test("etanol maior doq distancia", () => {expect(calculos.CalcCombustivelPorKM(5, "etanol")).toMatch(`você tem combustivel suficiente !!`)})




test("execução etanol", () => {expect(calculos.CalcCombustivelPorKM(16, "etanol")).toBe(9)})
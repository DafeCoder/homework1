"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}


let stat = prompt("Введите обязательную статью расходов в этом месяце", ""),
    stat2 = prompt("Во сколько обойдется?", ""),
    stat3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    stat4 = prompt("Во сколько обойдется?", "");

appData.expenses.stat = stat2;
appData.expenses.stat3 = stat4;


alert(appData.budget / 30)
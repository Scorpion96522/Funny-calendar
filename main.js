const dom = {
    calendar: document.getElementById('calendar')

}

console.log(dom);

const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const monthNames = [
    'ЯНВАРЬ',
    'ФЕВАРЛЬ',
    'МАРТ',
    'АПРЕЛЬ',
    'МАЙ',
    'ИЮНЬ',
    'ИЮЛЬ',
    'АВГУСТ',
    'СЕНТЯБРЬ',
    'ОКТЯБРЬ',
    'НОЯБРЬ',
    'ДЕКАБРЬ',
]
const weekDayNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

function renderMonth(month, year) {

}

function buildMonthHeadHTML(title, monthName) {
    return `
        <div class="month__title">${title}</div>
        <div class="month__name">${monthName}</div>

    `
}
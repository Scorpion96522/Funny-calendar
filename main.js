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


function renderMonth(monthNumber, year) {
    const monthName = monthNames[monthNumber]
    const monthHeadString = buildMonthHead('Заголовок', monthName)
    const monthBox = document.createElement('div')
    monthBox.className = 'month'
    monthBox.innerHTML = monthHeadString
    dom.calendar.appendChild(monthBox)
}

renderMonth(5, 2022)

function buildMonthHead(title, monthName) {
    return `
        <div class="month__title">${title}</div>
        <div class="month__name">${monthName}</div>

    `
}
const dom = {
    calendar: document.getElementById('calendar')

}

console.log(dom);

// const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// const monthNames = [
//     'ЯНВАРЬ',
//     'ФЕВАРЛЬ',
//     'МАРТ',
//     'АПРЕЛЬ',
//     'МАЙ',
//     'ИЮНЬ',
//     'ИЮЛЬ',
//     'АВГУСТ',
//     'СЕНТЯБРЬ',
//     'ОКТЯБРЬ',
//     'НОЯБРЬ',
//     'ДЕКАБРЬ',
// ]
const months = [
    {
        title: 'Ёбаный <br>  новый год',
        name: 'ЯНВАРЬ',
        days: 31
    },
    {
        title: 'Ёбаный <br> холод',
        name: 'ФЕВАРЛЬ',
        days: 28
    },
    {
        title: 'Ёбаная <br> грязь',
        name: 'МАРТ',
        days: 31
    },
    {
        title: 'Ёбаные <br> шутники',
        name: 'АПРЕЛЬ',
        days: 30
    },
    {
        title: 'Ёбаный <br> день труда ',
        name: 'МАЙ',
        days: 31
    },
    {
        title: 'Ёбаные <br> школьники',
        name: 'ИЮНЬ',
        days: 30
    },
    {
        title: 'Ёбаная <br> жара',
        name: 'ИЮЛЬ',
        days: 31
    },
    {
        title: 'Ёбаный <br> отпуск',
        name: 'АВГУСТ',
        days: 31
    },
    {
        title: 'Ёбаное <br> 3 сентября ',
        name: 'СЕНТЯБРЬ',
        days: 30
    },
    {
        title: 'Ёбаный <br> дождь ',
        name: 'ОКТЯБРЬ',
        days: 31
    },
    {
        title: 'Ёбаные <br> скидки',
        name: 'НОЯБРЬ',
        days: 30
    },
    {
        title: 'Ёбаные <br>  подарки ',
        name: 'ДЕКАБРЬ',
        days: 31
    },
]



function renderMonth(monthIdx, year) {
    const month = months[monthIdx]
    const monthHeadString = buildMonthHead(month.title, month.name)
    const monthBox = document.createElement('div')
    monthBox.className = 'month'
    let monthContentHTML = ['<div class="month__content">']
    monthContentHTML.push(renderWeekDayNames())
    monthContentHTML.push(renderDates(year, monthIdx, month.days))
    monthContentHTML.push('</div>')

    console.log(monthContentHTML)
    monthBox.innerHTML = monthContentHTML.join('')
    dom.calendar.appendChild(monthBox)
}

for (let i=0; i<1; i++) {
renderMonth(1, 2023)
}

function buildMonthHead(title, monthName) {
    return `
        <div class="month__title">${title}</div>
        <div class="month__name">${monthName}</div>
    `
}


function renderWeekDayNames() {
    const weekDayNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    const daysNames = []
    for (let i = 0; i < 7; i++) {
        const dayNameTag = `<div class="month__date month__date_accent">${weekDayNames[i]}</div>`
        daysNames.push(dayNameTag)
    }
    return daysNames.join('')
}


function renderDates(year, month, daysCount) {
    const date = new Date(year, month, 1)
    const datesHTML = []
    let day = 1
    console.log(date.getDay())
    while(day <= daysCount) {
        const dateHTML = renderDate(day)
        datesHTML.push(dateHTML)
        day ++
    }
    return datesHTML.join('')
}
const monthIdx = 1
const monthDaysCount = months[monthIdx].days
renderDates(2023,monthIdx, monthDaysCount)

function renderDate(content, isAccent = false) {
    const cls = isAccent ? 'month__date month__date_accent' : 'month__date'
    return `<div class="${cls}>${content}</div>`
}
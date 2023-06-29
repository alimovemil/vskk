document.addEventListener('DOMContentLoaded', () => {
    const options = {
        settings: {
            lang: 'define',
        },
        locale: {
            months: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            weekday: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        },
        input: true,
        actions: {
            changeToInput(e, HTMLInputElement, dates, time, hours, minutes, keeping) {
                if (dates[0]) {
                    HTMLInputElement.value = dates[0];
                    // if you want to hide the calendar after picking a date
                    calendar.HTMLElement.classList.add('vanilla-calendar_hidden');
                } else {
                    HTMLInputElement.value = '';
                }
            },
        },
    };
    const calendar = new VanillaCalendar('#calendar-input', options);
    calendar.init();
    const cale = new VanillaCalendar('#calendar-passport', options);
    cale.init();
    const caledata = new VanillaCalendar('#calendar-data', options);
    caledata.init();
    const calesor = new VanillaCalendar('#calendar-sor', options);
    calesor.init();
    const calenda = new VanillaCalendar('#calendar-link', options);
    calenda.init();
    const calendainer = new VanillaCalendar('#calendar-passport-inner', options);
    calendainer.init();
    const calendaineriner = new VanillaCalendar('#calendar-data-iner', options);
    calendaineriner.init();
    const calendainerineriner = new VanillaCalendar('#calendar-sor-iner', options);
    calendainerineriner.init();
    const calendainerinerinerlink = new VanillaCalendar('#calendar-input-link', options);
    calendainerinerinerlink.init();
    const calendainerinerinerlinklink = new VanillaCalendar('#calendar-data-links', options);
    calendainerinerinerlinklink.init();
    const calendainerinerinerlinklinklink = new VanillaCalendar('#calendar-data-iner-linkse', options);
    calendainerinerinerlinklinklink.init();
});

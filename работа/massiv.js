// ИП?


const list = [{
        title: 'Дата',
        id: 'calendar-link',
        value: '',
        // appendIcon: 
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'ФИО',
        value: '',
        placeholder: 'Пример: Иванов Иван Иванович',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'ИНН',
        value: '',
        placeholder: 'Пример: 253715231200',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'КПП',
        value: '',
        placeholder: 'Пример: 253715231200',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'ТИП ТС',
        value: '',
        placeholder: 'Пример: CT',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Марка ТС',
        value: '',
        placeholder: 'Пример: IVECO STRALIS AT 440 S 4',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Марка ТС',
        value: '',
        placeholder: 'Пример: IVECO STRALIS AT 440 S 4',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Модель ТС',
        value: '',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'ПТС. СЕРИЯ и номер',
        value: '',
        placeholder: 'Пример: Введите ПТС состоящий из 10 или 15 знаков',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'ПТС. Дата выдачи',
        id: 'calendar-passport-inner',
        value: '',
        placeholder: 'Пример 09.10.2020',
        // appendIcon: 
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'СОР. Серия и номер',
        value: '',
        placeholder: 'Пример: 9931 225346',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'СОР. Дата выдачи документа',
        id: 'calendar-data-iner',
        value: '',
        placeholder: 'Пример: 09.10.2020',
        // appendIcon
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Регистрационный знак',
        value: '',
        placeholder: 'Пример: Введите Гос.номер, стостоящий из 8 или 9 знаков',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'VIN',
        id: 'calendar-sor-iner',
        value: '',
        placeholder: 'Пример: 1XKDD49X15R975899',
        // appendIcon
        onChange: (v: string) => onChange(v)
    },
    {
        title: '№ кузова',
        value: '',
        onChange: (v: string) => onChange(v)
    },
    {
        title: '№ шасси',
        value: '',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Год выпуска ТС',
        value: '',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Email, на который отправим печатную форму договора',
        value: '',
        placeholder: 'Пример: ivanov@gmail.com',
        onChange: (v: string) => onChange(v)
    },

]

// ИП



// ЮРИДИЧЕСКОЕ ЛИЦО


const listLink = [{
        title: 'Дата',
        id: 'calendar-input-link',
        value: '',
        // appendIcon: 
        onChange: (v: string) => onChange(v)

    },
    {
        title: 'Название компании',
        value: '',
        placeholder: 'Пример: ООО «НАВИНИЯ РУС»',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Паспортные данные водителя. Серия и номер',
        value: '',
        placeholder: 'Пример: 709-01- 5169364',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'ИНН',
        value: '',
        placeholder: 'Пример: 7710293280',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'КПП',
        value: '',
        placeholder: 'Пример: 254301001',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Тип ТС',
        value: '',
        placeholder: 'Пример: СТ',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Марка ТС',
        value: '',
        placeholder: 'Пример: IVECO STRALIS AT 440 S 4',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Модель ТС',
        value: '',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'ПТС. Серия и номер',
        value: '',
        placeholder: 'Введите ПТС состоящий из 10 или 15 знаков',
        onChange: (v: string) => onChange(v)
    },
    {
        title: ' ПТС. Дата выдачи',
        id: 'calendar-data-links',
        value: '',
        placeholder: 'Пример: 09.10.2020',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'СОР. Серия и номер',
        value: '',
        placeholder: 'Пример: 9931 225346',
        onChange: (v: string) => onChange(v)
    },
    {
        title: ' СОР. Дата выдачи документа',
        id: 'calendar-data-iner-linkse',
        value: '',
        placeholder: 'Пример: 9931 225346',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Регистрационный знак',
        value: '',
        placeholder: 'Введите Гос. номер, состоящий из 8 или 9 знаков',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'VIN',
        value: '',
        placeholder: 'Пример: 1XKDD49X15R975899',
        onChange: (v: string) => onChange(v)
    },
    {
        title: '№ кузова',
        value: '',
        onChange: (v: string) => onChange(v)
    },
    {
        title: '№ шасси',
        value: '',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Год выпуска ТС',
        value: '',
        placeholder: 'Пример: 2004',
        onChange: (v: string) => onChange(v)
    },
    {
        title: 'Email, на который отправим печатную форму договора',
        value: '',
        placeholder: 'Пример: navina.rus@gmail.com" name="email',
        onChange: (v: string) => onChange(v)
    },
]
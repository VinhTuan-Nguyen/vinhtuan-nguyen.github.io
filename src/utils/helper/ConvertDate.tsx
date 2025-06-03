export const ConvertDate = (value: string, lang: string) => {
    const month = value.split('/')
    if (lang === 'vi') {
        switch (month[0]) {
            case 'Jan':
                return value.replace('Jan', '01')
            case 'Feb':
                return value.replace('Feb', '02')
            case 'Mar':
                return value.replace('Mar', '03')
            case 'Apr':
                return value.replace('Apr', '04')
            case 'May':
                return value.replace('May', '05')
            case 'Jun':
                return value.replace('Jun', '06')
            case 'Jul':
                return value.replace('Jul', '07')
            case 'Aug':
                return value.replace('Aug', '08')
            case 'Sep':
                return value.replace('Sep', '09')
            case 'Oct':
                return value.replace('Oct', '10')
            case 'Nov':
                return value.replace('Nov', '11')
            case 'Dec':
                return value.replace('Dec', '12')
        }
    }

    switch (month[0]) {
        case '01':
            return value.replace('01', 'Jan')
        case '02':
            return value.replace('02', 'Feb')
        case '03':
            return value.replace('03', 'Mar')
        case '04':
            return value.replace('04', 'Apr')
        case '05':
            return value.replace('05', 'May')
        case '06':
            return value.replace('06', 'Jun')
        case '07':
            return value.replace('07', 'Jul')
        case '08':
            return value.replace('08', 'Aug')
        case '09':
            return value.replace('09', 'Sep')
        case '10':
            return value.replace('10', 'Oct')
        case '11':
            return value.replace('11', 'Nov')
        case '12':
            return value.replace('12', 'Dec')
        default:
            return value
    }
}
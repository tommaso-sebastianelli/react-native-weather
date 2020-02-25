const iconMap = name => {
    switch (name) {
        case 'sn': return 'weather-snowy'
        case 'sl': return 'weather-snowy-rainy'
        case 'h': return 'weather-hail'
        case 't': return 'weather-lightning'
        case 'hr': return 'weather-pouring'
        case 'lr': return 'weather-rainy'
        case 's': return 'weather-rainy'
        case 'hc': return 'weather-cloudy'
        case 'lc': return 'weather-partlycloudy'
        case 'c': return 'weather-sunny'
        default: return ''
    }
}

const weekDay = id => {
    switch (id) {
        case 0: return 'Sunday'
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        case 3: return 'Wednesday'
        case 4: return 'Thursday'
        case 5: return 'Friday'
        case 6: return 'Saturday'
        default: return '?'
    }
}

export { iconMap, weekDay }
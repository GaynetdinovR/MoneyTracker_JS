import {
    other,
    leisure,
    calendar,
    car_repair,
    education,
    gift,
    grocceries,
    health,
    house,
    sport,
    transport
} from '../assets/icons/group.js';

const currencies = {
    "EUR": 106,
    "GBP": 122,
    "USD": 101,
    "RUB": 1
}

const categories = {
    'other': {'img': other, 'color': '#369341' },
    'leisure': {'img': leisure, 'color': '#EE5CFF' },
    'calendar': {'img': calendar, 'color': '#004D09' },
    'car_repair': {'img': car_repair, 'color': '#D10000' },
    'education': {'img': education, 'color': '#CC6600' },
    'gift': {'img': gift, 'color': '#FFCC33' },
    'grocceries': {'img': grocceries, 'color': '#663399' },
    'health': {'img': health, 'color': '#003399' },
    'house': {'img': house, 'color': '#006666' },
    'sport': {'img': sport, 'color': '#00BFEE' },
    'transport': {'img': transport, 'color': '#460000' }
}

export {
    currencies, 
    categories
}
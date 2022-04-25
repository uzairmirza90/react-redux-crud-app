let initialState = [
    {
        id: 1,
        name: 'Real Me Event',
        image: 'https://media.wired.co.uk/photos/606d9f42d9c09fc47d4c1630/1:1/w_2000,h_2000,c_limit/realme.jpg',
        location: 'California',
        description: 'There is the aforementioned 150W charging, powered by the UltraDart Charging Architecture, which is capable of achieving 50 per cent charge in just 5 minutes. And we have been told that the phone will run on the MediaTek Dimensity 8100 processor, with four Cortex-A78 CPU cores clocked at 2.85GHz and four Cortex-A55 CPU cores clocked at 2.0GHz'
    },
    {
        id: 2,
        name: 'Samsung Event',
        image: 'https://images.samsung.com/pk/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg',
        location: 'New York',
        description: 'With this smartphone, the night is yours to capture with the best and brightest photos and videos — and you will also dominate the day with revolutionary power, speed and tools. It is part of the smartest Galaxy experience yet, delivering cutting-edge innovation throughout the Galaxy ecosystem while also blazing new trails with sustainable materials'
    },
    {
        id: 3,
        name: 'Apple Event',
        image: 'https://www.apple.com/newsroom/images/tile-images/Apple_new-iphone-se_04152020.jpg.news_app_ed.jpg',
        location: 'China',
        description: 'An Apple event is a high-level event that conforms to the Apple Event Interprocess Messaging Protocol. The Apple Event Manager uses the services of the Event Manager to send Apple events between applications on the same computer, between applications on remote computers, or from an application to itself'
    },
    {
        id: 4,
        name: 'Real Me Event',
        image: 'https://media.wired.co.uk/photos/606d9f42d9c09fc47d4c1630/1:1/w_2000,h_2000,c_limit/realme.jpg',
        location: 'California',
        description: 'There is the aforementioned 150W charging, powered by the UltraDart Charging Architecture, which is capable of achieving 50 per cent charge in just 5 minutes. And we have been told that the phone will run on the MediaTek Dimensity 8100 processor, with four Cortex-A78 CPU cores clocked at 2.85GHz and four Cortex-A55 CPU cores clocked at 2.0GHz'
    },
    {
        id: 5,
        name: 'Samsung Event',
        image: 'https://images.samsung.com/pk/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg',
        location: 'New York',
        description: 'With this smartphone, the night is yours to capture with the best and brightest photos and videos — and you will also dominate the day with revolutionary power, speed and tools. It is part of the smartest Galaxy experience yet, delivering cutting-edge innovation throughout the Galaxy ecosystem while also blazing new trails with sustainable materials'
    },
    {
        id: 6,
        name: 'Apple Event',
        image: 'https://www.apple.com/newsroom/images/tile-images/Apple_new-iphone-se_04152020.jpg.news_app_ed.jpg',
        location: 'China',
        description: 'An Apple event is a high-level event that conforms to the Apple Event Interprocess Messaging Protocol. The Apple Event Manager uses the services of the Event Manager to send Apple events between applications on the same computer, between applications on remote computers, or from an application to itself'
    },
]

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [...state, action.payload];

        case 'DELETE_EVENT':
            const filteredArray = state.filter((event) => event.id !== action.payload.id)
            return filteredArray;

        case 'UPDATE_EVENT':
            let newState = state.filter((event) => event.id !== action.payload.id)
            return [
                {   
                    name: action.payload.name,
                    description: action.payload.description,
                    location: action.payload.location,
                    image: action.payload.image
                },
                ...newState, 
            ]
               

        default:
            return state;
    }
}
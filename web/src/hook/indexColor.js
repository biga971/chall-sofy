
export const indextoColor = (index) => {

    switch (index) {
        case 'Bon':
            return 'rgb(92, 238, 231)'

        case 'Moyen':
            return 'rgb(92, 205, 176)'

        case 'Dégradé':
            return 'rgb(235, 229, 82)'

        case 'Mauvais':
            return 'rgb(247, 95, 97)'

        case 'Très Mauvais':
            return 'rgb(153, 23, 69)'

        case 'Extrêmement Mauvais':
            return 'rgb(141, 53, 139)'
    
        default:
            return 'rgb(141, 53, 139)'
            break;
    }
}
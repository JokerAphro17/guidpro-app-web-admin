


export const formatXOF = (amount) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(amount);
}

export const resolveStatus = (status) => {
    switch (status) {
        case "PENDING":
            return "En attente";
        case "PUBLISHED":
            return "Publié";
        case "DRAFT":
            return "Brouillon";
        default:
            return "En attente";
    }
}
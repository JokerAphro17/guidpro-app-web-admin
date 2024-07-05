


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


export const resolveArticleStatus = (status) => {
    switch (status) {
        case "PENDING":
            return "En attente";
        case "PUBLISHED":
            return "Publié";
        case "ARCHIVED":
            return "Archivé";
        default:
            return "En attente";
    }
}

export const resolveArticleColor = (status) => {
    switch (status) {
        case "PENDING":
            return "warning";
        case "PUBLISHED":
            return "success";
        case "ARCHIVED":
            return "danger";
        default:
            return "warning";
    }
}
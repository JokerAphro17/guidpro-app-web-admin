


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


export const resolveFileUrl = (notFormatedUrl) => {
    if (!notFormatedUrl) {
        return "https://via.placeholder.com/300";
    }

    // example of notFormatedUrl : \"https://cloud.nafaan.com/seafhttp/files/af9d43fa-ad77-46a3-8724-a43ffe35e656/file_1720235383860.webp\"
    // we need to remove the backslashes and the quotes
    const formatedUrl = notFormatedUrl.replace(/\\/g, "").replace(/"/g, "");

    return formatedUrl;
}


export const gate = (user) => {

    return {
        isAdmin: user?.role === "ADMIN",
        isExpert: user?.role === "EXPERT",
        isNovice: user?.role === "NOVICE",
    }
}

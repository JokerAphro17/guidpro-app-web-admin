import Swal, {SweetAlertIcon, SweetAlertResult} from "sweetalert2";

export const alertPending = (message = "Chargement en cours") => {
    Swal.fire({
        title: "",
        html: message,
        didOpen: () => {
            Swal.showLoading();
        },
        allowOutsideClick: false,
    }).then(() => {});
};

export const alertNotification = (
    icon= "success",
    message = "",
    callback = null,
    title = "Notification",
    confirmBtn = "Ok"
) => {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        allowOutsideClick: false,
        confirmButtonText: confirmBtn,
    }).then((result) => {
        if (callback) {
            callback({
                isConfirmed: result?.isConfirmed,
                isDenied: result?.isDenied,
            });
        }
    });
};

export const alertConfirmation = (
    message = "",
    callback= null,
    confirmBtn = "Je confirme",
    title = "Confirmation"
) => {
    Swal.fire({
        title: title,
        text: message,
        icon: "warning",
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonText: confirmBtn,
        cancelButtonText: "Annuler",
    }).then((result
    ) => {
        if (callback) {
            callback({
                isConfirmed: result?.isConfirmed,
                isDenied: result?.isDenied,
            });
        }
    });
};





export const alertClosed = () => {
    Swal.close();
};
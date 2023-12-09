import { Notify } from "quasar";

export const useToast = (message: string, type: "success" | "error") => {
    let color;

    switch (type) {
        case "success":
            color = "green";
            break;

        case "error":
            color = "red";
            break;

        default:
            color = "primary";
            break;
    }

    Notify.create({
        message: message,
        color,
        position: "top-right",
        actions: [
            {
                icon: "close",
                color: "white",
                round: true,
                handler: () => {
                    /* ... */
                },
            },
        ],
    });

    return {};
};

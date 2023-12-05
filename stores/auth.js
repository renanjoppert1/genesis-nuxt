import { defineStore } from "pinia";
const config = useRuntimeConfig();
import { Notify } from "quasar";
// import useUseToast from

export const useAuthStore = defineStore("auth", {
    state: () => ({ user: undefined, token: undefined }),
    actions: {
        // TODO add auth csrf
        async login() {
            const { data, pending, error, refresh, status } = await useFetch(
                `${config.public.API_BASE_URL}/admin/auth/login`,
                {
                    method: "post",
                    body: {
                        email: "renanljp@gmail.com",
                        password: "123456",
                    },
                },
            );

            console.log(data.value, status.value);

            if (status.value === "error") {
                console.error("Erro no login");

                Notify.create({
                    message:
                        "Credenciais inválidas. Verifique seus dados e tente novamente.",
                    color: "red",
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
                return;
            }

            this.user = data.value.user;
            this.token = data.value.authorization.token;

            const router = useRouter();
            router.push("/admin/dashboard");
        },
        resetState() {
            this.user = undefined;
            this.token = undefined;
        },
        logout() {
            const router = useRouter();
            router.push("/admin");
        },
        me() {},
    },
});

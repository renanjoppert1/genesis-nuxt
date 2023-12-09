import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({ user: undefined, token: undefined }),
    actions: {
        // TODO add auth csrf
        async login(email, password) {
            const { data, pending, error, refresh, status } = await useApi(
                `/admin/login`,
                {
                    method: "post",
                    body: {
                        email,
                        password,
                    },
                }
            );

            console.log(data.value, status.value);

            if (status.value === "error") {
                console.error("Erro no login", error);

                useToast(
                    "Credenciais inválidas. Verifique seus dados e tente novamente.",
                    "error"
                );
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
    persist: {
        storage: persistedState.localStorage,
    },
});

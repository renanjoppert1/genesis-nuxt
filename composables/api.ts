export const useApi = async (url: string, options: undefined | object = {}) => {
    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.API_BASE_URL;

    const { data, pending, error, refresh, status } = await useFetch(
        `${apiBaseUrl}${url}`,
        options
    );
    return { data, pending, error, refresh, status };
};

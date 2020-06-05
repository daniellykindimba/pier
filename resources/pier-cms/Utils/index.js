export function getYouTubeVideoIdFromUrl(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    const youtubeRegex = /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/;
    if (!youtubeRegex.test(url))
        return null;

    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
}

export async function handleNetworkError(error, fallbackMessage = "Network error") {
    if (error && error.response && error.response.data)
        showErrorToast(error.response.data);
    else
        showErrorToast(fallbackMessage);

    console.log(fallbackMessage, error);
}

export function showErrorToast(message) {
    Vue.$toast.error(message, {
        position: 'top-right',
        duration: 3000
    });
}

export function showSuccessToast(message) {
    Vue.$toast.success(message, {
        position: 'top-right',
        duration: 3000
    });
}
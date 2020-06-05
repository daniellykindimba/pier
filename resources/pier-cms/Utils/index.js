export function getYouTubeVideoIdFromUrl(url){
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    const youtubeRegex = /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/;
    if(!youtubeRegex.test(url))
        return null;

    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
}
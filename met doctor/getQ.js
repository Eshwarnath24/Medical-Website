export let webPaging = localStorage.getItem('webName');

export function saveWebName (web) {
    localStorage.setItem('webName' , web);
}


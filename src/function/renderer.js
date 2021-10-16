const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

let linkSobre = document.querySelector('#linkSobre');

linkSobre.addEventListener('click', function(){
    ipcRenderer.send('abrir-janela-sobre');
})
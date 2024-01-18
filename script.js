function toggleMode() {
    const html = document.documentElement

    /* 
        if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    tudo isso pode ser resumido com o comando abaixo
    */

    html.classList.toggle('light')
}

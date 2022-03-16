function erase () {

    for (var i=1; i<7; i++){
        
        document.getElementById('div'+i).style.display='none';

    }
}

function exibir () {
    
    var select = document.getElementById("sel");

    var option = select.options[select.selectedIndex];

    document.getElementById(option.value).style.display='block';

}    
    
window.addEventListener('load', erase, exibir);
<script>

var toc = document.getElementById('TOC');
var tocswitch = document.createElement('a');
var tocheader = document.createElement('h4');
tocheader.innerText = "Sisällys";

tocswitch.innerText = "Piilota sisällys";
tocswitch.href = "javascript:void(0)";
tocswitch.id  ='tocswitch';
tocswitch.addEventListener('click',ShowHideMenu,false)
toc.appendChild(tocswitch);

toc.insertBefore(tocheader, toc.firstChild);


function ShowHideMenu(){
    var thistoc = document.getElementById('TOC');
    var hidelength = "-"
    var heightprops = ["clientHeight","offsetHeight", "scrollHeight"];
    var i = 0;
    var tocheight = undefined;
    while (tocheight==undefined & i < heightprops.length){
        tocheight  = thistoc[heightprops[i]];
    }

    if (parseInt(thistoc.style.top) < 0){
        thistoc.style.top="20px";
        document.getElementById('tocswitch').innerText = "Piilota sisällys";
    }
    else{
        thistoc.style.top = (0 - tocheight + 26) + "px";
        document.getElementById('tocswitch').innerText = "Näytä sisällys";
    }
}


</script>

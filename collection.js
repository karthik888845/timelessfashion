var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
             productlist[count].style.display="block"
        }
    }
})

var sidenavbar = document.querySelector(".side-navbar")

function showNavbar()
{
     sidenavbar.style.left="0"
}

function closeNavbar()
{
     sidenavbar.style.left="-60%"
}
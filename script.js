    function submitform(){
        document.getElementById("displayNoneItem").classList.remove('cnt-displayNone')
        setTimeout(function(){
            document.getElementById("displayNoneItem").classList.add('cnt-displayNone')
        },2000)
    }

    function changeBgColor(){
        var navbar = document.getElementById("Navbar")
        var scrollValue = window.scrollY;
        if(scrollValue > 400){
            navbar.classList.remove('bgcolor')
            navbar.classList.add("bgcolorOnScroll")
        }else{
            navbar.classList.remove("bgcolorOnScroll")
            navbar.classList.add('bgcolor')
        }
    }
    window.addEventListener('scroll',changeBgColor)
// signUP button click-------
    document.getElementById("signUp-btn").addEventListener('click', function(){
    
        document.getElementById('signuptoggle').classList.add('signUptoggle')
        document.getElementById('display').classList.remove('displayNone')

    })



  


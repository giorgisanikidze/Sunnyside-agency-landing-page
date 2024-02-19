const hamburger = document.querySelector(".hamburger");
const navs = document.querySelector(".navs");

hamburger.addEventListener("click", () => {
    if (handleScreenWidthChange() <= 1440) {
        if (navs.style.display == "none" ) {
            navs.style.display = "flex"
        } else {
            navs.style.display = "none";
        }
        
    }
    
    
})

function handleScreenWidthChange() {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
        navs.style.display = 'flex'
    } 
    return screenWidth
}

window.addEventListener('resize', handleScreenWidthChange);


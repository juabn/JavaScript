"use strict";

// history.back();
// history.forward();
// history.length
// history.go();
addEventListener('popstate',(e)=>{
    console.log(e.state);
})
console.log(window.location.href); 
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
var interval;
for (var i = 0; i < navMenuAnchorTags.length-1; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        //  console.log(targetSectionID);
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        // interval = setInterval(scrollVertically, 20, targetSection);
        // OR
        interval = setInterval(function(){
            scrollVertically(targetSection);
        },20);
    });
}
function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}



// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// // console.log(navMenuAnchorTags);
// for(let i = 0 ; i < navMenuAnchorTags.length-1; i++){
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//          event.preventDefault();
//          var targetSectionID = this.textContent.trim().toLowerCase();
//         //  console.log(targetSectionID);
//         var targetSection = document.getElementById(targetSectionID);
//         // console.log(targetSection);
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,50);
//         },20);

//     });
// }

var temp = 0;

var arr = [
    { col: "#333", bgc: "rgba(111, 255, 255, 0.646)" },
    { col: "#F9CB37", bgc: "rgb(23, 34, 46)" }, //good color
    { col: "#E3C9CEFF", bgc: "rgb(103, 124, 32)" },
    { col: "rgb(230,70,28)", bgc: "rgb(11,10,13)" },
    // { col: "yellow", bgc: "#444" },
    // { col: "yellow", bgc: "#444" },
]

document.querySelector("#slide1").addEventListener("mousemove", function (dets) {

    // if (dets.screenX % 80 === 0) {
    //     // console.log(dets.screenX)
    //     // console.log(arr[temp].col)

    //     document.querySelector("#slide1").style.backgroundColor = arr[temp].bgc;
    //     document.querySelectorAll(".colc").forEach(function(target){
    //         target.style.color= arr[temp].col;
    //     })


    //     temp++;

    //     if (temp === arr.length) {
    //         temp = 0;
    //     }
    // }
    x = window.screen.availWidth / arr.length


    
    if (dets.screenX <= x) {
        temp=0;
        document.querySelector("#slide1").style.backgroundColor = arr[temp].bgc;
        document.querySelectorAll(".colc").forEach(function (target) {
            target.style.color = arr[temp].col;
        })
        // document.querySelector("#cphoto").style.backgroundImage=`url(https://images.unsplash.com/photo-1582405255296-e85bd3a7944f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80)`;
        document.querySelector("#cphoto").style.backgroundImage=`url(https://images.unsplash.com/photo-1542841791-1925b02a2bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)`;

    }

    if (x <= dets.screenX && 2 * x >= dets.screenX) {
        temp=1;
        document.querySelector("#slide1").style.backgroundColor = arr[temp].bgc;
        document.querySelectorAll(".colc").forEach(function (target) {
            target.style.color = arr[temp].col;
        })
        // document.querySelector("#cphoto").style.backgroundImage=`url(https://images.unsplash.com/photo-1542841791-1925b02a2bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)`;
        document.querySelector("#cphoto").style.backgroundImage=`url(https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)`;
    }

    if (2 * x <= dets.screenX && 3 * x >= dets.screenX) {
        temp=2;
        document.querySelector("#slide1").style.backgroundColor = arr[temp].bgc;
        document.querySelectorAll(".colc").forEach(function (target) {
            target.style.color = arr[temp].col;
        })
        // document.querySelector("#cphoto").style.backgroundImage=`url(https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)`;
        document.querySelector("#cphoto").style.backgroundImage=`url(https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)`;
        
    }

    if (3 * x <= dets.screenX && 4 * x >= dets.screenX) {
        temp=3;
        document.querySelector("#slide1").style.backgroundColor = arr[temp].bgc;
        document.querySelectorAll(".colc").forEach(function (target) {
            target.style.color = arr[temp].col;
        })
        document.querySelector("#cphoto").style.backgroundImage=`url(https://images.unsplash.com/photo-1519810409043-b6d44921bfa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)`;
    }
})

document.querySelector("#main").addEventListener("mousemove", function (dets) {
    let y = dets.pageY;
    let x = dets.pageX;

    document.querySelector("#follower").style.top = y + "px";
    document.querySelector("#follower").style.left = `${x}px`;

})





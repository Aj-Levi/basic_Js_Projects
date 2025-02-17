function addzero(x){
    if (0<=x && x<=9){
        return "0"+(x.toString());
    }else return x.toString();
}

const daymap={
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday"
}

let now = new Date();
let daytoday=daymap[now.getDay()];

function updateTime() {
    let now = new Date();
    let hour = addzero(now.getHours());
    let minute = addzero(now.getMinutes());
    let second = addzero(now.getSeconds());

    // Update the content of the element with the current time
    document.getElementsByClassName("currenttime")[0].innerHTML = hour + ":" + minute + ":" + second;

    if(hour>=12) document.getElementsByClassName("ampm")[0].innerHTML = "PM";
    else document.getElementsByClassName("ampm")[0].innerHTML = "AM";
}

// Call updateTime every second
setInterval(updateTime, 1000);

// Initialize the clock immediately when the page loads
updateTime();

const box = document.body.getElementsByClassName("title")[0];

// Add click event to the box
box.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the event from propagating to the document
    let toadd=document.getElementById(daytoday);
    toadd.classList.toggle("trans");
});
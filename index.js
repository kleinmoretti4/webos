//time function
function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);


//dragable by using their id's
dragElement(document.getElementById("music"));
dragElement(document.getElementById("book"));
dragElement(document.getElementById("apps"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//open and close function
var welcomeScreen = document.querySelector("#music")

function closeWindow(element){
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "flex"
}

//music function
var musicScreen = document.querySelector("#music")
var musicScreenClose = document.querySelector("#closemusic")
var musicScreenOpen = document.querySelector("#openmusic")

musicScreenClose.addEventListener("click", function() {
    closeWindow(musicScreen);
});

musicScreenOpen.addEventListener("click", function() {
    openWindow(musicScreen);
});

//book function
var bookScreen = document.querySelector("#book")
var bookScreenClose = document.querySelector("#closebook")
var bookScreenOpen = document.querySelector("#openbook")

bookScreenClose.addEventListener("click", function() {
    closeWindow(bookScreen);
});

bookScreenOpen.addEventListener("click", function() {
    openWindow(bookScreen);
});

//icons changing
var selectedIcon = undefined
function selectIcon(element){
  element.classList.add("selected");
  selectedIcon = element
}

function deselectIcon(element){
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element){
  if(element.classList.contains("selected")){
    deselectIcon(element)
    openWindow(window)
  }
  else{
    selectIcon(element)
  }
}
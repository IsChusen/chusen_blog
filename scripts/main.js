// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my_image.jpg') {
      myImage.setAttribute('src', 'images/my_image2.jpg');
    } else {
      myImage.setAttribute('src', 'images/my_image.jpg');
    }
}

// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');

if(!myName) {
    setUserName();
} else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '欢迎你，' + myName;
}
}

myButton.onclick = function() {
setUserName();
}
 

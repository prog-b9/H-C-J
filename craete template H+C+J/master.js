// toogle Menu
let bars = document.querySelector(".landing header .bars");
let MenuBar = document.querySelector(".landing header ul");

bars.onclick = (e) => {
  e.stopPropagation();
  bars.classList.toggle("active");
  MenuBar.classList.toggle("active");
};

MenuBar.onclick = (e) => {
  //ul li (li)=>no  event btn
  e.stopPropagation();
};

document.addEventListener("click", (ele) => {
  ele.stopPropagation();

  if (ele.target !== bars && ele.target !== MenuBar) {
    MenuBar.classList.remove("active");
    bars.classList.remove("active");
  }
});

//--------------Start Settings Box-------------//
// Settings Box Open
document.querySelector(".setting").onclick = () => {
  document.querySelector(".settings-box").classList.toggle("open");
};

//Check If There's LocalStorage Color Or NO

let mainColor = localStorage.getItem("colorItem");
if (mainColor !== null) {
  //   console.log("Local Storage Not Empty");
  document.documentElement.style.setProperty("--main-color", mainColor);
  //Remove Active Class From All Children
  document.querySelectorAll(".colors-content li").forEach((e) => {
    e.classList.remove("active");

    // Add Active class for li if click === local Storage
    if (e.dataset.color === mainColor) {
      e.classList.add("active");
    }
  });
} else {
  //   console.log("Local Storage Empty");
}

//Switch Colors
let colorsLi = document.querySelectorAll(".colors-content li");

// Loop On All Li Item
colorsLi.forEach((li) => {
  // CLick On All Li Item
  li.addEventListener("click", (e) => {
    // here specify All Element Conatin (--main-color) change to click target
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // set Local Storage
    localStorage.setItem("colorItem", e.target.dataset.color);

    //Remove Active Class From All Children
    // parentElement => ul For color-content
    e.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });

    //Add Active Class
    e.target.classList.add("active");
  });
});

// Check Random Background If For Local Storage Or No
let mainBackground = localStorage.getItem("backgroundItem");
let controlBackground = true;
if (mainBackground === null) {
  // console.log("Background Local Storage Is Empty");
} else {
  if (mainBackground === "true") {
    controlBackground = true;
  } else {
    controlBackground = false;
  }

  //Remove All Active On yes And No
  document.querySelectorAll(".background-content div").forEach((ee) => {
    ee.classList.remove("active");
  });

  //Add Class Active On yes

  if (mainBackground === "true") {
    document.querySelectorAll(".background-content .yes").forEach((ee) => {
      ee.classList.add("active");
    });
  } else {
    //Add Class Active On No
    document.querySelectorAll(".background-content .no").forEach((ee) => {
      ee.classList.add("active");
    });
  }
}
// Switch Random Background
let backEl = document.querySelectorAll(".background-content div");

backEl.forEach((div) => {
  div.addEventListener("click", (e) => {
    if (e.target.dataset.background === "yes") {
      controlBackground = true;
      randomize();
    } else {
      controlBackground = false;
      // clearInterval => Stop the Random Background
      clearInterval(backgroundInterval);
    }

    localStorage.setItem("backgroundItem", controlBackground);

    e.target.parentElement.querySelectorAll(".active").forEach((ee) => {
      ee.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

//check For Bullets
let mainBullets = localStorage.getItem("bulletsItem");
let SwitchBullets = document.querySelectorAll(".bullet-content div");

if (mainBullets !== null) {
  if (mainBullets === "no") {
    document.querySelector(".nav-bullets").style.display = "none";
  } else {
    document.querySelector(".nav-bullets").style.display = "block";
  }

  SwitchBullets.forEach((bul) => {
    bul.classList.remove("active");
  });

  // bul.classList.add("active");
  if (mainBullets === "no") {
    document.querySelectorAll(".bullet-content .no").forEach((bul) => {
      bul.classList.add("active");
    });
  } else {
    document.querySelectorAll(".bullet-content .yes").forEach((bul) => {
      bul.classList.add("active");
    });
  }
}
// Switch Bullet
SwitchBullets.forEach((bul) => {
  bul.addEventListener("click", (e) => {
    if (e.target.dataset.bullet === "no") {
      document.querySelector(".nav-bullets").style.display = "none";
    } else {
      document.querySelector(".nav-bullets").style.display = "block";
    }
    localStorage.setItem("bulletsItem", e.target.dataset.bullet);

    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// Start reset Options
document.querySelector(".reset-options").onclick = () => {
  // clear All Local Storage
  // localStorage.clear();

  //delete item for me specify
  // localStorage.removeItem("colorItem");
  // localStorage.removeItem("backgroundItem");
  // localStorage.removeItem("bulletsItem");

  // short for removeItem
  let localStorageItem = ["colorItem", "backgroundItem", "bulletsItem"];
  localStorageItem.forEach((item) => {
    localStorage.removeItem(item);
  });

  // Reload Window => refresh
  window.location.reload();
};
// End reset Options

//--------------End Settings Box-------------//
//--------------Start Landing-------------//
// Element Landing
let landing = document.querySelector(".landing");

//Create Array Of Images
let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

// this is var For setInterval
let backgroundInterval;
//Function For Run Random Background Images
function randomize() {
  backgroundInterval = setInterval(() => {
    //Get Random Number
    let RandomNumber = Math.floor(Math.random() * images.length); // 0,1,2,3,4,5

    // Change bacground-images
    landing.style.backgroundImage =
      'url("images/' + images[RandomNumber] + '")';
  }, 5000);
}
//--------------End Landing-------------//

//--------------Start Skills-------------//

let skills = document.querySelectorAll("#skills .box .line .line-content");
// if Access  the section Skills
window.onscroll = () => {
  // window.scrollY = 1177
  if (scrollY >= 1177) {
    //this is Function Run the Our Skills
    skillsCOunter();
  }
};

function skillsCOunter() {
  skills.forEach((line) => {
    line.style.width = line.dataset.goal;
  });
}

// console.log();

//--------------End Skills-------------//

//--------------Start Gallery-------------//

let gallery = document.querySelectorAll(".gallery .box-images img");

gallery.forEach((imgs) => {
  imgs.addEventListener("click", (img) => {
    //create overlay
    let overlay = document.createElement("div");

    //Add Class To Overlay
    overlay.className = "over-lay";

    // Add to body
    document.body.appendChild(overlay);

    //---------------------//
    //create popup box
    let popupBox = document.createElement("div");

    //create class For Popup Box
    popupBox.className = "popup-box";

    //craete imgBox
    let imgBox = document.createElement("img");

    //Set source inside imgBox
    imgBox.setAttribute("src", img.target.src);

    //Add imgBox inside the popupBox
    popupBox.appendChild(imgBox);

    //Print in the body
    document.body.appendChild(popupBox);

    //create close for image
    let close = document.createElement("div");

    //Add Class For Close
    close.className = "closed";

    close.innerHTML = '<ion-icon name="close-outline"></ion-icon>';

    popupBox.appendChild(close);

    close.onclick = () => {
      // this is remove() destroy the element
      close.remove();
      overlay.remove();
      popupBox.remove();
    };
  });
});

//--------------End Gallery-------------//
//--------------Start Nav Bullets-------------//

//Select All Bullets
let bullets = document.querySelectorAll(".nav-bullets .bullet");
ScrollAllLinks(bullets);
//Select All links Header
let linksHeader = document.querySelectorAll(".landing header ul li a");
ScrollAllLinks(linksHeader);

// this is function All Scroll
function ScrollAllLinks(test) {
  test.forEach((t) => {
    t.addEventListener("click", (e) => {
      // destroy go to other links
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

//--------------End Nav Bullets-------------//
//--------------Start Taps-------------//

let tapsArray = document.querySelectorAll(".taps .taps-btn li");

let divsContentArray = document.querySelectorAll(".taps .taps-content > div");

tapsArray.forEach((tap) => {
  tap.addEventListener("click", (li) => {
    // Clear All ACtive in li
    tapsArray.forEach((tap) => {
      tap.classList.remove("active");
    });

    //Addition active in tap target
    li.target.classList.add("active");

    //if click the tap create display = "none" on the Conetnt
    divsContentArray.forEach((div) => {
      div.style.display = "none";
    });

    // if click on the li (li.target.dataset.tap === class(.one/.two/.three))
    document.querySelector(li.target.dataset.tap).style.display = "block";
  });
});

//--------------End Taps-------------//
//--------------Start FAQ-------------//

let faqArrow = document.querySelectorAll(".faq .arrow");

let answer = document.querySelectorAll(".faq .answer");

faqArrow.forEach((arw) => {
  arw.addEventListener("click", (ar) => {
    faqArrow.forEach((ar) => {
      ar.classList.remove("active");
    });

    //Addition Class Active On Arrow
    ar.target.classList.add("active");

    //Clear All Answer
    answer.forEach((answ) => {
      answ.classList.remove("active");
    });

    // Add Class Active On Answer
    document.querySelector(ar.target.dataset.arrow).classList.add("active");
  });
});

//--------------End FAQ-------------//

//--------------Start Filter Images-------------//
let filtImgLink = document.querySelectorAll(".filter-images .links li");

let filtImages = document.querySelectorAll(".filter-images .images img");

filtImgLink.forEach((ele) => {
  ele.addEventListener("click", removeActive);
  ele.addEventListener("click", manageImg);
});

// thhs is function remove active
function removeActive() {
  filtImgLink.forEach((li) => {
    //clear clas Active
    li.classList.remove("active");
    //this => i click on the li from for me
    this.classList.add("active");
  });
}

function manageImg() {

  // hide all images when click
  filtImages.forEach((img) => {
    img.style.display = "none";
  });

  //show data-filt the images when click li 
  document.querySelectorAll(this.dataset.filt).forEach((im) => {
    im.style.display = "block";
  });
}


//--------------End Filter Images-------------//

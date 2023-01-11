
///////////Start Register///////////////////
// login 
let login = document.createElement("div");
login.className = "login";

// login container
let loginContainer = document.createElement("div");
loginContainer.className = "container";
loginContainer.style.cssText = `
background-color: var(--blueWithWhite);
display: grid;
grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));

margin-top: 200px;
border-radius: var(--radiusForContainer);
height: 500px;
padding: 0;
box-shadow: var(--shadow);
`;

// login col:first-child
let col = document.createElement("div");
col.className = "col";
col.style.cssText = `
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0 10px 10px 0;

`;


// login col:first-child img
let imglogo = document.createElement("img");
imglogo.className = "img-logo";
imglogo.src = "images/logo.png";
imglogo.style.cssText = `
width: 70px;
height: 70px;
border-radius: 50px;
`;


// login col:first-child forms
let form = document.createElement("form");
form.style.cssText = `
margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
// login col:first-child forms boxInput

// Email
let boxInputE = document.createElement("div");
boxInputE.className = "boxInput";
boxInputE.style.cssText = `
background-color: var(--blue-light-color);
margin: 10px 0;
padding: 5px;
border-radius: var(--radiusInput);
position: relative;
`;
let inputEmail = document.createElement("input");
inputEmail.placeholder = "الإيميل";
inputEmail.style.cssText = `
background-color: transparent;
border: none;
outline: none;
padding-right: 30px;
width: 300px;
height: 40px;
font-size: 15px;
color: var(--black-color);
`;

let iconEmail = document.createElement("ion-icon");
iconEmail.name = "mail-outline";
iconEmail.style.cssText = `
position: absolute;
right: 10px;
top: 14px;
`;
// phoneNumber
let boxInputN = document.createElement("div");
boxInputN.className = "boxInput";
boxInputN.style.cssText = `
background-color: var(--blue-light-color);
margin: 10px 0;
padding: 5px;
border-radius: var(--radiusInput);
position: relative;
`;

let inputPhoneNumber = document.createElement("input");
inputPhoneNumber.placeholder = "رقم جوال";
inputPhoneNumber.style.cssText = `
background-color: transparent;
border: none;
outline: none;
padding-right: 30px;
width: 300px;
height: 40px;
font-size: 15px;
color: var(--black-color);
`;

let iconPhoneNumber = document.createElement("ion-icon");
iconPhoneNumber.name = "call-outline";
iconPhoneNumber.style.cssText = `
position: absolute;
right: 10px;
top: 14px;
`;
// Password
let boxInputP = document.createElement("div");
boxInputP.className = "boxInput";
boxInputP.style.cssText = `
background-color: var(--blue-light-color);
margin: 10px 0;
padding: 5px;
border-radius: var(--radiusInput);
position: relative;
`;

let inputPass = document.createElement("input");
inputPass.placeholder = "الرقم السري";
inputPass.type = "password";
inputPass.style.cssText = `
background-color: transparent;
border: none;
outline: none;
padding-right: 30px;
width: 300px;
height: 40px;
font-size: 15px;
color: var(--black-color);
`;


let iconPass = document.createElement("ion-icon");
iconPass.name = "lock-closed-outline";
iconPass.style.cssText = `
position: absolute;
right: 10px;
top: 14px;
`;
// login col:first-child forms button
let btnLogin = document.createElement("button");
btnLogin.innerHTML = "إنشاء الحساب";

btnLogin.style.cssText = `
    border: none;
    outline: none;
    margin-top: 20px;
    background-color: var(--blue-light-color);
    width: 200px;
    height: 40px;
    border-radius: var(--radiusInput);
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    font-size: 18px;
`;
btnLogin.addEventListener("mouseenter",()=>{

    btnLogin.style.cssText = `
    transition: 0.2s;
    background-color: #38a8ca;
    border: none;
    outline: none;
    margin-top: 20px;
    width: 200px;
    height: 40px;
    border-radius: var(--radiusInput);
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    font-size: 18px;
    `;
});
btnLogin.addEventListener("mouseleave",()=>{

    btnLogin.style.cssText = `
    transition: 0.2s;
    border: none;
    outline: none;
    margin-top: 20px;
    background-color: var(--blue-light-color);
    width: 200px;
    height: 40px;
    border-radius: var(--radiusInput);
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    font-size: 18px;
    `;
});
// login col:first-child forms footerLogin

let footerLogin = document.createElement("div");
footerLogin.className = "footerLogin";
footerLogin.style.cssText = `
margin-top: 20px;
`;

// login col:first-child forms footerLogin span

let spanNoAccount = document.createElement("span");
let span = document.createElement("span");
span.innerHTML = "تملك حساب ؟";
// login col:first-child forms footerLogin spanLink

let linkforSpan = document.createElement("a");
linkforSpan.innerHTML = "نعم";
linkforSpan.href = "login.html";
linkforSpan.style.cssText = `
color: var(--blue-dark-color);
font-weight: bold;
margin: 0 5px;
`;



login.appendChild(loginContainer);
loginContainer.appendChild(col);
col.appendChild(imglogo);
col.appendChild(form);
form.appendChild(boxInputE);
form.appendChild(boxInputN);
form.appendChild(boxInputP);
boxInputE.appendChild(inputEmail);
boxInputE.appendChild(iconEmail);
boxInputN.appendChild(inputPhoneNumber);
boxInputN.appendChild(iconPhoneNumber);
boxInputP.appendChild(inputPass);
boxInputP.appendChild(iconPass);

form.appendChild(btnLogin);

form.appendChild(footerLogin);
footerLogin.appendChild(spanNoAccount);
footerLogin.appendChild(span);
span.appendChild(linkforSpan);



// login col:last-child
let colLastChils = document.createElement("div");
colLastChils.className = "col";
colLastChils.style.cssText = `
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--blue-light-color);
    border-radius: 10px 0 0 10px;
`;


// login col:last-child h1
let h1LogIn = document.createElement("h1");
h1LogIn.innerHTML = "إنشاء حسابك";

// login col:last-child img-teacher

let imgTeacher = document.createElement("img");
imgTeacher.className = "img-teacher";
imgTeacher.src = "images/teacher.png";
imgTeacher.style.cssText = `
margin-top: 15px;
`;




loginContainer.appendChild(colLastChils);
colLastChils.appendChild(h1LogIn);
colLastChils.appendChild(imgTeacher);

// run login
document.body.appendChild(login);

///////////End Login///////////////////

///////////Start Footer///////////////////

// footer
let footer = document.createElement("footer");
footer.style.cssText = `
margin-top: 200px;
background-color: var(--black-color);
`;
// footer container
let footerContainer = document.createElement("div");
footerContainer.className = "container";
footerContainer.style.cssText = `
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
`;


// footer share-media
let footerShareMedia = document.createElement("div");
footerShareMedia.className = "share-media";


// footer share-media h3
let footerShareMediaH3 = document.createElement("h3");
footerShareMediaH3.innerHTML = "للتواصل مع المنصة : ";
footerShareMediaH3.style.cssText = `
color: #fff;

`;


// footer share-media img
let footerShareimg = document.createElement("img");
footerShareimg.src = "images/logo.png";
footerShareimg.style.cssText = `
width: 70px;
height: 70px;
border-radius: 50px;
`;

// footer share-media ul
let footerShareMediaUl = document.createElement("ul");
footerShareMediaUl.style.cssText = `
display: flex;

`;


// footer share-media lis

let footerShareMediaUlLiW = document.createElement("li");
let footerShareMediaUlLiM = document.createElement("li");
let footerShareMediaUlLiG = document.createElement("li");
footerShareMediaUlLiW.style.cssText = `
margin: 10px;

`;
footerShareMediaUlLiM.style.cssText = `
margin: 10px;

`;
footerShareMediaUlLiG.style.cssText = `
margin: 10px;

`;



// footer share-media lis imgs
let footerShareMediaUlLiWimg = document.createElement("img");
footerShareMediaUlLiWimg.src="images/whatsapp.png";

let footerShareMediaUlLiMimg = document.createElement("img");
footerShareMediaUlLiMimg.src="images/mail (1).png";

let footerShareMediaUlLiGimg = document.createElement("img");
footerShareMediaUlLiGimg.src="images/github.png";


footerShareMediaUlLiWimg.style.cssText = `
color: #fff;
width: 40px;
height: 40px;
`;
footerShareMediaUlLiMimg.style.cssText = `
color: #fff;
width: 40px;
height: 40px;
`;
footerShareMediaUlLiGimg.style.cssText = `
color: #fff;
width: 40px;
height: 40px;
`;


// footer h3
let footerH3 = document.createElement("h3");
footerH3.innerHTML = "جميع الحقوق محفوظة &copy; 2023";
footerH3.style.cssText = `
color: #fff;
    text-align: center;
`;



footer.appendChild(footerContainer);
footerContainer.appendChild(footerShareMedia);
 
footerShareMedia.appendChild(footerShareMediaH3);


footerShareMedia.appendChild(footerShareMediaUl);
footerShareMediaUl.appendChild(footerShareMediaUlLiW);
footerShareMediaUl.appendChild(footerShareMediaUlLiM);
footerShareMediaUl.appendChild(footerShareMediaUlLiG);

footerShareMediaUlLiW.appendChild(footerShareMediaUlLiWimg);
footerShareMediaUlLiM.appendChild(footerShareMediaUlLiMimg);
footerShareMediaUlLiG.appendChild(footerShareMediaUlLiGimg);

footerContainer.appendChild(footerShareimg);
footer.appendChild(footerH3);

// run footer
document.body.appendChild(footer);
///////////End Footer///////////////////

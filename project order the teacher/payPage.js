//////////////Start Header///////////////////////
// header
let header = document.createElement("header");
// header container

let headerContainer = document.createElement("div");
headerContainer.className = "container";
headerContainer.style.cssText = `
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

// header ul
let headerUl = document.createElement("ul");
headerUl.style.cssText = `
display: flex;
list-style: none;

`;
// header ul li

let headerliPageHome = document.createElement("li");
headerliPageHome.style.cssText = `
margin: 0 10px;

`;
let headerliTeachers = document.createElement("li");
headerliTeachers.style.cssText = `
margin: 0 10px;

`;
let headerliAccount = document.createElement("li");
headerliAccount.className = "account";
headerliAccount.style.cssText = `
margin: 0 10px;
background-color: var(--black-color);
color: #fff;
padding: 5px 10px;
border-radius: var(--radiusForContainer);
letter-spacing: 1px;
pointer-events: none;

`;

// header ul li a

let headeraPageHome = document.createElement("a");
headeraPageHome.innerHTML = "الصفحة الرئيسة";
headeraPageHome.href = "#";
headeraPageHome.style.cssText = `
font-weight: bold;

`;
let headeraTeachers = document.createElement("a");
headeraTeachers.innerHTML = "المدرسين الخصوصيين";
headeraTeachers.href = "#";
headeraTeachers.style.cssText = `
font-weight: bold;

`;
let headeraAccount = document.createElement("a");
headeraAccount.className = "account";
headeraAccount.innerHTML = "BasilMohammed";
headeraAccount.style.cssText = `
font-weight: bold;
color:#fff;
`;

let headerContainerImg = document.createElement("img");
headerContainerImg.src = "images/logo.png";
headerContainerImg.style.cssText = `
width: 70px;
height: 70px;
border-radius: 50px;
`;

header.appendChild(headerContainer);
headerContainer.appendChild(headerUl);
headerUl.appendChild(headerliPageHome);
headerUl.appendChild(headerliTeachers);
headerUl.appendChild(headerliAccount);

headerliPageHome.appendChild(headeraPageHome);
headerliTeachers.appendChild(headeraTeachers);
headerliAccount.appendChild(headeraAccount);

headerContainer.appendChild(headerContainerImg);

document.body.appendChild(header);

//////////////End Header///////////////////////
////////////////////Start pay page//////////////////////

let order = document.createElement("div");
order.className = "order";

// order container
let orderContainer = document.createElement("div");
orderContainer.className = "container";
orderContainer.style.cssText = `
background-color: var(--blueWithWhite);
    box-shadow: var(--shadow);
    border-radius: var(--radiusForContainer);
    padding: 30px;
    margin-top: 200px;
    height: 600px;
    display: flex;
    width: 600px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

// order container  head
let orderContainerHead = document.createElement("div");
orderContainerHead.className = "head";
orderContainerHead.style.cssText = `
display: flex;
justify-content:space-between;
align-items: center;
width: 400px;
font-size: 22px;
`;

// order container  head material
let orderContainerHeadMaterial = document.createElement("div");
orderContainerHeadMaterial.className = "material";
orderContainerHeadMaterial.style.cssText = `
text-align: center;

`;

// order container  head material h4 ar
let orderContainerHeadMaterialAr = document.createElement("div");
orderContainerHeadMaterialAr.innerHTML = "الرياضيات";


// order container  head material h4 en
let orderContainerHeadMaterialEn = document.createElement("div");
orderContainerHeadMaterialEn.innerHTML = "Math";


// order container  head img
let orderContainerHeadImg = document.createElement("img");
orderContainerHeadImg.src = "images/profile.png";
orderContainerHeadImg.style.cssText = `
width: 100px;
    height: 100px;
`;


// order container  center
let orderContainerCenter = document.createElement("div");
orderContainerCenter.className = "center";
orderContainerCenter.style.cssText = `
width: 400px;
    font-size: 22px;
`;

// order container  center span
let orderContainerCenterSpan = document.createElement("span");
orderContainerCenterSpan.innerHTML = "الاستاذ : ";
orderContainerCenterSpan.style.cssText = `
color: var(--blue-dark-color);
font-weight: bold;
`;


// order container  center teacher-name
let orderContainerCenterTeacherName = document.createElement("span");
orderContainerCenterTeacherName.className = "teacher-name";
orderContainerCenterTeacherName.innerHTML = "جمال علي";
orderContainerCenterTeacherName.style.cssText = `
color: var(--black-color);

`;


// order container  details
let orderContainerDetails = document.createElement("div");
orderContainerDetails.className = "details";
orderContainerDetails.style.cssText = `
width: 400px;
font-size: 22px;
`;


// order container  details h4
let orderContainerDetailsH4 = document.createElement("h4");
orderContainerDetailsH4.innerHTML = "نبذة عن الاستاذ : ";
orderContainerDetailsH4.style.cssText = `
color: var(--blue-dark-color);

`;


// order container  details p
let orderContainerDetailsP = document.createElement("p");
orderContainerDetailsP.innerHTML = "انا المدرس محمد علي تخصصي رياضيات ماخذ شهادة في التدريس واستطيع ان ادرس طلاب الابتدائي و المتوسط والثانوي ";
orderContainerDetailsP.style.cssText = `
font-weight: bold;
    font-size: 18px;
`;



// order container  button

let orderContainerBtn = document.createElement("button");
orderContainerBtn.innerHTML = "التواصل مع المدرس";
orderContainerBtn.style.cssText = `
border: none;
outline: none;
margin-top: 20px;
background-color: var(--blue-light-color);
height: 40px;
border-radius: var(--radiusInput);
cursor: pointer;
transition: 0.2s;
font-weight: bold;
font-size: 18px;
padding: 0 50px;
`;

orderContainerBtn.addEventListener("mouseenter",()=>{
    orderContainerBtn.style.cssText =`
    border: none;
    outline: none;
    margin-top: 20px;
    background-color: #38a8ca;
    height: 40px;
    border-radius: var(--radiusInput);
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    font-size: 18px;
    padding: 0 50px;
    `;
});
orderContainerBtn.addEventListener("mouseleave",()=>{
    orderContainerBtn.style.cssText =`
    border: none;
    outline: none;
    margin-top: 20px;
    background-color: var(--blue-light-color);
    padding: 0 50px;
    height: 40px;
    border-radius: var(--radiusInput);
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    font-size: 18px;
    `;
});



order.appendChild(orderContainer);



orderContainer.appendChild(orderContainerHead);
orderContainerHead.appendChild(orderContainerHeadMaterial);
orderContainerHeadMaterial.appendChild(orderContainerHeadMaterialAr);
orderContainerHeadMaterial.appendChild(orderContainerHeadMaterialEn);
orderContainerHead.appendChild(orderContainerHeadImg);
orderContainer.appendChild(orderContainerCenter);
orderContainerCenter.appendChild(orderContainerCenterSpan);
orderContainerCenter.appendChild(orderContainerCenterTeacherName);
orderContainer.appendChild(orderContainerDetails);
orderContainerDetails.appendChild(orderContainerDetailsH4);
orderContainerDetails.appendChild(orderContainerDetailsP);
orderContainer.appendChild(orderContainerBtn);

document.body.appendChild(order);

////////////////////End pay page//////////////////////
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

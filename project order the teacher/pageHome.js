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
//////////////Satrt Landing///////////////////////
let landing = document.createElement("div");
landing.className = "landing";


// landing container
let landginContainer = document.createElement("div");
landginContainer.className = "container";
landginContainer.style.cssText = `
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
`;

// landing container img 
let landingContainerImg = document.createElement("img");
landingContainerImg.src = "images/teacher.png";
landingContainerImg.style.cssText = `
width: 350px;

`;

// landing container p 
let landingContainerP = document.createElement("p");
landingContainerP.innerHTML = "منصة لأختيار مدرس خصوصي يساعدك في فهم المواد التي تحتاجها";
landingContainerP.style.cssText = `
font-size: 30px;
text-align: center;
font-weight: bold;
`;

landing.appendChild(landginContainer);
landginContainer.appendChild(landingContainerImg);
landginContainer.appendChild(landingContainerP);

document.body.appendChild(landing);

//////////////End Landing///////////////////////
//////////////Start teachers///////////////////////

let teachers = document.createElement("div");
teachers.className = "teachers";

// teachers container
let teachersContainer = document.createElement("div");
teachersContainer.className = "container";
teachersContainer.style.cssText = `
margin-top: 200px;

`;

// teachers container h3
let teachersContainerh3 = document.createElement("h3");
teachersContainerh3.innerHTML = "المدرسين : ";
teachersContainerh3.style.cssText = `
border-bottom: 3px solid var(--black-color);
display: inline-block;
font-weight: bold;
font-size: 25px;
`;

// teachers container container-content

let teachersContainerContent = document.createElement("div");
teachersContainerContent.className = "container-content";
teachersContainerContent.style.cssText = `
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-gap: 30px;
margin-top: 50px;
`;

////////////////////((((1)))//////////////

// teachers container container-content box
let teachersContainerContentBox1 = document.createElement("div");
teachersContainerContentBox1.className = "box";
teachersContainerContentBox1.style.cssText = `
background-color: var(--blueWithWhite);
border-radius: var(--radiusForContainer);
box-shadow: var(--shadow);
padding: 20px;
height: 250px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`;

// teachers container container-content box head
let teachersContainerContentBox1Head = document.createElement("div");
teachersContainerContentBox1Head.className = "head";
teachersContainerContentBox1Head.style.cssText = `
display: flex;
justify-content: space-between;
width: 270px;
`;
// teachers container container-content box head material
let teachersContainerContentBox1HeadMaterial = document.createElement("div");
teachersContainerContentBox1HeadMaterial.className = "material";
teachersContainerContentBox1HeadMaterial.style.cssText = `
text-align: center;
    font-size: 18px;
    font-weight: bold;
`;
// teachers container container-content box head material h4 ar
let teachersContainerContentBox1HeadMaterialAr = document.createElement("div");
teachersContainerContentBox1HeadMaterialAr.innerHTML = "الرياضيات";

// teachers container container-content box head material h4 en
let teachersContainerContentBox1HeadMaterialEn = document.createElement("div");
teachersContainerContentBox1HeadMaterialEn.innerHTML = "Math";

// teachers container container-content box head img
let teachersContainerContentBox1HeadImg = document.createElement("img");
teachersContainerContentBox1HeadImg.src = "images/profile.png";


// teachers container container-content box center
let teachersContainerContentBox1Center = document.createElement("div");
teachersContainerContentBox1Center.className = "center";
teachersContainerContentBox1Center.style.cssText = `
width: 270px;

`;


// teachers container container-content box center span
let teachersContainerContentBox1CenterSpan = document.createElement("span");
teachersContainerContentBox1CenterSpan.innerHTML = "الاستاذ : ";
teachersContainerContentBox1CenterSpan.style.cssText = `
color: var(--blue-dark-color);
    font-weight: bold;
`;

// teachers container container-content box center teacher-name
let teachersContainerContentBox1CenterTeacherName = document.createElement("span");
teachersContainerContentBox1CenterTeacherName.className = "teacher-name";
teachersContainerContentBox1CenterTeacherName.innerHTML = "جمال علي";
teachersContainerContentBox1CenterTeacherName.style.cssText = `
color: var(--black-color);

`;

// teachers container container-content box button

let teachersContainerContentBox1Btn = document.createElement("button");
teachersContainerContentBox1Btn.innerHTML = "إختيار";
teachersContainerContentBox1Btn.style.cssText = `
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
teachersContainerContentBox1Btn.addEventListener("mouseenter",()=>{
    teachersContainerContentBox1Btn.style.cssText =`
    border: none;
    outline: none;
    margin-top: 20px;
    background-color: #38a8ca;
    width: 200px;
    height: 40px;
    border-radius: var(--radiusInput);
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    font-size: 18px;
    `;
});
teachersContainerContentBox1Btn.addEventListener("mouseleave",()=>{
    teachersContainerContentBox1Btn.style.cssText =`
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


////////////////////((((2)))//////////////


// teachers container container-content box
let teachersContainerContentBox2 = document.createElement("div");
teachersContainerContentBox2.className = "box";
teachersContainerContentBox2.style.cssText = `
background-color: var(--blueWithWhite);
border-radius: var(--radiusForContainer);
box-shadow: var(--shadow);
padding: 20px;
height: 250px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`;

// teachers container container-content box head
let teachersContainerContentBox2Head = document.createElement("div");
teachersContainerContentBox2Head.className = "head";
teachersContainerContentBox2Head.style.cssText = `
display: flex;
justify-content: space-between;
width: 270px;
`;


// teachers container container-content box head material
let teachersContainerContentBox2HeadMaterial = document.createElement("div");
teachersContainerContentBox2HeadMaterial.className = "material";
teachersContainerContentBox2HeadMaterial.style.cssText = `
text-align: center;
    font-size: 18px;
    font-weight: bold;
`;


// teachers container container-content box head material h4 ar
let teachersContainerContentBox2HeadMaterialAr = document.createElement("div");
teachersContainerContentBox2HeadMaterialAr.innerHTML = "الرياضيات";


// teachers container container-content box head material h4 en
let teachersContainerContentBox2HeadMaterialEn = document.createElement("div");
teachersContainerContentBox2HeadMaterialEn.innerHTML = "Math";


// teachers container container-content box head img
let teachersContainerContentBox2HeadImg = document.createElement("img");
teachersContainerContentBox2HeadImg.src = "images/profile.png";



// teachers container container-content box center
let teachersContainerContentBox2Center = document.createElement("div");
teachersContainerContentBox2Center.className = "center";
teachersContainerContentBox2Center.style.cssText = `
width: 270px;

`;
// teachers container container-content box center span
let teachersContainerContentBox2CenterSpan = document.createElement("span");
teachersContainerContentBox2CenterSpan.innerHTML = "الاستاذ : ";
teachersContainerContentBox2CenterSpan.style.cssText = `
color: var(--blue-dark-color);
    font-weight: bold;
`;

// teachers container container-content box center teacher-name
let teachersContainerContentBox2CenterTeacherName = document.createElement("span");
teachersContainerContentBox2CenterTeacherName.className = "teacher-name";
teachersContainerContentBox2CenterTeacherName.innerHTML = "محمد خالد";
teachersContainerContentBox2CenterTeacherName.style.cssText = `
color: var(--black-color);
`;


// teachers container container-content box button

let teachersContainerContentBox2Btn = document.createElement("button");
teachersContainerContentBox2Btn.innerHTML = "إختيار";
teachersContainerContentBox2Btn.style.cssText = `
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

teachersContainerContentBox2Btn.addEventListener("mouseenter",()=>{
    teachersContainerContentBox2Btn.style.cssText =`
    border: none;
    outline: none;
    margin-top: 20px;
    background-color: #38a8ca;
    width: 200px;
    height: 40px;
    border-radius: var(--radiusInput);
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    font-size: 18px;
    `;
});
teachersContainerContentBox2Btn.addEventListener("mouseleave",()=>{
    teachersContainerContentBox2Btn.style.cssText =`
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

////////////////////((((3)))//////////////


// teachers container container-content box
let teachersContainerContentBox3 = document.createElement("div");
teachersContainerContentBox3.className = "box";
teachersContainerContentBox3.style.cssText = `
background-color: var(--blueWithWhite);
border-radius: var(--radiusForContainer);
box-shadow: var(--shadow);
padding: 20px;
height: 250px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`;

// teachers container container-content box head
let teachersContainerContentBox3Head = document.createElement("div");
teachersContainerContentBox3Head.className = "head";
teachersContainerContentBox3Head.style.cssText = `
display: flex;
justify-content: space-between;
width: 270px;
`;


// teachers container container-content box head material
let teachersContainerContentBox3HeadMaterial = document.createElement("div");
teachersContainerContentBox3HeadMaterial.className = "material";
teachersContainerContentBox3HeadMaterial.style.cssText = `
text-align: center;
    font-size: 18px;
    font-weight: bold;
`;


// teachers container container-content box head material h4 ar
let teachersContainerContentBox3HeadMaterialAr = document.createElement("div");
teachersContainerContentBox3HeadMaterialAr.innerHTML = "الرياضيات";


// teachers container container-content box head material h4 en
let teachersContainerContentBox3HeadMaterialEn = document.createElement("div");
teachersContainerContentBox3HeadMaterialEn.innerHTML = "Math";

// teachers container container-content box head img
let teachersContainerContentBox3HeadImg = document.createElement("img");
teachersContainerContentBox3HeadImg.src = "images/profile.png";

// teachers container container-content box center
let teachersContainerContentBox3Center = document.createElement("div");
teachersContainerContentBox3Center.className = "center";
teachersContainerContentBox3Center.style.cssText = `
width: 270px;

`;
// teachers container container-content box center span
let teachersContainerContentBox3CenterSpan = document.createElement("span");
teachersContainerContentBox3CenterSpan.innerHTML = "الاستاذ : ";
teachersContainerContentBox3CenterSpan.style.cssText = `
color: var(--blue-dark-color);
    font-weight: bold;
`;

// teachers container container-content box center teacher-name
let teachersContainerContentBox3CenterTeacherName = document.createElement("span");
teachersContainerContentBox3CenterTeacherName.className = "teacher-name";
teachersContainerContentBox3CenterTeacherName.innerHTML = "سعد عبدالرحمن";
teachersContainerContentBox3CenterTeacherName.style.cssText = `
color: var(--black-color);

`;

// teachers container container-content box button

let teachersContainerContentBox3Btn = document.createElement("button");
teachersContainerContentBox3Btn.innerHTML = "إختيار";
teachersContainerContentBox3Btn.style.cssText = `
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

teachersContainerContentBox3Btn.addEventListener("mouseenter",()=>{
    teachersContainerContentBox3Btn.style.cssText =`
    border: none;
    outline: none;
    margin-top: 20px;
    background-color: #38a8ca;
    width: 200px;
    height: 40px;
    border-radius: var(--radiusInput);
    cursor: pointer;
    transition: 0.2s;
    font-weight: bold;
    font-size: 18px;
    `;
});
teachersContainerContentBox3Btn.addEventListener("mouseleave",()=>{
    teachersContainerContentBox3Btn.style.cssText =`
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


teachers.appendChild(teachersContainer);
teachersContainer.appendChild(teachersContainerh3);
teachersContainer.appendChild(teachersContainerContent);


//////////((((1))))

teachersContainerContent.appendChild(teachersContainerContentBox1);
teachersContainerContentBox1.appendChild(teachersContainerContentBox1Head);
teachersContainerContentBox1Head.appendChild(teachersContainerContentBox1HeadMaterial);
teachersContainerContentBox1HeadMaterial.appendChild(teachersContainerContentBox1HeadMaterialAr);
teachersContainerContentBox1HeadMaterial.appendChild(teachersContainerContentBox1HeadMaterialEn);
teachersContainerContentBox1Head.appendChild(teachersContainerContentBox1HeadImg);
teachersContainerContentBox1.appendChild(teachersContainerContentBox1Center);
teachersContainerContentBox1Center.appendChild(teachersContainerContentBox1CenterSpan);
teachersContainerContentBox1Center.appendChild(teachersContainerContentBox1CenterTeacherName);
teachersContainerContentBox1.appendChild(teachersContainerContentBox1Btn);

//////////((((2))))

teachersContainerContent.appendChild(teachersContainerContentBox2);
teachersContainerContentBox2.appendChild(teachersContainerContentBox2Head);
teachersContainerContentBox2Head.appendChild(teachersContainerContentBox2HeadMaterial);
teachersContainerContentBox2HeadMaterial.appendChild(teachersContainerContentBox2HeadMaterialAr);
teachersContainerContentBox2HeadMaterial.appendChild(teachersContainerContentBox2HeadMaterialEn);
teachersContainerContentBox2Head.appendChild(teachersContainerContentBox2HeadImg);
teachersContainerContentBox2.appendChild(teachersContainerContentBox2Center);
teachersContainerContentBox2Center.appendChild(teachersContainerContentBox2CenterSpan);
teachersContainerContentBox2Center.appendChild(teachersContainerContentBox2CenterTeacherName);
teachersContainerContentBox2.appendChild(teachersContainerContentBox2Btn);


//////////((((3))))

teachersContainerContent.appendChild(teachersContainerContentBox3);
teachersContainerContentBox3.appendChild(teachersContainerContentBox3Head);
teachersContainerContentBox3Head.appendChild(teachersContainerContentBox3HeadMaterial);
teachersContainerContentBox3HeadMaterial.appendChild(teachersContainerContentBox3HeadMaterialAr);
teachersContainerContentBox3HeadMaterial.appendChild(teachersContainerContentBox3HeadMaterialEn);
teachersContainerContentBox3Head.appendChild(teachersContainerContentBox3HeadImg);
teachersContainerContentBox3.appendChild(teachersContainerContentBox3Center);
teachersContainerContentBox3Center.appendChild(teachersContainerContentBox3CenterSpan);
teachersContainerContentBox3Center.appendChild(teachersContainerContentBox3CenterTeacherName);
teachersContainerContentBox3.appendChild(teachersContainerContentBox3Btn);

document.body.appendChild(teachers);



//////////////End teachers///////////////////////
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

// Navigation Bar
let hamburger = document.getElementById('hamburger');
let navBar = document.getElementById('navBar');
let title = document.getElementById('title');
let icon = document.getElementById('icon');

icon.onclick = ()=>{
    window.location.href = 'index.html';
}

hamburger.onclick= ()=>{
    if(navBar.style.display == 'none'){
        navBar.style.display = 'block';
        title.style.display = 'none';
        icon.style.display = 'none';
        hamburger.style.marginLeft = '0';
        navBar.style.marginLeft = '10px';
        hamburger.style.marginTop = '10px';

    } else{
        navBar.style.display = 'none'
        title.style.display = 'block';
        icon.style.display = 'block';
        hamburger.style.marginLeft = '50px';
        hamburger.style.marginTop = '0';
    }
}

// Index Page

let aboutDiv = document.getElementById('aboutDiv');
let educationDiv = document.getElementById('educationDiv');
let experienceDiv = document.getElementById('experienceDiv');
let futureDiv = document.getElementById('futureDiv');
let contactDiv = document.getElementById('contactDiv');

if(aboutDiv){
    aboutDiv.addEventListener("click", ()=>{
        window.location.href = 'about.html';
    })
}

if(educationDiv){
    educationDiv.onclick = ()=>{
        window.location.href = 'education.html';
    }
}

if(experienceDiv){
    experienceDiv.onclick = ()=>{
        window.location.href = 'experience.html';
    }
}

if(futureDiv){
    futureDiv.onclick = ()=>{
        window.location.href = 'future.html';
    }
}

if(contactDiv){
    contactDiv.onclick = ()=>{
        window.location.href = 'contact.html';
    }
}

// About Page

let whoAmIContainer = document.getElementById('whoAmIContainer');
let whoAmI = document.getElementById('whoAmI');
let myCountryContainer = document.getElementById('myCountryContainer');
let myCountry = document.getElementById('myCountry');

if(whoAmIContainer){
    whoAmIContainer.onclick = ()=>{
        if(whoAmI.style.display == 'none'){
            whoAmI.style.display = 'block';
        } else{
            whoAmI.style.display = 'none';

        }
        
    }
}

if(myCountryContainer){
    myCountryContainer.onclick = ()=>{
        if(myCountry.style.display == 'none'){
            myCountry.style.display = 'block';
        }else{
            myCountry.style.display = 'none';
        }
        
    }
}

let picture = document.getElementById('picture');
let southamerica = document.getElementById('southamerica');
let mountain = document.getElementById('mountain');
let beach = document.getElementById('beach');
let weather = document.getElementById('weather');
let baseball = document.getElementById('baseball');
let miss = document.getElementById('miss');

if(southamerica){
    southamerica.onmouseover = ()=>{
        picture.style.background = "url('img/mapsouthamerica.gif') no-repeat center";
        picture.style.backgroundSize= '300px 300px';
    }
}

if(mountain){
    mountain.onmouseover = ()=>{
        picture.style.background = "url('img/picobolivar.jpg') no-repeat center";
        picture.style.backgroundSize= '300px 300px';
    }
}

if(beach){
    beach.onmouseover = ()=>{
        picture.style.background = "url('img/losroques.jpg') no-repeat center";
        picture.style.backgroundSize= '300px 300px';
    }
}

if(weather){
    weather.onmouseover = ()=>{
        picture.style.background = "url('img/weather.jpg') no-repeat center";
        picture.style.backgroundSize= '300px 300px';
    }
}

if(miss){
    miss.onmouseover = ()=>{
        picture.style.background = "url('img/missvenezuela.jpg') no-repeat center";
        picture.style.backgroundSize= '300px 300px';
    }
}

if(baseball){
    baseball.onmouseover = ()=>{
        picture.style.background = "url('img/baseball.jpg') no-repeat center";
        picture.style.backgroundSize= '300px 300px';
    }
}

let myCityContainer = document.getElementById('myCityContainer');
let myCity = document.getElementById('myCity');
let myHobbiesContainer = document.getElementById('myHobbiesContainer');
let myHobbies = document.getElementById('myHobbies');

if(myCityContainer){
    myCityContainer.onclick = ()=>{
        if(myCity.style.display == 'none'){
            myCity.style.display = 'block';
        } else{
            myCity.style.display = 'none'
        }
    }
}

if(myHobbiesContainer){
    myHobbiesContainer.onclick = ()=>{
        if(myHobbies.style.display == 'none'){
            myHobbies.style.display = 'block';
        } else{
            myHobbies.style.display = 'none'
        }
    }
}




// Education Page

let descriptionUG = document.getElementById('descriptionUG');
let descriptionPG1 = document.getElementById('descriptionPG1');
let descriptionPG2 = document.getElementById('descriptionPG2');
let coursesDescription = document.getElementById('coursesDescription');
let skillsDescription = document.getElementById('skillsDescription');

let headingUG = document.getElementById('headingUG');
let headingPG = document.getElementById('headingPG');
let courses = document.getElementById('courses');
let skills = document.getElementById('skills');


if(headingUG){
    headingUG.onclick = ()=>{
        if(descriptionUG.style.display == 'none'){
            descriptionUG.style.display = 'flex';
            descriptionUG.style.justifyContent = 'flex-start';
        } else{
            descriptionUG.style.display = 'none'
        }
    }
}

if(headingPG){
    headingPG.onclick = ()=>{
        if(descriptionPG1.style.display == 'none' && descriptionPG2.style.display == 'none'){
            descriptionPG1.style.display = 'flex';
            descriptionPG1.style.justifyContent = 'flex-start';
            descriptionPG2.style.display = 'flex';
            descriptionPG2.style.justifyContent = 'flex-start';
    
        } else{
            descriptionPG1.style.display = 'none';
            descriptionPG2.style.display = 'none';
        }
    }
}

if(courses){
    courses.onclick = ()=>{
        if(coursesDescription.style.display == 'none'){
            coursesDescription.style.display = 'block';
    
        } else{
            coursesDescription.style.display = 'none'
        }
    }
}

if(skills){
    skills.onclick = ()=>{
        if(skillsDescription.style.display == 'none'){
            skillsDescription.style.display = 'block';
    
        } else{
            skillsDescription.style.display = 'none'
        }
    }
}

// Experience Page

let softwareSpecialistContainer = document.getElementById('softwareSpecialistContainer');
let softwareSpecialist = document.getElementById('softwareSpecialist');
let lecturerAssistantContainer = document.getElementById('lecturerAssistantContainer');
let lecturerAssistant = document.getElementById('lecturerAssistant');
let internContainer = document.getElementById('internContainer');
let intern = document.getElementById('intern');
let projectsContainer = document.getElementById('projectsContainer');
let projects = document.getElementById('projects');

if(softwareSpecialistContainer){
    softwareSpecialistContainer.onclick = ()=>{
        if(softwareSpecialist.style.display == 'none'){
            softwareSpecialist.style.display = 'block';
    
        } else{
            softwareSpecialist.style.display = 'none'
        }
    }
}

if(lecturerAssistantContainer){
    lecturerAssistantContainer.onclick = ()=>{
        if(lecturerAssistant.style.display == 'none'){
            lecturerAssistant.style.display = 'block';
    
        } else{
            lecturerAssistant.style.display = 'none'
        }
    }
}

if(internContainer){
    internContainer.onclick = ()=>{
        if(intern.style.display == 'none'){
            intern.style.display = 'block';
    
        } else{
            intern.style.display = 'none'
        }
    }
}

if(projectsContainer){
    projectsContainer.onclick = ()=>{
        if(projects.style.display == 'none'){
            projects.style.display = 'block';
    
        } else{
            projects.style.display = 'none'
        }
    }
}








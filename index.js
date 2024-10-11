const folders = Array.from(document.getElementsByClassName('folder'));
const folderTabs = Array.from(document.getElementsByClassName('folderNotch'));
const folderBodies = Array.from(document.getElementsByClassName('folderBody'));
folders.shift(); folderTabs.shift(); folderBodies.shift();

let currentFolderShowedIndex = null;
const switches = [false, false, false, false, false];

function parseRGB(rgbString) {
    const rgb = rgbString.match(/\d+/g);
    return [parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2])];
}

function brightenColor(rgbString, percent) {
    const [r, g, b] = parseRGB(rgbString);
  
    const newR = Math.min(255, r + Math.round(255 * (percent / 100)));
    const newG = Math.min(255, g + Math.round(255 * (percent / 100)));
    const newB = Math.min(255, b + Math.round(255 * (percent / 100)));
  
    return `rgb(${newR}, ${newG}, ${newB})`;
}

for (let tabIndex = 0; tabIndex < folderTabs.length; tabIndex++){
    folders[tabIndex].style.transition = 'transform 0.5s, border-top 0.3s, background-color 0.1s';

    const originalColor = window.getComputedStyle(folderBodies[tabIndex]).backgroundColor;
    folderTabs[tabIndex].addEventListener("mouseenter", () => {
        folderTabs[tabIndex].style.borderTop = "3px solid black";
        folderTabs[tabIndex].style.borderLeft = "3px solid black";
        folderTabs[tabIndex].style.borderRight = "3px solid black";
        folderTabs[tabIndex].style.backgroundColor = brightenColor(originalColor, 20);
        folderBodies[tabIndex].style.backgroundColor = brightenColor(originalColor, 20);
    })

    folderTabs[tabIndex].addEventListener("mouseleave", () => {
        folderTabs[tabIndex].style.borderTop = "2px solid black";
        folderTabs[tabIndex].style.borderLeft = "2px solid black";
        folderTabs[tabIndex].style.borderRight = "2px solid black";
        folderTabs[tabIndex].style.backgroundColor = originalColor;
        folderBodies[tabIndex].style.backgroundColor = originalColor;
    })

    folderTabs[tabIndex].addEventListener('click', () => {
        if (switches[tabIndex] === false){
            currentFolderShowedIndex = tabIndex
            folders[currentFolderShowedIndex].style.transform = 'translateY(-70vh)';
            switches[currentFolderShowedIndex] = true;
        } else if(switches[tabIndex] === true){
            if (currentFolderShowedIndex === tabIndex){
                folders[currentFolderShowedIndex].style.transform = 'translateY(0px)';
                switches[currentFolderShowedIndex] = false;
                currentFolderShowedIndex = tabIndex + 1
            } else {
                currentFolderShowedIndex = tabIndex
            }
        }
        
        for (let i = 0; i < currentFolderShowedIndex; i++) {
            if (switches[i] === true){
                folders[i].style.transform = 'translateY(0px)';
                switches[i] = false
            }
        }
        
        for (let i = currentFolderShowedIndex + 1; i < folderTabs.length; i++) {
            if (switches[i] === false){
                folders[i].style.transform = 'translateY(-70vh)';
                switches[i] = true
            }
        }
    })
}


const menuToggle = document.getElementById('menuToggle');
const navBar = document.getElementById('navBar')
menuToggle.addEventListener('click', () => {
    if (navBar.style.display === 'flex'){
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'flex';
    }
})


const btnVolunteerAboutContainer = document.getElementById('btnVolunteerAboutContainer');
const iButtonInfoContainer = document.getElementById('iButtonInfoContainer');

btnVolunteerAboutContainer.addEventListener('mouseenter', function() {
    iButtonInfoContainer.style.display = 'flex'
});

btnVolunteerAboutContainer.addEventListener('mouseleave', function() {
    iButtonInfoContainer.style.display = 'none'
});

window.onscroll = function() {
    const navBar = document.getElementById('navBar');

    if (window.scrollY > 100) {
        navBar.classList.add('shrink');
    } else {
        navBar.classList.remove('shrink');
    }

    const latestActivitiesBox = document.getElementById('latestActivitiesBox')

    if (window.scrollY > 300) {
        latestActivitiesBox.classList.add('show');
    } else {
        latestActivitiesBox.classList.remove('show');
    }

    const goalsCards = document.getElementsByClassName('goalsCard');
    console.log(goalsCards.length);
    

    let initialScroll = 2500;
    for (const goalCard of goalsCards){
        if (window.scrollY > initialScroll) {
            goalCard.classList.add('scaleUp');
        } else {
            goalCard.classList.remove('scaleUp');
        }
        initialScroll += 200    
    }

    const partnershipsRow1 = document.getElementById('partnershipsRow1');
    const partnershipsRow3 = document.getElementById('partnershipsRow3');
    const pyramidGroup1 = document.getElementById('pyramidGroup1');
    const pyramidGroup2 = document.getElementById('pyramidGroup2');
    const ptHeading = document.getElementById('ptHeading');

    if (window.scrollY > 5500) {
        partnershipsRow1.classList.add('spread');
        partnershipsRow3.classList.add('spread');
        pyramidGroup1.classList.add('spread');
        pyramidGroup2.classList.add('spread');
        ptHeading.classList.add('spread');
    } else {
        partnershipsRow1.classList.remove('spread');
        partnershipsRow3.classList.remove('spread');
        pyramidGroup1.classList.remove('spread');
        pyramidGroup2.classList.remove('spread');
        ptHeading.classList.remove('spread');
    }
};
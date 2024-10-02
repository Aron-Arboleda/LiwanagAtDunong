const folders = Array.from(document.getElementsByClassName('folder'));
const folderTabs = Array.from(document.getElementsByClassName('folderNotch'));
folders.shift(); folderTabs.shift(); 

let currentFolderShowedIndex = null;
const switches = [false, false, false, false, false];

for (let tabIndex = 0; tabIndex < folderTabs.length; tabIndex++){
    folders[tabIndex].style.transition = 'transform 0.5s ease-in';

    folderTabs[tabIndex].addEventListener('click', () => {
        if (switches[tabIndex] === false){
            currentFolderShowedIndex = tabIndex
            folders[currentFolderShowedIndex].style.transform = 'translateY(-460px)';
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
                folders[i].style.transform = 'translateY(-460px)';
                switches[i] = true
            }
        }
    })
}
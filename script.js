// no more openPage(), i fixed the bug :D

// on script load
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
themeStylesheet.setAttribute('href', isDarkMode ? 'dark.css' : 'light.css');

function toggleElementVisibility(imageIdent) {
    var image = document.getElementById(imageIdent);
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}

function toggleTheme() {
    const themeStylesheet = document.getElementById('themeStylesheet');
    const currentTheme = themeStylesheet.getAttribute('href');
    const darkTheme = 'dark.css';
    const lightTheme = 'light.css';

    // Check the current theme and toggle to the opposite
    if (currentTheme === darkTheme) {
        themeStylesheet.setAttribute('href', lightTheme);
        //document.getElementById("themeToggle").setAttribute("src", "https://cdn3.iconfinder.com/data/icons/camera-scene-mode-glyph-16px/16/night_mode_moon_scene_dark-512.png");
        console.log("i highly respect people who use light mode, especially at night, that takes some dedication to do. i do not have that dedication.")
    } else {
        themeStylesheet.setAttribute('href', darkTheme);
        //document.getElementById("themeToggle").setAttribute("src", "https://cdn1.iconfinder.com/data/icons/mix-ui/24/Sun_Brightness_Day_Light_Weather_Mode-512.png");
    }
}

// what was the point of uinserttag()? was it a bug fix for something i dont understand? either way this seems to work just as well, if not better
function insertTag(tag) {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = searchInput.value + tag;
    searchInput.dispatchEvent(new Event('input'));
}

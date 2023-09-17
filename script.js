// no more openPage(), i fixed the bug :D

window.onload = function() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeStylesheet.setAttribute('href', isDarkMode ? 'dark.css' : 'light.css');
}

// is this function overbuilt? yes. am i going to rewrite it? ive already done that... twice
function toggleTheme(toggleTo = 0) {
    const themeStylesheet = document.getElementById('themeStylesheet');
    const currentTheme = themeStylesheet.getAttribute('href');
    const darkTheme = 'dark.css';
    const lightTheme = 'light.css';

    if (toggleTo == 0) {
        // toggle to the opposite
        if (currentTheme === darkTheme) {
            themeStylesheet.setAttribute('href', lightTheme);
        } else {
            themeStylesheet.setAttribute('href', darkTheme);
        }
    } else if (toggleTo == "dark" || toggleTo == 'light') {
        themeStylesheet.setAttribute('href', toggleTo + '.css');
        console.log("using "+toggleTo+".css")
    } else if (toggleTo == "system") {
        systemTheme();
        console.log("using system theme");
    } else {
        console.error("couldn't change theme | given value \"" + toggleTo + "\" not accepted.");
    }
}

function checkCheckboxes(systemValue, darkValue, lightValue) {
    document.getElementById('systemTheme').checked = systemValue;
    document.getElementById('darkTheme').checked = darkValue;
    document.getElementById('lightTheme').checked = lightValue;
}

function toggleElementVisibility(imageIdent) {
    var image = document.getElementById(imageIdent);
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}

function insertTag(tag) {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = searchInput.value + tag;
    searchInput.dispatchEvent(new Event('input'));
}

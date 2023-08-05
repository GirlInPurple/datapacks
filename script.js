function openPage(evt, name) {
    // NOTE SO SELF. make this work
    var newLocation = "/finalrepublic/" + name + ".html";
    // Prevents Reload of page when spamming the same button.
    if  ( !location.href.endsWith(newLocation) ) {
        location.href = newLocation;
    }
}

function toggleImageVisibility(imageNumber) {
    var image = document.getElementById('image' + imageNumber);
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
    } else {
        themeStylesheet.setAttribute('href', darkTheme);
    }
}

function insertTag(tag) {
    var searchInput = document.getElementById("searchInput");
    searchInput.value = tag;
  }
  
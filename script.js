function openPage(evt, name) {
    // NOTE SO SELF. make this work
    var newLocation = "/" + name + ".html";
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
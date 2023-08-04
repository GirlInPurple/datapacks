function openPage(evt, name) {
    // NOTE SO SELF. make this work
    var newLocation = "/finalrepublic/" + name + ".html";
    // Prevents Reload of page when spamming the same button.
    if  ( !location.href.endsWith(newLocation) ) {
        location.href = newLocation;
    }
}

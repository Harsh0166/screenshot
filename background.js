console.log("Background service worker started.");

chrome.contextMenus.create({
    id : "takeScreenShot",
    title : "ScreenShot",
    contexts : ["all"],
});

chrome.contextMenus.onClicked.addListener((info,tab) =>{
    if(info.menuItemId === "takeScreenShot")
    console.log("clicked");
})

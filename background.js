console.log("Background service worker started.");

chrome.contextMenus.create({
    id : "takeScreenShot",
    title : "ScreenShot",
    contexts : ["all"],
});

chrome.contextMenus.onClicked.addListener((info,tab) =>{
    if(info.menuItemId === "takeScreenShot"){
        chrome.tabs.captureVisibleTab({format: "png"},(screenshotUrl)=>{
            chrome.downloads.download({
                url : screenshotUrl,
                filename : "screenshots/screenshots.png"
            })
            console.log("screenshot taken");}
        )
        
    }


})

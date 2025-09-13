console.log("Background service worker started.");

chrome.contextMenus.create({
    id: "takeScreenShot",
    title: "ScreenShot",
    contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(function(info) { 
    /* info : It contains details about the context menu click, such as:
    menuItemId → the ID of the menu item clicked ("takeScreenShot" in your case)
    pageUrl → the URL of the page wher the click happened
    selectionText → any selected text, if applicable*/

    if (info.menuItemId === "takeScreenShot") {
        chrome.tabs.captureVisibleTab({ format: "png" }, function(screenshotUrl) {
            /* screenshotUrl : It is provided by chrome.tabs.captureVisibleTab.
            Chrome generates the screenshot and passes a data URL (a base64-encoded image URL) to this parameter.*/

            chrome.downloads.download({
                url: screenshotUrl,
                filename: "screenshots/screenshots.png"
            });
            console.log("screenshot taken");
        });
    }
});

chrome.contextMenus.onClicked.addListener(genericOnClick);

function genericOnClick(info) {
    console.log("dictionary lookup: ", info)
}

chrome.contextMenus.create(
    {
    title: 'dictionary',
    contexts: ['selection'],
    id: 'menu_button'
    }
)
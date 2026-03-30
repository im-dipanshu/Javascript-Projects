const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");
const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");

document.addEventListener("DOMContentLoaded",loadBookmarks)
addBookmarkBtn.addEventListener("click",function(){
    const name=bookmarkNameInput.value.trim()
    const URL=bookmarkUrlInput.value.trim()
    
    if (!name||!URL){
        alert("Please provide both of them!")
        return
    }else{
        if(!URL.startsWith("http://") && !URL.startsWith("https://")){
            alert("Please enter a valid url starting with http or https")
            return
        }

        addBookmarkBtn(name,URL)
        saveBookmar(name,URL)
        bookmarkNameInput.value=""
        bookmarkUrlInput.value=""
    }
})


function addBookmarks(){
    const li=document.getElementById("li")
    const link=document.getElementById("a")
    link.href=url
    link.textContent=name
    link.target="__blank"

    const removeButton=document.createElement("button")
    removeButton.textContent="Remove"

    removeButton.addEventListener("click",function(){
        bookmarkList.removeChild(li)
        removBookmarkFromStorage(name,URL)
    })

    li.appendChild(link)
    li.appendChild(removeButton)

    bookmarkList.appendChild(li)
}
function getBookmarksFromStorage(){
    const bookmarks=localStorage.getItem("bookmarks")
    return bookmarks? JSON.parse(bookmarks):[]
}
function saveBookmark(name){
    const bookmarks=getBookmarksFromStorage()
    bookmarks.push(name,url)
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
}

function loadBookmarks(){
    const bookmarks=getBookmarksFromStorage()
    bookmarks.forEach((bookmark)=>addBookmarks(bookmark.name,bookmark.URL))
}

function removBookmarkFromStorage(name,url){
    const bookmarks=getBookmarksFromStorage()
    bookmarks=bookmarks.filter((bookmark)=>bookmarks.name !== name || bookmark.Url !==URL)
}
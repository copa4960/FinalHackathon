let notes = [];
// alert(notes.join("\n"))

chrome.storage.sync.get('key', (stuff) => {
    if(stuff.key != undefined){
        for(i = 0; i < stuff.key.length; i++){
            var li = document.createElement("li");
            var text = document.createTextNode(stuff.key[i]);
            li.appendChild(text);
            document.getElementById("unordered").appendChild(li);
            notes.push(stuff.key[i]);
        }
    }
});

var post= document.getElementById("post");
post.addEventListener("click", () => newnote())

function newnote(){
    var commentBoxValue= document.getElementById("comment-box").value;
    notes.push(commentBoxValue);
    chrome.storage.sync.set({'key': notes});

    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
};

var clear= document.getElementById("clear");
clear.addEventListener("click", () => clearnotes())

function clearnotes(){
    notes=[];
    chrome.storage.sync.remove('key');
    chrome.runtime.reload();
};
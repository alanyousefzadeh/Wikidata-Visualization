//initialize home page with subject choice

window.onload = function init(){
    initPage();
};

function initPage() {
    var currentDiv = document.getElementById("mainPage");// main to div
    currentDiv.innerHTML = ""; //empty mainPage
    //initializing command div
    var commandDiv = document.createElement("div");
    commandDiv.id = "command";
    var commandText = document.createElement("h1");
    var text = document.createTextNode("Please Choose Subject");
    commandText.appendChild(text);
    commandDiv.appendChild(commandText);
    //append command div to main div
    currentDiv.appendChild(commandDiv);
    //initializing search div
    var searchDiv = document.createElement("div");
    searchDiv.id = "search";
    searchDiv.className="search-container";
    //set label
    var label = document.createElement("label");
    label.htmlFor = 'subjects';
    searchDiv.appendChild(label);
    //set select options
    var select = document.createElement("select");
    select.id = "subjects";
    select.name = "subject";
    select.style = "width:200px; height:30px;";
    searchDiv.appendChild(select);
    //set options
    var options = ["","Music","Photography","Movies","Fashion","Literature","Television","Architecture","Artworks","Sculpture","Theater","Typography","Other"];
    options.forEach(function(item){
        var option = document.createElement('option');
        option.value = item;
        option.innerText = item;
        if(item === ""){
            option.selected = "true";
            option.disabled = "disabled";
            option.innerText = "Click To Select Subject";
        }
        else if(item !== "Music"){
            option.disabled = "disabled";
        }
        select.appendChild(option);
    });
    //set button
    var button = document.createElement('input');
    button.id="btn1";
    button.type = "submit";
    button.onclick = chooseSubject;
    button.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px;";
    searchDiv.appendChild(button);
    //append command div to main div
    currentDiv.appendChild(searchDiv);

}



var subject="";
function chooseSubject(){
    var err = document.getElementById('err');
    if (err) {
        err.parentNode.removeChild(err);
    }

    var subjects = document.getElementById("subjects");
    if(subjects){
        subject = subjects.value;
    }
    if(subject === "Music"){
        createEntityChoice();
    }
    else if(subject === ""){
        return;
    }
    else{
        tryAgain();
    }
}
function createEntityChoice(){
    var checkDIv =  document.getElementById("checkDiv");
    if (checkDIv){
        checkDIv.remove();
    }
    var err = document.getElementById("err");
    if(err){
        err.remove();
    }

    var command = document.getElementById("command");

    //command.style.display = "block";

    command.getElementsByTagName('h1')[0].innerHTML = 'Please Choose Entity';
    var search = document.getElementById("search");
    search.style.display = "block";

    search.innerHTML = "";
    //initializing input
    var input = document.createElement("input");
    input.id = "searchEntity";
    input.setAttribute("list", "entities");
    input.name = "entity";
    input.style = "border-radius: 5px;width:200px; height:30px;";
    search.appendChild(input);
    //initializing datalist
    var datalist =document.createElement("datalist");
    datalist.id = "entities";
    search.appendChild(datalist);
    //fill data list
    var list = document.getElementById('entities');

    var entities = ["Bob Dylan","The Beatles","Nirvana"];
    entities.forEach(function(item){
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
    });
    //initialize button
    var button =document.createElement("input");
    button.id = "btn2";
    button.type = "submit";
    button.onclick = chooseEntity;
    button.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px";
    search.appendChild(button);


    //back button
    goBackButton("init");
}


////////////
var entity="";
function chooseEntity(){

    //back button
    goBackButton("entity");
    //
    entity = document.getElementById("searchEntity").value;
    console.log(entity);
    if(entity === "Bob Dylan"){
        //document.getElementById("searchEntity").value= "";

        var btn = document.getElementById("btn2");
        btn.remove();
        err = document.getElementById("err");
        if(err){
            err.remove();
        }
        createCheckBtns();


    }
    else if(entity === ""){
        return;
    }
    else{
        tryAgain()
    }
}



//////back button
function goBackButton(backTo) {
    var mainPage = document.getElementById("mainPage");
    var btn = document.getElementById("backBtn");
    if (btn){
        btn.remove();
    }
    var backButton = document.createElement("button");
    backButton.id = "backBtn";
    if(backTo ==="init"){
        backButton.onclick = initPage;
    }
    else if(backTo ==="entity"){
        backButton.onclick = createEntityChoice;
    }
    else if (backTo === "checkers"){
        backButton.onclick = createCheckBtns;
    }
    else if (backTo === "works"){
        backButton.onclick = entityWork;
    }
    backButton.innerText = "Go Back";
    mainPage.appendChild(backButton);
}
//////////////////////////


// ///////////////
function tryAgain() {
    var err = document.getElementById("err");
    if(err){
        err.remove();
    }
    var errorDiv = document.createElement("div");
    errorDiv.id = "err";
    errorDiv.style.textAlign = 'center';
    var errorContent1 = document.createTextNode("Your Choice Is Currently Unavailable");
    errorDiv.appendChild(errorContent1);// add the text node to the newly created div
    var linebreak = document.createElement('br')
    errorDiv.appendChild(linebreak);
    var errorContent2 = document.createTextNode("Please Try Again");
    errorDiv.appendChild(errorContent2);
    var currentDiv = document.getElementsByClassName("content");// add the newly created element and its content into the DOM
    document.body.appendChild(errorDiv, currentDiv);
}

//////////////////
function createCheckBtns(){
    //generate command for user
    var checkDiv = document.createElement("div");
    checkDiv.id = "checkDiv";
    checkDiv.style.textAlign = 'center';
    var currentDiv = document.getElementsByClassName("content");// add the newly created element and its content into the DOM
    document.body.appendChild(checkDiv, currentDiv);
    // /////
    var checkBtn = document.getElementById('checkDiv');
    checkBtn.innerHTML = '<h4>Are You Interested in</h4>';// +
    checkBtn.innerHTML+="<input id=\"work\" value='work content' type=\"submit\" onclick=\"entityWork()\" style=\" height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px\" >";
    checkBtn.innerHTML+="or";
    checkBtn.innerHTML+="<input id=\"personal\" value='personal content' type=\"submit\" onclick=\"entityPersonal()\" style=\" height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px\" >";
}

//////////
function entityWork(){
    goBackButton("entity");
    //
    checker = document.getElementById("checkDiv");

    if(checker){
        checker.remove();
    }

    document.getElementById('command').innerHTML = '<h1>Choose Desired Work</h1>';
    var searchContainer = document.getElementById("search");
    searchContainer.innerHTML ="<input id=\"searchWork\" list=\"works\" name=\"work\" style=\" border-radius: 5px;width:200px; height:30px;\">" +
        "<datalist id=\"works\">";
    searchContainer.innerHTML+="</datalist><input id=\"worksBtn\" type=\"submit\" onclick=\"chooseWork()\" style=\" height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px\" >";
    var works = ["song1","song2","song3","album1","album2","album3"];

    var list = document.getElementById('works');

    works.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
    });
}


////////
function chooseWork() {

    work = document.getElementById("searchWork").value;
    console.log(work);
    if(work === "song1"){
        var worksBtn = document.getElementById("worksBtn");
        worksBtn.remove();
        err = document.getElementById("err");
        if(err){
            err.remove();
        }

        document.getElementById("command").getElementsByTagName('h1')[0].innerHTML = 'Show Work';
        document.getElementById("search").style.display = "none";


        ////BUGGGGGG
        goBackButton("entity");

    }
    else{
        tryAgain()
    }


}
function entityPersonal(){

    checker = document.getElementById("checkDiv");
    if(checker){
        checker.remove();
    }

    document.getElementById("command").getElementsByTagName('h1')[0].innerHTML = 'Show Personal Content';
    document.getElementById("search").style.display = "none";
    ////BUGGGGGG
    goBackButton("entity");

}


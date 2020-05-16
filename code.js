var entities=[];
var subject="";
var entity="";
var checkersActiv = false;
var work = "";
window.onload = function init(){
    entities=getentity();
    console.log("in init    " + entities[0]);
    initPage();
    // var searchEntity = document.getElementById("searchEntityDiv");
    // var list = document.getElementById('entities');
    //
    //
    // entities.forEach(function(item){
    //     var option = document.createElement('option');
    //     option.value = item;
    //     list.appendChild(option);
    // });
    // searchEntity.style.display = "none";


};

function initPage() {
    // //if went back
    // var searchEntity = document.getElementById("searchEntityDiv");
    // if (searchEntity){
    //     searchEntity.remove();
    // }


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
    searchDiv.id = "searchSubject";
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
    button.id="subjectBtn";
    button.type = "submit";
    button.onclick = chooseSubject;
    button.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px;";
    searchDiv.appendChild(button);
    //append command div to main div
    currentDiv.appendChild(searchDiv);

    ////////////////


    var searchEntity = document.createElement("div");
    searchEntity.id = "searchEntityDiv";

    //search.innerHTML = "";//erase subject search bar
    //initializing input
    var input = document.createElement("input");
    input.id = "searchEntity";
    input.setAttribute("list", "entities");
    input.name = "entity";
    input.style = "border-radius: 5px;width:200px; height:30px;";
    searchEntity.appendChild(input);
    //initializing datalist
    var datalist =document.createElement("datalist");
    datalist.id = "entities";
    searchEntity.appendChild(datalist);
    //fill data list
    //var list = document.getElementById('entities');

    //console.log(entities);
    console.log("in onInit    " + entities[0]);

    // for (var i = 0 ; i<3;i++){
    //     console.log(entities[i]);
    // }

    // entities.forEach(function(e){
    //     console.log(e);
    //     var option = document.createElement('option');
    //     option.value = e;
    //     datalist.appendChild(option);
    // });


    //initialize button
    var buttonEntity =document.createElement("input");
    buttonEntity.id = "entityBtn";
    buttonEntity.type = "submit";
    buttonEntity.onclick = chooseEntity;
    buttonEntity.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px";
    searchEntity.appendChild(buttonEntity);
    currentDiv.appendChild(searchEntity);
    searchEntity.style.display = "none";

    ////////////////



    //if went back, remove this div
    var checkDIv =  document.getElementById("checkDiv");
    if (checkDIv){
        checkDIv.remove();
    }

}

////////

// var subject="";
// var entity="";
// var checkersActiv = false;
// var work = "";

function chooseSubject(){
    console.log("in chooseSubject     " + entities[0]);

    var err = document.getElementById('err');
    if (err) {
        err.parentNode.removeChild(err);
    }

    var subjects = document.getElementById("subjects");
    if(subjects){
        subject = subjects.value;
    }
    if(subject === "Music"){
        entity="";//if went back
        // var searchSubject = document.getElementById("searchSubject");
        // searchSubject.style.display = "none";
        //
        // var searchEntity = document.getElementById("searchEntityDiv");
        // searchEntity.style.display = "block";
        //
        // var list = document.getElementById('entities');
        // entities.forEach(function(item){
        //     var option = document.createElement('option');
        //     option.value = item;
        //     list.appendChild(option);
        // });
        // entities=getentity();
        createEntityChoice();
    }
    else if(subject === ""){
        return;
    }
    else{
        tryAgain();
    }
}

///////
function createEntityChoice(){
    var checkDIv =  document.getElementById("checkDiv");
    if (checkDIv){
        checkDIv.remove();
    }
    var err = document.getElementById("err");
    if(err){
        err.remove();
    }
    ///
    var command = document.getElementById("command");
    command.getElementsByTagName('h1')[0].innerHTML = 'Please Choose Entity';

    var searchSubject = document.getElementById("searchSubject");
    searchSubject.style.display = "none";

    var searchEntity = document.getElementById("searchEntityDiv");
    searchEntity.style.display = "block";
    document.getElementById("searchEntity").disabled = false;
    document.getElementById("entityBtn").style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px; display:inline";


    var list = document.getElementById('entities');
    entities.forEach(function(item){
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
    });

    var searchWork = document.getElementById("workSearchDiv");
    if (searchWork){

        searchWork.style.display = "none";
    }
    // var searchSubject = document.getElementById("searchSubject");
    // searchSubject.style.display = "none";
    //
    // var searchEntity = document.getElementById("searchEntityDiv");
    // searchEntity.style.display = "block";


    // var search = document.getElementById("searchSubject");
    //
    //
    // search.innerHTML = "";//erase subject search bar
    // //initializing input
    // var input = document.createElement("input");
    // input.id = "searchEntity";
    // input.setAttribute("list", "entities");
    // input.name = "entity";
    // input.style = "border-radius: 5px;width:200px; height:30px;";
    // search.appendChild(input);
    // //initializing datalist
    // var datalist =document.createElement("datalist");
    // datalist.id = "entities";
    // search.appendChild(datalist);
    //fill data list
    // var list = document.getElementById('entities');
    //
    //
    // entities.forEach(function(item){
    //     var option = document.createElement('option');
    //     option.value = item;
    //     list.appendChild(option);
    // });

    // //initialize button
    // var button =document.createElement("input");
    // button.id = "entityBtn";
    // button.type = "submit";
    // button.onclick = chooseEntity;
    // button.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px";
    // // searchEntity.appendChild(button);
    // search.appendChild(button);

    //back button
    goBackButton("init");
    //when go back is activated
    if (entity !== ""){

        document.getElementById("searchEntityDiv").value = entity;
        //chooseEntity();
        document.getElementById("searchEntityDiv").disabled = false;
        //document.getElementById("checkDiv").style.display = "block";
        if (checkersActiv){

            goBackButton("entity");

            var btn = document.getElementById("entityBtn");
            if (btn !== null){
                // btn.remove();
                btn.style.display = "none";
            }
            createCheckBtns();
        }
    }
}


////////////
function chooseEntity(){
    checkersActiv =false;
    //back button
    goBackButton("entity");
    //
    entity = document.getElementById("searchEntity").value;
    if(entity === ""){
            return;
        }
    else if(entities.indexOf(entity) === -1){
        document.getElementById("searchEntity").value = "";
        entity = "";
        var checkDiv = document.getElementById('checkDiv');
        if (checkDiv!==null){
            checkDiv.remove();
        }
        tryAgain();
    }

    req(entity);
    console.log(entity);

    document.getElementById("searchEntity").disabled = true;
    //document.getElementById("searchEntity").value= "";
    var btn = document.getElementById("entityBtn");
    btn.style.display = "none";
    //btn.remove();
    err = document.getElementById("err");
    if(err){
        err.remove();
    }
    createCheckBtns();


}





///////////////
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
        var checkDiv = document.getElementById('checkDiv');
        if (checkDiv!==null){
            checkDiv.remove();
        }
    }
    else if(backTo ==="entity"){
        backButton.onclick = createEntityChoice;
        checkersActiv =false;
        work="";
    }
    else if (backTo === "checkers"){
        backButton.onclick = createEntityChoice;
    }
    else if (backTo === "works"){
        backButton.onclick = entityWork;
    }
    backButton.innerText = "Go Back";
    mainPage.appendChild(backButton);
}
//////////////////////////
/////////////////
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
    var searchDiv = document.getElementById("searchEntityDiv");// main to div
    //generate command for user
    var checkDiv = document.createElement("div");
    checkDiv.id = "checkDiv";
    checkDiv.style.textAlign = 'center';

    var commandText = document.createElement("h4");
    var text = document.createTextNode("Are You Interested in");
    commandText.appendChild(text);
    checkDiv.appendChild(commandText);
    //set button
    var worksBtn = document.createElement('input');
    worksBtn.id="work";
    worksBtn.type = "submit";
    worksBtn.onclick = entityWork;
    //worksBtn.setAttribute("onclick", "entityWork");
    worksBtn.value ="work content" ;
    worksBtn.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px;";
    checkDiv.appendChild(worksBtn);
    var personalBtn = document.createElement('input');
    personalBtn.id="personal";
    personalBtn.type = "submit";
    personalBtn.onclick = entityPersonal;
    //personalBtn.setAttribute("onclick", "entityPersonal");
    personalBtn.value ="personal content" ;

    personalBtn.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px;";
    checkDiv.appendChild(personalBtn);

    //append command div to main div
    searchDiv.appendChild(checkDiv);

   }

//////////
function entityWork(){
    checkersActiv = true;
    document.getElementById("searchEntityDiv").style.display = "block";
    // goBackButton("checkers");
    var checker = document.getElementById("checkDiv");
    if(checker){
        checker.style.display = "none";
    }

    var command = document.getElementById("command");
    command.getElementsByTagName('h1')[0].innerHTML = 'Choose Desired Work';

    document.getElementById("searchEntityDiv").style.display = "none";
    //search.innerHTML = "";//erase search div content

    // if went back
    var searchWork = document.getElementById("workSearchDiv");
    if (searchWork){
        searchWork.style.display = "block";
    }
    else {
        var search = document.createElement("div")
        search.id = "workSearchDiv"
        //initializing input
        var input = document.createElement("input");
        input.id = "searchWork";
        input.setAttribute("list", "works");
        input.name = "work";
        input.style = "border-radius: 5px;width:200px; height:30px;";
        search.appendChild(input);
        //initializing datalist
        var datalist =document.createElement("datalist");
        datalist.id = "works";
        search.appendChild(datalist);

        //fill data list
        var works=albumreq(entity)
        console.log(works)

        var list = document.getElementById('works');
        works.forEach(function(item){
            var option = document.createElement('option');
            option.value = item;
            list.appendChild(option);
        });
        //initialize button
        var button =document.createElement("input");
        button.id = "worksBtn";
        button.type = "submit";
        button.onclick = chooseWork;
        button.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px";
        search.appendChild(button);

        var mainDiv = document.getElementById("mainPage");// main to div
        mainDiv.appendChild(search);

        goBackButton("checkers");

        //
        document.getElementById("searchWork").value = work;
    }

}


////////
function chooseWork() {
    work = document.getElementById("searchWork").value;
    console.log(work);
    if(work === "song1"){
        var worksBtn = document.getElementById("worksBtn");
        worksBtn.remove();
        var err = document.getElementById("err");
        if(err){
            err.remove();
        }

        document.getElementById("command").getElementsByTagName('h1')[0].innerHTML = 'Show Work';
        document.getElementById("search").style.display = "none";

        /////show graph here

        goBackButton("works");

    }
    else{
        document.getElementById("searchWork").value = "";
        tryAgain()
    }
}
var personalInfo=""
function entityPersonal(){
    checkersActiv = true;
    var checker = document.getElementById("checkDiv");
    if(checker){
        checker.remove();
    }
    const db = firebase.database();
    var uref = db.ref('artist/'+ entity)
    uref.once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        personalInfo = snapshot.val().personal;
        $('.header').remove();
        document.getElementById("chartdivwrapper").style.height="100vh";
        buildGraph(personalInfo)
    })
    /////show graph here
    //document.getElementById("command").getElementsByTagName('h1')[0].innerHTML = 'Show Personal Content';
    //document.getElementById("search").style.display = "none";
    goBackButton("checkers");
}
function getInfo()
{
    return personalInfo;
}

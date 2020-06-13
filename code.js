var entities=[];
var works = [];
var subject="";
var entity="";
var checkersActiv = false;
var work = "";
var bOrA="";

document.getElementById("loading").style.display = "none";

function showloading()
{
    document.getElementById("loading").style.display = "block";
}

function hideLoading()
{
    document.getElementById("loading").style.display = "none";
}

window.onload = function init(){
    // entities=getentity();
    console.log("in init" + entities[0]);
    initPage();
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
    console.log("in onInit " + entities[0]);

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

        submit = document.getElementById("subjectBtn");

        submit.remove();//.style.display = "none";

        var searchSubjectDiv = document.getElementById("searchSubject");// searchSubject div
        searchSubjectDiv.appendChild(document.createElement("br"));

        // searchSubjectDiv.appendChild(document.createTextNode("select: "));
        select = document.createElement("h4");
        select.innerText = "select : ";
        searchSubjectDiv.appendChild(select);


        var radioDiv = document.createElement("form");
        radioDiv.id = "radioDiv";

        var band = document.createElement("input");
        band.type = "radio";
        band.name = "choice";
        band.value = "band";
        // var textBand = document.createElement("h4");
        // textBand.innerText = "band"
        var textBand = document.createTextNode("band");
        //radioDiv.appendChild(textBand);
        band.innerHTML = "band     ";

        var artist = document.createElement("input");
        artist.type = "radio";
        artist.name = "choice";
        artist.value = "artist";
        //artist.innerHTML = "artist";
        var textArtist = document.createTextNode("artist");
        // var textArtist = document.createElement("h4");
        // textArtist.innerText = "artist"


        radioDiv.appendChild(band);
        radioDiv.appendChild(textBand);
        radioDiv.appendChild(document.createElement("br"));

        radioDiv.appendChild(artist);
        radioDiv.appendChild(textArtist);

        searchSubjectDiv.appendChild(radioDiv);

        var button = document.createElement("button");
        // button.onclick = artistOrBand;
        button.innerText="ok";
        button.style.marginBottom = "10px"; //    margin-bottom: 10px;
        button.onclick = () => {
            var ele = document.getElementsByName('choice');

            if (ele[0].checked){
                console.log("bands");
                bOrA="bands"
                entities = getbands()
                showloading();
                setTimeout(function(){createEntityChoice(); hideLoading()
                },2000);

            }
            else if (ele[1].checked){
                console.log("artists");
                bOrA="artists"
                entities = getartists()
                showloading();
                setTimeout(function(){createEntityChoice(); hideLoading()
                },2000);
            }
            else{
                tryAgain();
            }

        };
        searchSubjectDiv.appendChild(document.createElement("br"));

        searchSubjectDiv.appendChild(button);

        goBackButton("init");
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
    console.log("calling" + bOrA);
    req(entity,bOrA);
    albumreq(entity,bOrA);
    songsreq(entity,bOrA);
    console.log(entity);

    document.getElementById("searchEntity").disabled = true;
    //document.getElementById("searchEntity").value= "";
    var btn = document.getElementById("entityBtn");
    btn.style.display = "none";
    var err = document.getElementById("err");
    if(err){
        err.remove();
    }

    showloading();
    setTimeout(function(){createCheckBtns();hideLoading()
    },5000);


}


////////////////////////////////////////////////////////////////////////////////////
/////////////////////back button///////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
/////////////////////try again pop up //////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


var ref ="";

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

    //creating button for work content
    var worksBtn = document.createElement('input');
    worksBtn.id="work";
    worksBtn.type = "submit";

    worksBtn.onclick = ()=>{
        checkDiv.appendChild(document.createElement("br"));
        var select = document.createElement("h4");
        select.innerText = "select : ";
        checkDiv.appendChild(select);


        var radioDiv = document.createElement("form");
        radioDiv.id = "radioDiv";

        var albums = document.createElement("input");
        albums.type = "radio";
        albums.name = "albumsOrSongs";
        albums.value = "albums";

        var textAlbums = document.createTextNode("albums");
        albums.innerHTML = "albums     ";

        var songs = document.createElement("input");
        songs.type = "radio";
        songs.name = "albumsOrSongs";
        songs.value = "songs";
        var textSongs = document.createTextNode("songs");


        radioDiv.appendChild(albums);
        radioDiv.appendChild(textAlbums);
        radioDiv.appendChild(document.createElement("br"));

        radioDiv.appendChild(songs);
        radioDiv.appendChild(textSongs);

        checkDiv.appendChild(radioDiv);

        var button = document.createElement("button");
        button.innerText="ok";
        button.style.marginBottom = "10px"; //    margin-bottom: 10px;
        button.onclick = () => {
            var ele = document.getElementsByName('albumsOrSongs');

            if (ele[0].checked){
                console.log("albums");
                ref="Albums";
                //load album list here
                console.log(works);
                entityWork();

            }
            else if (ele[1].checked){
                console.log("songs");
                ref="songs";
                //load songs list here
                console.log(works);
                entityWork();
            }
            else{
                tryAgain();
            }

        };
        checkDiv.appendChild(document.createElement("br"));

        checkDiv.appendChild(button);

    };

    worksBtn.value ="work content" ;
    worksBtn.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px;";
    checkDiv.appendChild(worksBtn);

    //creating button for personal content
    var personalBtn = document.createElement('input');
    personalBtn.id="personal";
    personalBtn.type = "submit";
    personalBtn.onclick = entityPersonal;
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
    var checker = document.getElementById("checkDiv");
    if(checker){
        checker.style.display = "none";
    }
    var command = document.getElementById("command");
    command.getElementsByTagName('h1')[0].innerHTML = 'Choose Desired Work';

    document.getElementById("searchEntityDiv").style.display = "none";

    // if went back
    var searchWork = document.getElementById("workSearchDiv");
    if (searchWork){
        searchWork.remove();
    }
    var search = document.createElement("div");
    search.id = "workSearchDiv";
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

    //initialize button
    var button =document.createElement("input");
    button.id = "worksBtn";
    button.type = "submit";
    // button.onclick = chooseWork;
    button.onclick = chooseWork;

    button.style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px";
    search.appendChild(button);

    var mainDiv = document.getElementById("mainPage");// main to div
    mainDiv.appendChild(search);

    //fill data list
    const db = firebase.database();
    var usersRef ="";
    var tempRef= "";
    console.log(ref);
    if(bOrA==="artists")
    {
        usersRef= db.ref('artist'+ref+'/'+entity);

    }else if(bOrA==="bands")
    {
        usersRef=db.ref('bands'+ref+'/'+entity);

    }
    usersRef.once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        //while (snapshot.val().albums===null){}
        if(ref==="Albums") {
            works = snapshot.val().albums;
        }else if(ref==="songs")
        {
            works = snapshot.val().songs;
        }
        var list = document.getElementById('works');
        works.forEach(function(item){
            var option = document.createElement('option');
            option.value = item;
            list.appendChild(option);
        });

    },function(error) {
        // The callback failed.
        console.error(error);
    });

    goBackButton("checkers");

    //
    document.getElementById("searchWork").value = work;
}
////////
function chooseWork() {
    work = document.getElementById("searchWork").value;
    if(ref==="Albums") {
        albumInfoReq(work, bOrA);
    }
    else if (ref==="songs")
    {
        songsInfoReq(work,bOrA)
    }
    console.log(work);
    // document.getElementById("worksBtn").style.display = "none";
    //
    var worksBtn = document.getElementById("worksBtn");
    worksBtn.remove();
    var err = document.getElementById("err");
    if (err) {
        err.remove();
    }

    const db = firebase.database();
    var usersRef = "";
    console.log(bOrA);
    if (bOrA === "artists") {
        usersRef = db.ref('artist'+ref+'Info/'+work);

    } else if (bOrA === "bands") {
        usersRef = db.ref('bands'+ref+'Info/'+work);

    }

    console.log(usersRef);
    showloading();
    setTimeout(function(){
        var usersRef = "";
        var albumsInfojson = "";
        console.log(bOrA);
        if (bOrA === "artists") {
            usersRef = db.ref('artist'+ref+'Info/'+work);

        } else if (bOrA === "bands") {
            usersRef = db.ref('bands'+ref+'Info/'+work);

        }
        usersRef.once('value').then(function (snapshot) {

            if(ref==="Albums") {

                albumsInfojson = snapshot.val().albumInfo;
            }
            else if(ref==="songs")
            {
                albumsInfojson = snapshot.val().songsInfo;
            }
            console.log(albumsInfojson);
            document.getElementById("chartdivwrapper").style.height = "100vh";
            buildGraph(albumsInfojson);
            hideLoading();
            goBackButton("checkers");

        },function(error) {
            // The callback failed.
            console.error(error);
        }); }, 7000);


    // goBackButton("works");
    ///////////////


}


var personalInfo="";
function entityPersonal(){
    checkersActiv = true;
    var checker = document.getElementById("checkDiv");
    if(checker){
        checker.remove();
    }
    const db = firebase.database();
    var uref = "";

    if (bOrA === "artists") {
        uref = db.ref('artist/'+entity);

    } else if (bOrA === "bands") {
        uref = db.ref('bands/'+entity);

    }

    uref.once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        while (snapshot.val().personal===null){}
        personalInfo = snapshot.val().personal;
        //////////////
        //////
        document.getElementById("chartdivwrapper").style.height="100vh";

        buildGraph(personalInfo)
    });
    /////show graph here
    //document.getElementById("command").getElementsByTagName('h1')[0].innerHTML = 'Show Personal Content';
    //document.getElementById("search").style.display = "none";
    goBackButton("checkers");
}
function getInfo()
{
    return personalInfo;
}

// // //get divs by id
// // var mainPage = document.getElementById("mainPage");
// // var header = document.getElementById("header");
// // // var command = document.getElementById("command");
// // var searchSubject = document.getElementById("searchSubject");
// var subjectsSelect = document.getElementById("subjects");
// var subjectBtn = document.getElementById("subjectBtn");
//
// var radioDiv1 = document.getElementById("radioDiv1");
// var bandsBtn = document.getElementById("bandsBtn");
// var artistsBtn = document.getElementById("artistsBtn");
//
//
//
// // var searchEntityDiv = document.getElementById("searchEntityDiv");
// // var searchEntity = document.getElementById("searchEntity");
// // var entitiesDataList = document.getElementById("entities");
// // var entityBtn = document.getElementById("entityBtn");
// // var checkDiv = document.getElementById("checkDiv");
// // var workInput = document.getElementById("work");
// // var personalInput = document.getElementById("personal");
// // var backBtn = document.getElementById("backBtn");
// var loading = document.getElementById("loading");
// //
// //
// // // command.style.display = "none";
// // searchSubject.style.display = "none";
// // subjectsSelect.style.display = "none";
// // subjectBtn.style.display = "none";
//
// radioDiv1.style.display = "none";
//
//
// // searchEntityDiv.style.display = "none";
// // searchEntity.style.display = "none";
// // entitiesDataList.style.display = "none";
// // entityBtn.style.display = "none";
// // checkDiv.style.display = "none";
// // workInput.style.display = "none";
// // personalInput.style.display = "none";
// // backBtn.style.display = "none";
// // loading.style.display = "none";
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
var entities=[];
var works = [];
var subject="";
var entity="";
var checkersActiv = false;
var work = "";
var bOrA="";
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
//
//
// function showloading() {loading.style.display = "block";}
// function hideLoading() {loading.style.display = "none";}
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
// window.onload = function init(){
//     initPage();
// };
//
// function initPage() {
//     // //get divs by id
//     // var mainPage = document.getElementById("mainPage");
//     // var header = document.getElementById("header");
//     // // var command = document.getElementById("command");
//     // var searchSubject = document.getElementById("searchSubject");
//     // var subjectsSelect = document.getElementById("subjects");
//     // var subjectBtn = document.getElementById("subjectBtn");
//
//
//     // var subjects = document.getElementById("subjects");
//
//     subjectBtn.onclick = () => {
//         if(subjectsSelect){
//             subject = subjectsSelect.value;
//         }
//         console.log(subject);
//         if(subject === "Music"){
//             radioDiv1.style.display = "block";
//             var dirLocation = location.href;
//             dirLocation =dirLocation.split("/").slice(0,-1).join("/").concat('/chooseEntity.html');
//             console.log(dirLocation);
//             bandsBtn.onclick = () =>{
//                         console.log("bands");
//                         bOrA="bands";
//                         entities = getbands();
//                         showloading();
//                         setTimeout(function(){
//                                 window.location.href = dirLocation; // go to chooseEntity page
//                             // createEntityChoice();
//                             hideLoading();
//                         }
//                         ,2000);
//             };
//             artistsBtn.onclick = () =>{
//                         console.log("artists");
//                         bOrA="artists";
//                         entities = getartists();
//                         showloading();
//                         setTimeout(function(){
//                                 window.location.href = dirLocation; // go to chooseEntity page
//                             // createEntityChoice();
//                             hideLoading();
//                         }
//                         ,2000);
//             };
//
//
//             // entity="";//if went back
//
//
//
//
//             ////////////////////////////////////////////
//             ////////////////////////////////////////////
//             ////////////////////////////////////////////
//             // var button = document.createElement("button");
//             // // button.onclick = artistOrBand;
//             // button.innerText="ok";
//             // button.style.marginBottom = "10px"; //    margin-bottom: 10px;
//             // button.onclick = () => {
//             //     var ele = document.getElementsByName('choice');
//             //
//             //     if (ele[0].checked){
//             //         console.log("bands");
//             //         bOrA="bands"
//             //         entities = getbands()
//             //         showloading();
//             //         setTimeout(function(){createEntityChoice(); hideLoading()
//             //         },2000);
//             //
//             //     }
//             //     else if (ele[1].checked){
//             //         console.log("artists");
//             //         bOrA="artists"
//             //         entities = getartists()
//             //         showloading();
//             //         setTimeout(function(){createEntityChoice(); hideLoading()
//             //         },2000);
//             //     }
//             //     else{
//             //         tryAgain();
//             //     }
//             //
//             // };
//             ////////////////////////////////////////////
//             ////////////////////////////////////////////
//             ////////////////////////////////////////////
//
//         }
//         else if(subject === ""){
//             return;
//         }
//         else{
//             // tryAgain();
//         }
//
//
//     };
//
//
//
//
//
//     // radioDiv1.style.display = "none";
//
//
// }
//
// // function chooseSubject(){
// //
// //     if(subjectsSelect){
// //         subject = subjectsSelect.value;
// //     }
// //     if(subject === "Music"){
// //         entity="";//if went back
// //
// //         subjectBtn.style.display = "none";
// //
// //         subjectBtn.style.display = "block";
// //         radioDiv1.style.display = "block";
// //         // okBtn.style.display = "block";
// //
// //
// //         okBtn.onclick = () => {
// //             var ele = document.getElementsByName('choice');
// //
// //             if (ele[0].checked){
// //                 console.log("bands");
// //                 bOrA="bands";
// //                 entities = getbands();
// //                 showloading();
// //                 setTimeout(function(){createEntityChoice(); hideLoading()
// //                 },2000);
// //
// //             }
// //             else if (ele[1].checked){
// //                 console.log("artists");
// //                 bOrA="artists";
// //                 entities = getartists();
// //                 showloading();
// //                 setTimeout(function(){createEntityChoice(); hideLoading()
// //                 },2000);
// //             }
// //
// //
// //         };
// //
// //         backBtn.onclick = ()=> initPage();
// //     }
// //     else if(subject === ""){
// //         return;
// //     }
// //
// //
// // }
//
//
// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////
// // function createEntityChoice(){
// //     // command.style.display = "block";
// //     // command.getElementsByTagName('h2')[0].innerHTML = 'Please Choose Entity';
// //     searchSubject.style.display = "none";
// //     subjectsSelect.style.display = "none";
// //     subjectBtn.style.display = "none";
// //     radioDiv1.style.display = "none";
// //     okBtn.style.display = "none";
// //     /////////////////////////////////////
// //     searchEntityDiv.style.display = "block";
// //     searchEntity.style.display = "block";
// //     entitiesDataList.style.display = "block";
// //     entityBtn.style.display = "block";
// //     /////////////////////////////////////
// //     checkDiv.style.display = "none";
// //     workInput.style.display = "none";
// //     personalInput.style.display = "none";
// //     /////////////////////////////////////
// //     backBtn.style.display = "block";
// //     /////////////////////////////////////
// //     loading.style.display = "none";
// //
// //
// //     //
// //     // var searchEntity = document.getElementById("searchEntityDiv");
// //     // searchEntity.style.display = "block";
// //     // document.getElementById("searchEntity").disabled = false;
// //     // document.getElementById("entityBtn").style = "height:30px;border-radius: 5px;background: #7ea3d0; margin: 5px; display:inline";
// //     // var list = document.getElementById('entities');
// //     entities.forEach(function(item){
// //         var option = document.createElement('option');
// //         option.value = item;
// //         entitiesDataList.appendChild(option);
// //     });
// //
// //     // var searchWork = document.getElementById("workSearchDiv");
// //     // if (searchWork){
// //     //     searchWork.style.display = "none";
// //     // }
// //
// //     //back button
// //     backBtn.onclick = ()=> initPage();
// //
// //     // goBackButton("init");
// //     // //when go back is activated
// //     // if (entity !== ""){
// //     //     searchEntityDiv.value = entity;
// //     //     // document.getElementById("searchEntityDiv").value = entity;
// //     //
// //     //     //chooseEntity();
// //     //     document.getElementById("searchEntityDiv").disabled = false;
// //     //     //document.getElementById("checkDiv").style.display = "block";
// //     //     if (checkersActiv){
// //     //
// //     //         goBackButton("entity");
// //     //
// //     //         var btn = document.getElementById("entityBtn");
// //     //         if (btn !== null){
// //     //             // btn.remove();
// //     //             btn.style.display = "none";
// //     //         }
// //     //         createCheckBtns();
// //     //     }
// //     // }
// // }
// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////
// ////////////
// // function chooseEntity(){
//     // checkersActiv =false;
//     // //back button
//     // goBackButton("entity");
//     // //
//     // entity = document.getElementById("searchEntity").value;
//     // if(entity === ""){
//     //     return;
//     // }
//     // else if(entities.indexOf(entity) === -1){
//     //     document.getElementById("searchEntity").value = "";
//     //     entity = "";
//     //     var checkDiv = document.getElementById('checkDiv');
//     //     if (checkDiv!==null){
//     //         checkDiv.remove();
//     //     }
//     //     tryAgain();
//     // }
//     // console.log("calling" + bOrA);
//     // req(entity,bOrA);
//     // albumreq(entity,bOrA);
//     // songsreq(entity,bOrA);
//     // console.log(entity);
//     //
//     // document.getElementById("searchEntity").disabled = true;
//     // //document.getElementById("searchEntity").value= "";
//     // var btn = document.getElementById("entityBtn");
//     // btn.style.display = "none";
//     // var err = document.getElementById("err");
//     // if(err){
//     //     err.remove();
//     // }
//     //
//     // showloading();
//     // setTimeout(function(){createCheckBtns();hideLoading()
//     // },5000);
//
//
// // }
//
//
//
//
//
// ////////////////////////////////////////////////////////////////////////////////////
// /////////////////////back button///////////////////////////////////////////////////
// // function goBackButton(backTo) {
// //     var mainPage = document.getElementById("mainPage");
// //     var btn = document.getElementById("backBtn");
// //     if (btn){
// //         btn.remove();
// //     }
// //     var backButton = document.createElement("button");
// //     backButton.id = "backBtn";
// //     if(backTo ==="init"){
// //         backButton.onclick = initPage;
// //         var checkDiv = document.getElementById('checkDiv');
// //         if (checkDiv!==null){
// //             checkDiv.remove();
// //         }
// //     }
// //     else if(backTo ==="entity"){
// //         backButton.onclick = createEntityChoice;
// //         checkersActiv =false;
// //         work="";
// //     }
// //     else if (backTo === "checkers"){
// //         backButton.onclick = createEntityChoice;
// //     }
// //     else if (backTo === "works"){
// //         backButton.onclick = entityWork;
// //
// //     }
// //     backButton.innerText = "Go Back";
// //     mainPage.appendChild(backButton);
// // }
// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

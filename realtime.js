
/*const userId = document.getElementById('entities');
const personal = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('entityBtn');
//const updateBtn = document.getElementById('btn1');
const removeBtn = document.getElementById('removeBtn');
var el = document.getElementById('btn2');


const db = firebase.database();



var usersRef = db.ref('/artist');
const normalUsersRef = usersRef.child('normal_users');
const superUsersRef = usersRef.child('super_users');


function addbutton(info) {
    addBtn.addEventListener('click', e => {
        e.preventDefault();
        console.log("in")
        usersRef.child(userId.value).set({
            personal: info,
        });
    });
}

/*updateBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log(userId)
    var uref = db.ref('users/'+ userId.value)
    uref.once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var name = snapshot.val().personal;
        name= JSON.stringify(name,null,2)
        console.log(name)
    })
});*/


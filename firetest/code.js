const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const readBtn = document.getElementById('readBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.firestore();


jsObjFromCsv =  {
    "J251525" : {
        "APPROVER" : "TOM@MAIL.COM",
        "JOB DESCRIPTION " : "CLEAN THE HOUSE",
        "JOB NUMBER" : "J251525"
    },
    "J512912" : {
        "APPROVER" : "JAMES@MAIL.COM",
        "JOB DESCRIPTION " : "BRUSH HORSE",
        "JOB NUMBER" : "J512912"
    },
    "J5-512" : {
        "APPROVER" : "HARRY@MAIL.COM",
        "JOB DESCRIPTION " : "WASH CAR",
        "JOB NUMBER" : "J5-512"
    }
};

const usersCollection = database.collection('users');

addBtn.addEventListener('click', e => {
    e.preventDefault();
    const ID = usersCollection.doc('user01').set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: Number(age.value)
    })
        .then(()=>{
            console.log('Data has been saved successfully !')})
        .catch(error => {
            console.error(error)
        });
});


addBtn.addEventListener('click', e => {
    e.preventDefault();
    const ID = usersCollection.doc().set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: Number(age.value)
    }, {merge: true});
});


addBtn.addEventListener('click', e => {
    e.preventDefault();
    const ID = usersCollection.doc();
    ID.set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: Number(age.value)
    });
});


updateBtn.addEventListener('click', e => {
    e.preventDefault();
    usersCollection.doc(userId.value).update({
        first_name: firstName.value,
        last_name: lastName.value,
        age: Number(age.value)
    });
});


updateBtn.addEventListener('click', e => {
    e.preventDefault();
    usersCollection.doc(userId.value).update({
        'favorite.food': 'Pizza'
    });
});

var list = [];


function getList(listName) {

    var fileName = 'datafiles/'+ listName +'.json';//'artists'

    $.getJSON(fileName , function (jd) {
        for (i = 0; i < jd.results.bindings.length; i++) {
            var parts = jd.results.bindings[i].person.value.split("/");
            var result = parts[parts.length - 1]; // Or parts.pop();
            list[i] = jd.results.bindings[i].personLabel.value + "(" + result + ")";
        }
    });

    return list;

}

function getentity(name) {

    return getList(name);
}
    //
    //     var entityList = [];
    //     $.getJSON('datafiles/artists.json', function (jd) {
    //         for (i = 0; i < jd.results.bindings.length; i++) {
    //             var parts = jd.results.bindings[i].person.value.split("/");
    //             var result = parts[parts.length - 1]; // Or parts.pop();
    //             entityList[i] = jd.results.bindings[i].personLabel.value + "(" + result + ")";
    //         }
    // });



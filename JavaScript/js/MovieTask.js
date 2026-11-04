var movies = [];
function myfunc(){
    var val1 = document.getElementById("movieName").value;
    var val2 = document.getElementById("movieRating").value;
    console.log(val1, val2);
    var obj={
        name: val1,
        rating: val2
    };
    console.log(obj);
    movies.push(obj);
    console.log(movies);
}

function searchAndDisplay(){
    let query = document.getElementById("mname").value;
    for(let i=0;i<movies.length;i++){
        if(query==movies[i].name){
            document.getElementById("val1").value = movies[i].name;
            document.getElementById("val2").value = movies[i].rating;
        }
    }
    toggleButtons();
}

function modifyThis(){

}

function toggleButtons() {
    if(document.getElementById("modifyThis").style.display === "block") {
        document.getElementById("addNew").style.display = "none";
        document.getElementById("modifyThis").style.display = "block";
    } else if(document.getElementById("addNew").style.display === "block"){
        document.getElementById("addNew").style.display = "none";
        document.getElementById("modifyThis").style.display = "block";
    }
}

//-----------------------------------------CHATGPT-----------------------------------------//
// var movies = [];
// // CREATE
// function myfunc() {
//     var val1 = document.getElementById("movieName").value;
//     var val2 = document.getElementById("movieRating").value;
//     if (val1 === "" || val2 === "") {
//         alert("Please enter movie name and rating");
//         return;
//     }
//     var obj = {
//         name: val1,
//         rating: Number(val2)
//     };
//     movies.push(obj);
//     console.log(movies);
//     alert("Movie added successfully");
//     document.getElementById("movieName").value = "";
//     document.getElementById("movieRating").value = "";
//     displayMovies();
// }

// // READ
// function displayMovies() {
//     var output = "";
//     for (var i = 0; i < movies.length; i++) {
//         output += "<p>" +
//             "Name: " + movies[i].name +
//             ", Rating: " + movies[i].rating +
//             "</p>";
//     }
//     if (movies.length === 0) {
//         output = "No movies available";
//     }
//     document.getElementById("result").innerHTML = output;
// }

// // UPDATE
// function updateMovie() {
//     var name = document.getElementById("movieName").value;
//     var rating = document.getElementById("movieRating").value;
//     for (var i = 0; i < movies.length; i++) {
//         if (movies[i].name.toLowerCase() === name.toLowerCase()) {
//             movies[i].rating = Number(rating);
//             alert("Movie rating updated");
//             displayMovies();
//             return;
//         }
//     }
//     alert("Movie not found");
// }

// // DELETE
// function deleteMovie() {
//     var name = document.getElementById("movieName").value;
//     for (var i = 0; i < movies.length; i++) {
//         if (movies[i].name.toLowerCase() === name.toLowerCase()) {
//             movies.splice(i, 1);
//             alert("Movie deleted successfully");
//             displayMovies();
//             return;
//         }
//     }
//     alert("Movie not found");
// }

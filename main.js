var toggle = document.querySelector(".toggle")
var nav = document.querySelector("nav")
var navTab = document.querySelectorAll(".nav-tab-menu ul li")
toggle.addEventListener("click", () => {
    toggle.classList.remove("fa-align-justify");


    if (nav.classList.contains("nav-left")) {
        nav.classList.remove("nav-left")
        toggle.classList.remove("fa-align-justify");
        toggle.classList.add("fa-xmark");
        navTab.forEach(element => {
            element.classList.add('animation');

        });

    }
    else {
        toggle.classList.add("fa-align-justify");
        nav.classList.add("nav-left")
        toggle.classList.remove("fa-xmark");
        toggle.classList.add("fa-align-justify");
        navTab.forEach(element => {
            element.classList.remove('animation');

        });
    }
})



//////////////////////////////
var allMovies = document.getElementById("allMovies")
var word = document.getElementById("word")
var res = document.getElementById("res")
var box;
allMovies.addEventListener("keydown", (e) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d9e0c944851543e0c939a3dae98ce83d&query=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                box = ""
                data.results.map(item => {

                    box += `
        <div class="col-md-6 col-lg-4 my-3 myM  shadow">
                    <div class="movie shadow rounded position-relative">
                        <div class="post">
                            <img src="https://image.tmdb.org/t/p/w500${item.poster_path}"
                                class="img-fluid rounded">
                            <div class="layer d-flex align-items-center ">
                                <div class="info p-0">
    
                                    <h2>${item.original_title}</h2>
                                    <p>${item.overview}</p>
                                    <p>${item.vote_average}</p>
                                    <p>${item.release_date}</p>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
        `
                    res.innerHTML = box;


                })
            }
        })















})
word.addEventListener("keydown", (e) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d9e0c944851543e0c939a3dae98ce83d&query=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                box = ""
                data.results.map(item => {

                    box += `
      <div class="col-md-6 col-lg-4 my-3 myM  shadow">
                  <div class="movie shadow rounded position-relative">
                      <div class="post">
                          <img src="https://image.tmdb.org/t/p/w500${item.poster_path}"
                              class="img-fluid rounded">
                          <div class="layer d-flex align-items-center ">
                              <div class="info p-0">
  
                                  <h2>${item.original_title}</h2>
                                  <p>${item.overview}</p>
                                  <p>${item.vote_average}</p>
                                  <p>${item.release_date}</p>
  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      
      `
                    res.innerHTML = box;


                })
            }
        })















})
/////////////////// scroll to contact ////////////////////////
document.querySelector(".toContact").addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView(true);

})
//////////////////////////////

const getMoveis = (key) => {
    fetch(`https://api.themoviedb.org/3/${key}?api_key=d9e0c944851543e0c939a3dae98ce83d`)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                box = ""
                data.results.map(item => {

                    box += `
    <div class="col-md-6 col-lg-4 my-3 myM  shadow">
                <div class="movie shadow rounded position-relative">
                    <div class="post">
                        <img src="https://image.tmdb.org/t/p/w500${item.poster_path}"
                            class="img-fluid rounded">
                        <div class="layer d-flex align-items-center ">
                            <div class="info p-0">

                                <h2>${item.original_title}</h2>
                                <p>${item.overview}</p>
                                <p>${item.vote_average}</p>
                                <p>${item.release_date}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    `
                    res.innerHTML = box;


                })
            }
        })
}
getMoveis("movie/now_playing")
var item = document.querySelectorAll(".item")
item.forEach(item => {
    item.addEventListener("click", (e) => {

        var key = e.target.getAttribute("id")
        getMoveis(key)

    });
})




/////////////////form validation////////////////////////
var setDisable = (dis) => {
    return dis;


}


const checkValid = (input, patern,valid=true) => {
    const button = document.querySelector('#submitBtn')
    input.addEventListener("keydown", (e) => {
        if (e.target.value.match(patern)&&valid) {
            input.nextElementSibling.style.display = "none";
            button.disabled = false;
        }
        else {
            input.nextElementSibling.style.display = "block";
            button.disabled = true;

        }

    }
    )




}
var nameInput = document.querySelector("#name")
const nameInputPatern= /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
checkValid(nameInput,nameInputPatern)



var email = document.querySelector("#email")
const emailPatern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
checkValid(email,emailPatern)


var phone = document.querySelector("#phone")
const phonePatern=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
checkValid(phone,phonePatern)



var age = document.querySelector("#age")
const agePatern=/100|[1-9]\d|[1-9]/
checkValid(age,agePatern)


var password = document.querySelector("#password")
const passwordPatern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
password.addEventListener("keyup",(e)=>{
    password.setAttribute("value",e.target.value );

 
})
   checkValid(password,passwordPatern)

var rePassword = document.querySelector("#rePassword")
const repasswordPatern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

    
   

rePassword.addEventListener("keyup",(e)=>{
if(password.value===e.target.value){
    checkValid(rePassword,repasswordPatern,true)
    
  
    
}
else{
    
    
    checkValid(rePassword,repasswordPatern,false)
    
}
})



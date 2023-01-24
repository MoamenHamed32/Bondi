window.onload = function () {
  window.scrollTo({
    top: 0,
  });
};


// Start Active List Our Work
let activeList = document.getElementsByClassName("active-list");
let activeNode = document.querySelectorAll(".active-list li");

activeNode.forEach((element) => {
  element.onclick = () => {
    activeNode.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("rounded-pill");
    });

    element.classList.add("active");
    element.classList.add("rounded-pill");
  };
});
// End Active List Our Work

// Start Search
let searchBtn = document.querySelector(".navbar .search .search-btn");
searchBtn.addEventListener("click", (event) => {
  let searchBox = document.querySelector(
    ".navbar .search .dropdown-menu input"
  );
  if (searchBox.value !== ""){
  let dropdownMenu = document.querySelector(".navbar .search .dropdown-menu");
  let searchResultDiv = document.createElement("div");
  let searchResultLi = document.createElement("li");
  let searchResult = document.createElement("a");
  let deleteBtn = document.createElement("button");

  searchResultLi.appendChild(searchResultDiv);
  searchResultDiv.appendChild(searchResult);
  dropdownMenu.appendChild(searchResultLi);
  searchResultDiv.appendChild(deleteBtn);
  deleteBtn.ariaLabel = "close";
  deleteBtn.classList = "btn-close delete-btn";
  searchResult.classList = "search-result dropdown-item" ;
  searchResultDiv.classList = "search-result-div"
  
  window.localStorage.setItem("value", searchBox.value);
  searchResult.innerHTML = window.localStorage.getItem("value");
  searchBox.value = "";

  deleteBtn.addEventListener("click", (event) => {
    searchResultLi.remove();
    event.preventDefault();
  })
}
event.preventDefault();
});

// End Search

// Strat FooterBtns
// let facebook = document.querySelector(".facebook-a");
// let twitter = document.querySelector(".twitter-a");
// let youtube = document.querySelector(".youtube-a");
// let linkedin = document.querySelector(".linkedin-a");

// facebook.addEventListener("click", (event) => {
//   event.preventDefault();
//   window.open("https://www.facebook.com", "blank");
//   console.log("Facebook Done");
// });
// twitter.addEventListener("click", (event) => {
//   event.preventDefault();
//   window.open("https://www.twitter.com", "blank");
//   console.log("Twitter Done");
// });
// youtube.addEventListener("click", (event) => {
//   event.preventDefault();
//   window.open("https://www.youtube.com", "blank");
//   console.log("Youtube Done");
// });
// linkedin.addEventListener("click", (event) => {
//   event.preventDefault();
//   window.open("https://www.linkedin.com", "blank");
//   console.log("Linkedin Done");
// });
// End FooterBtns


// login popup
let popupDiv = document.getElementById("popup-div");
let loginBtn = document.querySelector(".navbar #login-btn");
loginBtn.onclick = function (event) {
  event.preventDefault();
  if (popupDiv.style.display === "none") {
    popupDiv.style.display = "flex";
    
    window.scrollTo({
      top: 0,
      
    })
  }
  else {
    popupDiv.style.display = "none";
  }
   
};

// let allBody = document.getElementById("all-body");
// let popup = document.getElementById("popup");
// loginBtn.onclick = function (event) {
//   event.preventDefault();
 
// }

import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
async function getData() {
  try {
    let response = await axios.get("https://api.github.com/users/JustinJoe");
    let data = await response.data;
    getGitHubData(data)
    console.log(data)
    } catch {
      console.log(err)
    }
}
      /*
      STEP 2: Inspect and study the data coming back, this is YOUR
      github info! You will need to understand the structure of this
      data in order to use it to build your component function
      
      Skip to STEP 3 (line 34).
      */
function getGitHubData (obj) {
       
  const cardsElement = document.querySelector('.cards');
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  const cardInfoElement = document.createElement('div');
  cardInfoElement.classList.add('card-info');
  const imgElement = document.createElement('img');
  imgElement.src = obj.avatar_url
  const nameElement = document.createElement('h3');
  nameElement.classList.add('name');
  const usernameElement = document.createElement('p');
  usernameElement.classList.add('username');
  const locationElement = document.createElement('p');
  locationElement.textContent = `Location: ${obj.location}`;
  const profileElement = document.createElement('p');
  const usersGitHubAddressElement = document.createElement('a');
  usersGitHubAddressElement.href = obj.html_url;
  usersGitHubAddressElement.textContent = obj.html_url;
  profileElement.textContent = "Profile: ";
  profileElement.append(usersGitHubAddressElement);
  const followersElement = document.createElement('p');
  followersElement.textContent = `Followers: ${obj.followers}`
  const followingElement = document.createElement('p');
  followingElement.textContent = `Following: ${obj.following}`
  const bioElement = document.createElement('p');
  bioElement.textContent = `Bio: ${obj.bio}`

  cardElement.append(imgElement);;
  cardInfoElement.append(nameElement);
  cardInfoElement.append(usernameElement);
  cardInfoElement.append(locationElement);
  cardInfoElement.append(profileElement);
  cardInfoElement.append(followersElement);
  cardInfoElement.append(followingElement);
  cardInfoElement.append(bioElement);
  cardElement.append(cardInfoElement);
  cardsElement.append(cardElement)

  // console.log(obj)
  // return cardElement;
  
}
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const retrievedData = getData()
// console.log(retrievedData)
// getGitHubData(retrievedData)

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

  
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

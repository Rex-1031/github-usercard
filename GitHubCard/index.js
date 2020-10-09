const axios = require('axios');
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// const data = [{
// avatar_url: "https://avatars1.githubusercontent.com/u/64785141?v=4",
// bio: null,
// blog: "",
// company: null,
// created_at: "2020-05-04T12:21:24Z",
// email: null,
// events_url: "https://api.github.com/users/Rex-1031/events{/privacy}",
// followers: 0,
// followers_url: "https://api.github.com/users/Rex-1031/followers",
// following: 0,
// following_url: "https://api.github.com/users/Rex-1031/following{/other_user}",
// gists_url: "https://api.github.com/users/Rex-1031/gists{/gist_id}",
// gravatar_id: "",
// hireable: null,
// html_url: "https://github.com/Rex-1031",
// id: 64785141,
// location: null,
// login: "Rex-1031",
// name: null,
// node_id: "MDQ6VXNlcjY0Nzg1MTQx",
// organizations_url: "https://api.github.com/users/Rex-1031/orgs",
// public_repos: 25,
// received_events_url: "https://api.github.com/users/Rex-1031/received_events",
// repos_url: "https://api.github.com/users/Rex-1031/repos",
// site_admin: false,
// starred_url: "https://api.github.com/users/Rex-1031/starred{/owner}{/repo}",
// subscriptions_url: "https://api.github.com/users/Rex-1031/subscriptions",
// twitter_username: null,
// type: "User",
// updated_at: "2020-10-08T14:54:58Z",
// url: "https://api.github.com/users/Rex-1031",
// }]





   
 
 

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

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

const gitCardMaker = (data) =>{
  const div = document.createElement('div');
  div.classList.add('card');

  const img = document.createElement('img');
  img.src = data.avatar_url;
  div.appendChild.img

  const div2 =document.createElement('div');
  div2.classList.add('card-info')
  div.appendChild.div2

  const h3 = document.createElement('h3');
  h3.classList.add('name')
  h3.textContent = data.name
  div2.appendChild.h3

  const p = document.createElement('p');
  p.classList.add('username')
  p.textContent = data.login
  div2.appendChild.p

  const p2 = document.createElement('p');
  p2.textContent = `Location: ${data.location}`
  div2.appendChild.p2

  const p3 = document.createElement('p');
  p3.textContent = `Profile:`
  div2.appendChild.p3

  const a = document.createElement('a');
  a.href = data.url
  a.textContent = `${data.url}`
  p3.appendChild.a

  const p4 = document.createElement('p');
  p4.textContent = `Followers: ${data.followers}`
  div2.appendChild.p4

  const p5 = document.createElement('p');
  p5.textContent = `Following: ${data.following}`
  div2.appendChild.p5

  const p6 = document.createElement('p');
  p6.textContent = `Bio: ${data.bio}`
  div2.appendChild.p6

  return div;
}
//Step 4

const cardsInfo = document.querySelector('.cards');

axios.get("https://api.github.com/users/Rex-1031")
   .then((res) =>{
    const cardData = res.data;
    const cardArr = gitCardMaker(cardData)
        cardsInfo.appendChild(cardArr)
      
       
     })
     .catch((err)=> {
       debugger
       console.log("error", err);
     });




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

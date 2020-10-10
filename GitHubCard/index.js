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

const followersArray = ['tetondan', 'dustinmyers','justsml', 'luishrd', 'bigknell'];

followersArray.forEach((user)=>{
  axios.get(`https://api.github.com/users/${user}`)
  .then((res)=>{
    const newCard = gitCardMaker(res)
    entry.appendChild(newCard)
    console.log(res)
})
.catch((err) =>{
  debugger
  console.log(err)
  })
})

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

const gitCardMaker = (obj) =>{
  const div = document.createElement('div');
  div.classList.add('card');

  const img = document.createElement('img');
  img.src = obj.data.avatar_url;
  

  const div2 =document.createElement('div');
  div2.classList.add('card-info')
  

  const h3 = document.createElement('h3');
  h3.classList.add('name')
  h3.textContent = `Name: ${obj.data.name}`
  
  const p = document.createElement('p');
  p.classList.add('username');
  p.textContent = `Username: ${obj.data.login}`;

  const p2 = document.createElement('p');
  p2.textContent = `Location: ${obj.data.location}`;
 
  const p3 = document.createElement('p');
  p3.textContent = `Profile:`;
  const a = document.createElement('a');
  a.href = obj.data.url
  a.textContent = `${obj.data.url}`
  

  const p4 = document.createElement('p');
  p4.textContent = `Followers: ${obj.data.followers}`
  

  const p5 = document.createElement('p');
  p5.textContent = `Following: ${obj.data.following}`
  

  const p6 = document.createElement('p');
  p6.textContent = `Bio: ${obj.data.bio}`
 

  p3.appendChild(a);

  div2.appendChild(h3);
  div2.appendChild(p);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);

  div.appendChild(img);
  div.appendChild(div2);


  return div;
}

const entry = document.querySelector('.cards')
//Step 4



 axios.get("https://api.github.com/users/Rex-1031")
   .then((res) =>{
      const newCards = gitCardMaker(res)
      entry.appendChild(newCards)
      console.log(res)  
  })
  .catch((err) =>{ 
  debugger
  console.log(err)
});




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

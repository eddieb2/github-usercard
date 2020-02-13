// const data = {
//   "login": "eddieb2",
//   "id": 58380182,
//   "node_id": "MDQ6VXNlcjU4MzgwMTgy",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/58380182?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/eddieb2",
//   "html_url": "https://github.com/eddieb2",
//   "followers_url": "https://api.github.com/users/eddieb2/followers",
//   "following_url": "https://api.github.com/users/eddieb2/following{/other_user}",
//   "gists_url": "https://api.github.com/users/eddieb2/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/eddieb2/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/eddieb2/subscriptions",
//   "organizations_url": "https://api.github.com/users/eddieb2/orgs",
//   "repos_url": "https://api.github.com/users/eddieb2/repos",
//   "events_url": "https://api.github.com/users/eddieb2/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/eddieb2/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Edward Andrew Blanciak",
//   "company": null,
//   "blog": "",
//   "location": "Pittsburgh, PA",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "public_repos": 22,
//   "public_gists": 0,
//   "followers": 9,
//   "following": 10,
//   "created_at": "2019-12-01T03:51:47Z",
//   "updated_at": "2020-02-13T20:12:58Z"
// }


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card"> x
  <img src={image url of user} /> x
  <div class="card-info">
    <h3 class="name">{users name}</h3> x
    <p class="username">{users user name}</p> x
    <p>Location: {users location}</p>x
    <p>Profile:  x
      <a href={address to users github page}>{address to users github page}</a>x
    </p>
    <p>Followers: {users followers count}</p>x
    <p>Following: {users following count}</p>x
    <p>Bio: {users bio}</p>x
  </div>
</div>

*/


const cardMaker = (val) => {
  const card = document.createElement('div');
  const userImage = document.createElement('img');

  const cardInfo = document.createElement('div');
  // All below are nested inside of cardInfo
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  // URL is nested inside of Profile 
  const url = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  card.appendChild(userImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(url);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  userImage.src = val.avatar_url;
  name.textContent = val.name;
  userName.textContent = val.login;
  location.textContent = `Location: ${val.location}`;
  // Below line is needed but keeps hiding my A tag.
  profile.textContent = 'Profile: ';
  url.href = val.html_url;
  url.textContent = val.html_url;
  followers.textContent = `Followers: ${val.followers}`;
  following.textContent = `Following: ${val.following}`;
  bio.textContent = `Bio: ${val.bio}`;


  // console.log('Structure: ', card);
  console.log('logged info', cardInfo)
  return card;
}

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/eddieb2')
.then(response => {
  console.log(response.data)
  let myArray = [];
  myArray.push(response.data);
  console.log(myArray);
 myArray.forEach((item) => {
    cards.appendChild(cardMaker(item));
  });
})
.catch(error => {
  console.log('the data was not returned', error)
})



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

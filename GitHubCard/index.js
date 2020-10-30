import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  
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

const followersArray = ['tetondan', 'dustinmyers','justsml','luishrd','bigknell' ];

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

function gitHubAPI(object){
  const div1 = document.createElement('div')
  div1.classList.add('card')
  
  const img = document.createElement('img')
  img.src =(object.avatar_url)
  div1.appendChild(img)


  const div2 = document.createElement('div')
  div2.classList.add('card-info')
  div1.appendChild(div2)

  const h3 = document.createElement('h3')
  h3.classList.add('name')
  h3.textContent = object.name
  div2.appendChild(h3)


  const p1= document.createElement('p')
  p1.classList.add('username')
  p1.textContent = object.login
  div2.appendChild(p1)

  const p2 = document.createElement('p')
  p2.textContent = `Location: ${object.location}`
  div2.appendChild(p2)

  const p3 = document.createElement('p')
  p3.textContent = ('Profile:')
  div2.appendChild(p3)

  const anchorTag = document.createElement('a')
  anchorTag.href=(object.html_url)
  anchorTag.textContent = object.html_url
  p3.appendChild(anchorTag)

  const p4 = document.createElement('p')
  p4.textContent = `Followers: ${object.followers}`
  div2.appendChild(p4)

  const p5 = document.createElement('p')
  p5.textContent = `Following: ${object.following}`
  div2.appendChild(p5)

  const p6 = document.createElement('p')
  p6.textContent = `Bio: ${object.bio}`
  div2.appendChild(p6)
  return div1

  


}

const card = document.querySelector('.cards')


axios
.get('https://api.github.com/users/MaksimRaymond')
.then((response) => {
  const data = response.data; 
  card.appendChild(gitHubAPI(data))
  })
.catch((error)=> {
  console.log(error, "This Is Not Working"); 
  });


followersArray.map(item => {
  axios
.get(`https://api.github.com/users/${item}`)
.then((response) => {
  const data = response.data; 
  card.appendChild(gitHubAPI(data))
  })
.catch((error)=> {
  console.log(error, "This Is Not Working"); 
  });

})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

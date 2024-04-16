# startup

## Elevator Pitch
With so many people wanting to monetize their art and paying for a website themselves is a hard thought option, it is time for a platform to have artists monetize their products and gain the traction they need. My website would allow artists to monetize their products allowing them to actually get the credit they worked hard to achieve.

## Objective
In thinking of how to best demonstrate my expertise of building and running websites, I wanted to create one that would fulfill the elements of the class and be useful to me in the future. The idea for this comes from my love of Photography. I am by no means good at photography, but i can take some pretty decent pictures. Some of these I want to monetize. Although making a page just for me may possibly fulfill all the requirments of the assignment, it might not grow past a few hundred visits in its lifetime. To ensure a steady amount of viewership, i would like to design a page that would serve as a platform for all photographers to post *their* pictures so that they could monetize them without having to create a whole website and advertise their work. While i wont be fleshing out all features of said page, i will continue to improve the website until it could be deployed and fit the requirements of the course and mine own requirements.

## The Page

<img style="float: right;" src="Homepage.jpeg 2024-01-18 01_58_42.png">

### The Front Page
The idea with the front page is to show off some of the more *well known* people mixed with the *unknown*. Like music librarys (i.e. *Spotify* and *Apple Music*), They incorporate a homepage that intorduces people that are well known throughout the music world (Drake and Morgan Wallen come to mind). they interweve them with other more obscure artists. To achieve this, we need to make the front page as aesthetically pleasing as possible, making different portraits of artists. There must be blocks that act as a box to be explored.

### The Boxes
When a person clicks on the boxes that highlight the portrait of the artist, they are taken to the profile of the artist. This is customizable by the artists themselves to a degree. like Instagram, they are able to post their art and people are able to look at them. They could contain a **short** blurb/header with the first look of the art.
<img style = "float: right;" src = "Boxes.jpeg 2024-01-18 02_00_03.png">

### Each Specific Post
when someone decides to click on a specific post/art piece, they will be guided to another page where the users are able to read a blog post about the art if they want. There will also be another option to directly buy the piece of art or a print thereof. there will be text boxes outlined, similar to the product pages of Amazon. 
<img style = "float: left;" src= "Picdesc.jpeg 2024-01-18 02_00_39.png">


## The Technologies Used

### HTML
Html would be used as the outline and bones of the site itself. When it comes to the page, it would be used to place the boxes in organized positions. It would also be the button and hyperlink body.

### CSS
This would be used specifically to make the site more aesthetically pleasing. The site would be designed and color coded to fit this pleasing nature with the help of this language. The boxes themselves would likely be sized using CSS as they could be strectched or shrunk to fit the size of the screen of the user's technology.

### JavaScript
This would be the script to save data, activate different changes in the webpage, and create little animations depending on what the user in hovering over or initiating.

### Websockets
While the artists would post on their page, all of that data would be stored on the cloud. This would obviously be updated after the class but would be the initial use of the websocket as the consumer/user would navigate to these profiles which are hosted by the server itself.

### Database Data
All artist data, inlcuding **RAW** images. This would be upgraded if the app increases in use and popularity. There will be two different accounts stored, the *users* and the *artists*. Each account bits of data would be stored on the database which the server will pull from in order to provide the products.

### Authentication
Both *Users* and the *artists* will have their own accounts. The *artists* will have a *buisness* account profile that would allow them to be able to post their work and monetize it. The *users* will just have a consumer account that will allow them to search in history and purchase with the card they have already used previously.

### React
This would be used to gather resources and build parts to the website.


# STARTUP HTML
## February 5, 2024
After a week of editing the code and adding 5 different html pages that connect to each other, i have made the home page, the login page, the personal account page, a profile page, and an about page. All of which utilize different syntactic structures giving each page a new feel from the last and organizing it all. I currently have all of them attached to one css page and one javascript page although this may change in the future when it gets more complex.

### index.html
This is the homepage and contains links to several different pages. this will have the feature to look at featured people and their art. This will be expanded on later as i left place holders that will be edited using css.

### about.html
This page will allow users to read about the website and will be navigable on all pages in the footer section of each page.

### login.html
This is a login page that has two text boxes for the username and password. it is a simple page that really wont have much to change or add.

### myAccount.html
This account will be similar to the profile page but include more features such as settings and what not. This page will be heavily customized and only be accessible if the conditions in the login are met. It will have the accounts post and other buisness oriented items.

### profile.html
The final one I added allows for the user to look at other profiles that are not their own and be able to explore other profiles. this will have different posts and buisness features attached but nothing to actually manage the profile.


# STARTUP CSS
## February 14, 2024
After a week of editing the code and adding CSS to the 5 different html pages that connect to each other, i have decorated the home page, the login page, the personal account page, a profile page, and an about page. All of which utilize different syntactic structures giving each page a new feel from the last and organizing it all. I currently have all of of my HTML pages attached to one css page and one javascript page although this may change in the future when it gets more complex.

### Cards
I created and formated cards so that it would prominently display an image, a profile picture, and the profile name. 

### side bar
this will take extra time to fletch out with links to others. This displays certain links like home and about. It also can be closed with a button and opened with a button, both of which will appear when the screen shrinks to a specific size. 

### navigation bar
This sits below the header and holds (currently) the login link and the GitHub repo. The links will change colors depending on if the user hovers the mouse over them.

### Login Page
Finished some formatting of the login page that will be devoloped on later.

### General formating
Placed the nav bar below the header. Placed the side bar on the side. Placed the cards on the right of the page so they could be used in a grid like manner.

# STARTUP JavaScript
## March 11, 2024
After having major computer issues that lead to a delay of this being done, i was able to implement several different scripts that would be used to create posts, 'log' people in, and to have a side bar that will expand with more options.

### login.js
this uses the base code found in simon-javascript in order to simply log someone in using local storage.

### Post.js
This allows one to create a post that will update other pages using local storage. parts of this are not fully implemented as it requires backend work that can take from some storage place and dynamically update the index.html page.

### Script.js
this is just a simple page that only has the the script for the side bar opening and closing. this may be changed in future updates, however.

# STARTUP Node.js
## March 17, 2024
Again the same issues did persist and i am quite ready to recieve my new computer in a couple weeks, i was able to attach my index.js from the parent directory to the inner javascript pages such as the newPost.js, login.js, etc.

### newPost.js
I connected the index.js file to the newPost.js and renamed it so that it would make a bit more sense to use and organize. I then changed all the locations where local storage would be used to something along the lines that it would take the information and store it in a json file.

### login.js
Similar thing here. I created a json file that would store the credentials in a credentials.json file. this would be temporary because of its insecure implementaion.

### credentials.json
this would store credentials in a json file and would be added to by the register.js file.

### index.js
This is the backend. It contains some of the functions that would store the credentials, new posts, handle uploads, among assigning ports and whatnot.

### Profile.js / myaccount.js
this is supposed to grab the information for the posts in the parent directory and put them in html format on a user page.

### about.js
this includes an api but does not do much outside of that.

# STARTUP Login.js
### March 22, 2024

### Login.js
I added the scripts to allow for a user to login in or register to the webpage. this would first take the given username and password, encrypt the password, and then send the items to MongoDB.

### MongoDB
This added the database functionality allowing for full use of storing values and information based on certain key variables, most importantly being, login credentials.

### index.js
Added the backend code to make the previous two possible.

### Login.html
changed a few of the pieces of information to better simplify the development process.

# STARTUP Websockets
### index.js
The main thing that was changed was that The index page should now display other posts from other creators from the platform. The Websocket in use is taking from the database and pasting the information that the webpage recieves through the api and returns the values associated with the user IDs.

There were smaller changes to make the webpage more fluid although i am having trouble getting the webpage to work between online and offline use.

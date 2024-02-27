# Notes

## Things to do
* Figure outhow to set up click
* Find a map to use



HTML Language Tips
-

Updating the .pem file -> chmod 400 \<pem file>

Input types 

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |


| Type	| Meaning |
| ------|------|
| text	| Single line textual value |
| password	| Obscured password |
| email	| Email address |
| tel	| Telephone number |
| url	| URL address |
| number	| Numerical value |
| checkbox |	Inclusive selection |
| radio	| Exclusive selection |
| range	| Range limited number |
| date	| Year, month, day |
| datetime-local	| Date and time |
| month	| Year, month |
| week	| Week of year |
| color	| Color |
| file	| Local file |
| submit	| button to trigger form submission |




#### HTML Tags

|   tag   |  usage  |
| ------- | ------- |
| \<!--...--> | This is a comment which is not displayed in the browser |
| \<!DOCTYPE html> | This is the beginning of ALL html documents!! **Important!!** |
| \<a> | hyperlinks |
| \<address> | Author's contact information |
| \<area> | Creates an image map with clickable areas |
| \<audio> | Connect audio using mp3 files |
| \<b> | bold text within a paragraph (\<p>) |
| \<body> | the body paragraph that comes after the head |
| \<br> | it's empty, so there's no follow. Break line |
| \<button> | This makes a clickable button!! |
| \<cite> | encloses something you want to look cited |
| \<data> | associates products with a number |
| \<div> | a section that's styled with css |
| \<em> | encloses something you want emphasized |
| \<embed> | an embedded image, video or html page |
| \<footer> | creates footer, use \<p> for inner paragraphs |
| \<form> | create a form for users to fill out |
| \<h1>-\<h6> | the different html headers |
| \<head> | container for metadata, goes between html tag and body tag |
| \<header> | intro content or important links |
| \<hr/> | adds a line underneath th content |
| \<html lang = "en"> | I don't know what this does but it goes after DOCTYPE |
| \<i> | italicize |
| \<image> | insert image |
| \<input> | space for gathering user input |
| \<li> | list |
| \<main> | the main content of the doc |
| \<map> | an image map with clickable links! (look at area) |
| \<mark> | highlight text |
| \<nav> | set of navigation links |
| \<object> | container for external resource (all info inside >) |
| \<option> | an option in a select list |
| \<output> | shows the result of a calculation |
| \<p> | denotes a paragraph |
| \<param> | parameters for the object element |
| \<q> | denote a short quotation |
| \<s> | line through text that isn't true anymore |
| \<section> | section in a document |
| \<select> | goes with option |
| \<sub> | surrounds subscript |
| \<sup> | surrounds superscript |
| \<svg> | insert svg graphics |
| \<table> | insert a table |
| \<td> | standard data cell in a table |
| \<th> | table header |
| \<time> | define a specific time/date |
| \<title> | title your html document inside head |
| \<tr> | table row |
| \<ul> | unordered list |
| \<video> | embed a video into the page |






EXAMPLES

```
<a href="url">link text\</a>
```
 -- this is the format for a hyperlink
```
  <p><img src="hyperlink" alt="alternate name"></p>
```
 -- this is the format for putting in images
```
<address>
Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```
```
<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>
```
```
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```
```
<button type="button">Click Me!</button>
```
```
<ul>
  <li><data value="21053">Cherry Tomato</data></li>
  <li><data value="21054">Beef Tomato</data></li>
  <li><data value="21055">Snack Tomato</data></li>
</ul>
```
```
<embed type="image/jpg" src="pic_trulli.jpg" width="300" height="200">
<embed type="text/html" src="snippet.html" width="500" height="200">
<embed type="video/webm" src="video.mp4" width="400" height="300">
```
```
<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```
```
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```
```
<link rel="stylesheet" href="styles.css">
```
```
* input table -- <table>
        <tr>
          <th>Table</th> the th does bold (maybe means table header?)
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td> the td is just regular
          <td>table</td>
          <td>table</td>
        </tr>
        <tr>
```
```
<p>Open from <time>10:00</time> to <time>21:00</time> every weekday.</p>

<p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
```
```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```


CSS Notes
-
* Animation
* * Use the animation properties and create keyframes
```
animation-name: demo;
animation-duration: 3s; (however many seconds)
```
  * Example of zooming text
```
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```


* Commonly used units in CSS


| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

* *You can also describe color in lots of ways, including using hex, the keyword, RGB function or HSL(hue, sat, light)


#### Getting Started in CSS
```
selector {
property1: value1;
property2: value2;
}
```
So for example you could say "h1" in place of "selector" and then "color:blue" in place of "property1: value1;"
| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `h1`     | The HTML headers: can say h2 etc | h1 {color:blue}      |
| `font` |      |  |
|   |   |                           |
|     |            |         |
|  |     |       |
|   |                |             |
| |          |                    |
|  | |  |
|   |            |         |
|  | | |


```
font-family: "Times New Roman", Times, serif;
```

```
text-align:justify;
            display:inline-block;
```
¡Use this in all blocks within a set of brackets that you want to be in line!
Or, another option is: 
```
display: inline;
        float:left;
```


#### SPACING
The justify-content property values are flex-start, flex-end, center, space-between, space-around, and space-evenly, but there's no right value.


### BOOTSTRAP

```
    <div id="accordion" class="accordion">
         <div class="accordion-item">
           <h2 class=äccordion-header" id="heading">
                                                   <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">
```


Java Script Notes
-

* in order to include js in your html, you need to include /<script /src="nameoffile.js"></script>


```
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
```
* spread notation does the opposite, it splits an array into multiple entries
```
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

#### variable types
var - I think this is the scope of everything within where you declare the variable, things will overwrite this if they're nested
const - I think this is a constant that doesn't change
let - this is how you want to declare a variable that can change

##### Event listener
```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

##### JS Promise
```
return new Promise(async (pressResolve) => {
      this.paint(50);
      await this.playSound(volume);
      this.paint(25);
      pressResolve();
    });
```

Declaring Java script variables: 


Format for entering JS into HTML:
/<script src="login.js"></script>
/<script> #insert code </script>
/onclick="alert('Hey there! Greetings from Coders')"
(if it references html in your js, you'll need to declare it at the end of html file before closing body and html tags)

  
Github note tips
-
* Backslash to print functional characters as actual characters
* Rest notation allows you to enter an array as one parameter


### Misc helpful information
- chmod is changing file permissions
- sudo is giving moderator permissions
- functions in java script
* * NO = function f(x) = {}
* * YES = const f = (x) => {}
* * YES = function f(x) {}
* * YES = const f = function(x) {}
- js objects
- - valid = { n:1 }
  - valid = {n:"1"}
  - invalid = { n=1 }
  - invalid = { "n"=1}
  - invalid = { "n"="1" }
- Insert DOM info()
- Insert DNS info()
- Console.log outputs data in JS

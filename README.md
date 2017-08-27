# SvgAvatar

by Gabriel Franck

SvgAvatar is a javascript module assembling different svg object to create an avatar. This will allow us to not store svg files or images of avatars but just the index of each part. 

SvgAvatar will be designed to support custom librairies of avatars, a tutorial will be coming soon.


## Installation 

Install it via npm :
```bash
npm install svg_avatar
```

Or via bower :
```bash
bower install svg_avatar
```

If you are in a NodeJS environement, you just need to include svgAvatar to your javascript project :
```javascript
svgAvatar = require('svg_avatar')
```

If you're not, include the bundle.js before the files where you're going to use SvgAvatar :
```html
<script src="bower_components/svg_avatar/bundle.js"></script>
or
<script src="node_modules/svg_avatar/bundle.js"></script>
```

and then you can :
```javascript
svgAvatar = require('svg_avatar')
```


## Demo

[Here](http://embed.plnkr.co/lS0mFYevQgzXaiVnhiSJ/) is a link to the live demo


## Usage

### Definition

#### avatar example :
```json
{
	'form': 0,
	'mouth': 0,
	'eye': 0,
	'color1': 0,
	'color2': 0
}
// or in string
'{"form":0,"mouth":0,"eye":0,"color1":0,"color2":0}'
```

#### avatar_svg example :
```html
<rect x='15' y='15' fill='#3941c3' stroke='#3941c3' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/>
<polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/>
<polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/>
<rect x='59.532' y='175.689' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/>
<rect x='59.532' y='159.062' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/>
<rect x='172.475' y='159.062' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/> 
```

### Methods

#### lib_json()

Return the content of the current avatar_lib.json (wich contains all svg parts of the avatar) in a JSON object

##### Syntax

```javascript
svgAvatar.lib_json() //-> JSON object (content of avatar_lib.json by default)
```

---

#### stringify_avatar()

Return the value of an avatar converted to string, could be useful to store avatars into a database

##### Syntax

```javascript
svgAvatar.stringify_avatar(avatar_json) //-> String (avatar)
```

|Parameters| value | description|
|---|---|---|
|avatar_json | JSON Object | the avatar value in json |

---

#### render_svg()

Return an avatar svg value in string

##### Syntax

```javascript
svgAvatar.render_svg(avatar) //-> SVG String (avatar_svg)
```

|Parameters| value | description|
|---|---|---|
|avatar | Object or String | the avatar value in json or in string |

---

#### random_avatar()

Generate a random avatar object

##### Syntax

```javascript
svgAvatar.random_avatar() //-> Object (avatar)
```

---

#### render_random_svg()

Generate a random avatar in svg

##### Syntax

```javascript
svgAvatar.render_random_svg() //-> SVG String (avatar_svg)
```

---

#### next_part_avatar() and previous_part_avatar()

Return an avatar object with a part changed (it loops when max value is reached)

##### Syntax

```javascript
svgAvatar.next_part_avatar(avatar, part) //-> Object (avatar)
svgAvatar.previous_part_avatar(avatar, part) //-> Object (avatar)
```

|Parameters| value | description|
|---|---|---|
|avatar | Object or String | the avatar value in json or in string |
|part|"forms","eyes","mouths","color1" or "color2"| the part to increment or decrement |

---

#### next_part_svg() and previous_part_svg()

Return an avatar in svg with a part changed (it loops when max value is reached)

##### Syntax

```javascript
svgAvatar.next_part_svg(avatar, part) //-> SVG String (avatar_svg)
svgAvatar.previous_part_svg(avatar, part) //-> SVG String (avatar_svg)
```

|Parameters| value | description|
|---|---|---|
|avatar | Object or String | the avatar value in json or in string |
|part|"forms","eyes","mouths","color1" or "color2"| the part to increment or decrement |


## Tests

To run test you simply need to run this following command :
```bash
npm test
```

To update the bundle.js you need to install [Browserify](http://browserify.org/) :
```bash
npm install -g browserify
```
And then run :
```bash
browserify -r ./index.js:svg_avatar > bundle.js
```
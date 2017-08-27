# SvgAvatar

by Gabriel Franck

SvgAvatar is a javascript module assembling different svg object to create an avatar. This will allow us to not store svg files or images of avatars but just the index of each part. 

SvgAvatar wil be designed to support custom librairies of avatars, a tutorial will be coming soon.


## Installation 

Install it via npm :
```
npm install svg_avatar
```

and you just nedd to include it to your javascript project :
```javascript
svgAvatar = require('svg_avatar')
```


## Demo

Here is a link to the live demo


## Usage

### Definition

#### avatar :
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

#### avatar_svg : 
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

Return the value of an avatar converted to string, could be useful to stored into a database

##### Syntax

```javascript
svgAvatar.stringify_avatar(avatar_json) //-> String 
```

|Parameters| value | description|
|---|---|---|
|avatar_json | JSON Object | the avatar value in json |

---

#### render_svg(avatar)

Return an avatar svg value in string

##### Syntax

```javascript
svgAvatar.render_svg(avatar) //-> SVG String
```

|Parameters| value | description|
|---|---|---|
|avatar | Object or String | the avatar value in json or in string |

---

#### random_avatar()

Generate a random avatar object

##### Syntax

```javascript
svgAvatar.random_avatar() //-> avatar Object
```

---

#### render_random_svg()

Generate a random avatar in svg

##### Syntax

```javascript
svgAvatar.render_random_svg() //-> SVG String
```

---

#### next_part_avatar() and previous_part_avatar()

Return an avatar object with a part changed (it loops when max value is reached)

##### Syntax

```javascript
svgAvatar.next_part_avatar(avatar, part) //-> avatar Object
svgAvatar.previous_part_avatar(avatar, part) //-> avatar Object
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
svgAvatar.next_part_svg(avatar, part) //-> SVG String
svgAvatar.previous_part_svg(avatar, part) //-> SVG String
```

|Parameters| value | description|
|---|---|---|
|avatar | Object or String | the avatar value in json or in string |
|part|"forms","eyes","mouths","color1" or "color2"| the part to increment or decrement |


## Tests

to run test you simply need to run this following command : 

```
npm test
```
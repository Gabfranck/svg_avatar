require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "forms":[
    "<rect x='15' y='15' fill='{{color1}}' stroke='{{color2}}' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/>",
  	"<polygon fill='{{color1}}' stroke='{{color2}}' stroke-width='0' stroke-miterlimit='10' points='67.158,225.185 9.316,125 67.158,24.814 182.842,24.814 240.684,125 182.841,225.185 '/>",
  	"<circle fill='{{color1}}' stroke='{{color2}}' stroke-width='0' stroke-miterlimit='10' cx='125' cy='125' r='110'/>",
  	"<polygon fill='{{color1}}' stroke='{{color2}}' stroke-width='0' stroke-miterlimit='10' points='14.659,220.559 125,29.442 235.341,220.559 '/>"
  ]
  ,"eyes":[
  	"<polygon fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/>",
  	"<ellipse fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='172.475' cy='82.448' rx='28.418' ry='29.932'/><ellipse fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='77.525' cy='82.448' rx='28.418' ry='29.932'/>",
  	"<polygon fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='172.475,59.429 195.194,47.485 190.855,72.784 209.236,90.701 183.834,94.393 172.475,117.409 161.115,94.393 135.713,90.701 154.094,72.784 149.754,47.485 '/><polygon fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='77.525,59.429 100.245,47.485 95.906,72.784 114.287,90.701 88.885,94.393 77.525,117.409 66.166,94.393 40.764,90.701 59.145,72.784 54.805,47.485 '/>",
  	"<rect x='144.424' y='58.097' fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='56.1' height='56.101'/><rect x='49.476' y='58.096' fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='56.1' height='56.102'/>"
  ]
  ,"mouths":[
  	"<rect x='59.532' y='175.689' fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/><rect x='59.532' y='159.062' fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/><rect x='172.475' y='159.062' fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/>",
  	"<circle fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='124.999' cy='185.725' r='32.015'/>",
  	"<ellipse fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='125' cy='177.413' rx='61.172' ry='20.072'/>",
  	"<path fill='{{color2}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' d='M190.467,181.111 c0,5.961-4.831,10.792-10.791,10.792H70.322c-5.959,0-10.791-4.831-10.791-10.792l0,0c0-5.96,4.832-10.791,10.791-10.791h109.354 C185.636,170.32,190.467,175.151,190.467,181.111L190.467,181.111z'/>"
  ]
  ,"colors": [
  	"#3941c3",
    "#910822",
    "#78098d",
    "#f4ff00",
    "#EB9423",
    "#009d27"
  ]
}
},{}],"svg_avatar":[function(require,module,exports){
function load_lib(lib){
	if(lib){
		return require(lib)
	}else{
		return require('./avatar_lib.json')	
	}
}


var avatar_lib = load_lib()

function generate_avatar(avatar) {
	f = avatar.form
  	m = avatar.mouth
  	e = avatar.eye
  	c1 = avatar.color1
  	c2 = avatar.color2
   
  	var svg = avatar_lib.forms[f]+avatar_lib.eyes[e]+avatar_lib.mouths[m]
	
  	svgColor1 = svg.replace(/{{color1}}/g,avatar_lib.colors[c1])
  	svgFinal = svgColor1.replace(/{{color2}}/g,avatar_lib.colors[c2])
  	
    return svgFinal
}

function random(){

	var avatar_rand = {};
	avatar_rand.form = Math.floor(Math.random()*avatar_lib.forms.length)
	avatar_rand.eye = Math.floor(Math.random()*avatar_lib.eyes.length)
	avatar_rand.mouth = Math.floor(Math.random()*avatar_lib.mouths.length) 
	avatar_rand.color1 = Math.floor(Math.random()*avatar_lib.colors.length)
	avatar_rand.color2 = Math.floor(Math.random()*avatar_lib.colors.length)
	while(avatar_rand.color1 == avatar_rand.color2) {
		avatar_rand.color2 = Math.floor(Math.random()*avatar_lib.colors.length);
	};
	return avatar_rand
}


function nextPart(avatar,part){
	switch(part) {
	case 'forms':
		if(avatar.form + 1 < avatar_lib.forms.length){
			avatar.form += 1
		}else{
			avatar.form = 0
		}
		break	

    case 'eyes':
		if(avatar.eye + 1 < avatar_lib.eyes.length){
			avatar.eye += 1
		}else{
			avatar.eye = 0
		}
        break

    case 'mouths':
		if(avatar.mouth + 1 < avatar_lib.mouths.length){
			avatar.mouth += 1
		}else{
			avatar.mouth = 0
		}
        break

    case 'color1':
		if(avatar.color1 + 1 < avatar_lib.colors.length){
			avatar.color1 += 1
		}else{
			avatar.color1 = 0
		}
        break

    case 'color2':
		if(avatar.color2 + 1 < avatar_lib.colors.length){
			avatar.color2 += 1
		}else{
			avatar.color2 = 0
		}
    	break
	}

	return avatar
}

function previousPart(avatar,part){
	switch(part) {
	case 'forms':
		if(avatar.form == 0){
			avatar.form = avatar_lib.forms.length -1
		}else{
			avatar.form -= 1
		}
		break	

    case 'eyes':
		if(avatar.eye  == 0){
			avatar.eye = avatar_lib.eyes.length -1
		}else{
			avatar.eye -= 1
		}
        break

    case 'mouths':
		if(avatar.mouth  == 0){
			avatar.mouth = avatar_lib.mouths.length -1
		}else{
			avatar.mouth -= 1
		}
        break

    case 'color1':
		if(avatar.color1  == 0){
			avatar.color1 = avatar_lib.colors.length -1
		}else{
			avatar.color1 -= 1
		}
        break

    case 'color2':
		if(avatar.color2  == 0){
			avatar.color2 = avatar_lib.colors.length -1
		}else{
			avatar.color2 -= 1
		}
    	break
	} 
	return avatar
}

function parse_avatar(avatar){
	if( typeof avatar == 'string'){
    	avatar_parsed = JSON.parse(avatar)
    }else{
    	avatar_parsed = avatar
    }
    return avatar_parsed
}

function avatar_to_string(avatar){
    avatar_parsed = JSON.stringify(avatar)
    return avatar_parsed
}

module.exports = {

    lib_json: function() {
        return avatar_lib
    },

    stringify_avatar: function(avatar_json){
    	return avatar_to_string(avatar_json)
    },

    render_svg: function(avatar){
    	avatar_parsed = parse_avatar(avatar)
    	return generate_avatar(avatar_parsed)
    },

    random_avatar: function() {
        return random()
    },

    render_random_svg: function() {
        return generate_avatar(random())
    },

    next_part_avatar: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)
        return nextPart(avatar_parsed,part)
    },
    next_part_svg: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)
        return generate_avatar(nextPart(avatar_parsed,part))
    },

    previous_part_avatar: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)
        return previousPart(avatar_parsed,part)
    },
    previous_part_svg: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)
        return generate_avatar(previousPart(avatar_parsed,part))
    }

}


},{"./avatar_lib.json":1}]},{},[]);

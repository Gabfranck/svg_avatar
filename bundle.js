require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "form":{
    "pattern":[
      "<rect x='15' y='15' fill='{{color}}'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/>",
  	  "<polygon fill='{{color}}'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='67.158,225.185 9.316,125 67.158,24.814 182.842,24.814 240.684,125 182.841,225.185 '/>",
  	  "<circle fill='{{color}}'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='125' cy='125' r='110'/>",
      "<polygon fill='{{color}}'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='14.659,220.559 125,29.442 235.341,220.559 '/>"
    ],
    "colors":[
      "#3941c3",
      "#910822",
      "#78098d",
      "#f4ff00",
      "#EB9423",
      "#009d27"
    ]
  }
  ,"eye":{
    "pattern":[
  	  "<polygon fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/>",
  	  "<ellipse fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='172.475' cy='82.448' rx='28.418' ry='29.932'/><ellipse fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='77.525' cy='82.448' rx='28.418' ry='29.932'/>",
  	  "<polygon fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='172.475,59.429 195.194,47.485 190.855,72.784 209.236,90.701 183.834,94.393 172.475,117.409 161.115,94.393 135.713,90.701 154.094,72.784 149.754,47.485 '/><polygon fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='77.525,59.429 100.245,47.485 95.906,72.784 114.287,90.701 88.885,94.393 77.525,117.409 66.166,94.393 40.764,90.701 59.145,72.784 54.805,47.485 '/>",
  	  "<rect x='144.424' y='58.097' fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='56.1' height='56.101'/><rect x='49.476' y='58.096' fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='56.1' height='56.102'/>"
    ],
    "colors":[
      "#45f202",
      "#2000ff",
      "#00ff00",
      "#ff0000",
      "#0000ff",
      "#59a682"
    ]
  }
  ,"mouth":{
    "pattern":[
  	   "<rect x='59.532' y='175.689' fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/><rect x='59.532' y='159.062' fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/><rect x='172.475' y='159.062' fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/>",
  	   "<circle fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='124.999' cy='185.725' r='32.015'/>",
  	   "<ellipse fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='125' cy='177.413' rx='61.172' ry='20.072'/>",
  	   "<path fill='{{color}}' stroke='#000000' stroke-width='0' stroke-miterlimit='10' d='M190.467,181.111 c0,5.961-4.831,10.792-10.791,10.792H70.322c-5.959,0-10.791-4.831-10.791-10.792l0,0c0-5.96,4.832-10.791,10.791-10.791h109.354 C185.636,170.32,190.467,175.151,190.467,181.111L190.467,181.111z'/>"
     ],
    "colors":[
      "#45f202",
      "#2000ff",
      "#00ff00",
      "#ff0000",
      "#0000ff",
      "#59a682"
    ]
  }
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
    var svg = ""
    for (var part in avatar) {
      svg += avatar_lib[part].pattern[avatar[part].pattern]
      svg = svg.replace(/{{color}}/g,avatar_lib[part].colors[avatar[part].colors])
    }
    return svg
}

function random(){
	var avatar_rand = {}
  for (var part in avatar_lib) {
    avatar_rand[part] = {}
    avatar_rand[part].pattern = Math.floor(Math.random()*avatar_lib[part].pattern.length)
    avatar_rand[part].colors = Math.floor(Math.random()*avatar_lib[part].colors.length)
  }
	return avatar_rand
}


function change_avatar(avatar, part, change, direction) {
  if (direction == 'next') {
    if (change == 'color') {

      for (var p in avatar_lib) {
        if (p == part){
          if(avatar[p].colors + 1 < avatar_lib[p].colors.length){
        			avatar[p].colors += 1
        		}else{
        			avatar[p].colors = 0
        		}
        }
      }
      return avatar

    }else if (change == 'pattern'){

      for (var p in avatar_lib) {
        if (p == part){
          if(avatar[p].pattern + 1 < avatar_lib[p].pattern.length){
              avatar[p].pattern += 1
            }else{
              avatar[p].pattern = 0
            }
        }
      }
      return avatar

    }
  }else if (direction == 'previous'){
    if (change == 'color') {

      for (var p in avatar_lib) {
        if (p == part){
          if(avatar[p].colors == 0){
        			avatar[p].colors = avatar_lib[p].colors.length - 1
        		}else{
        			avatar[p].colors -= 1
        		}
        }
      }
      return avatar

    }else if (change == 'pattern'){

      for (var p in avatar_lib) {
        if (p == part){
          if(avatar[p].pattern == 0){
        			avatar[p].pattern = avatar_lib[p].pattern.length - 1
        		}else{
        			avatar[p].pattern -= 1
        		}
        }
      }
      return avatar

    }
  }
	return {"error": true, "msg": "Something goes wrong" }
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

function is_valid_avatar(avatar){
			for (var part in avatar_lib) {
				if(avatar[part] != undefined){
					if(avatar[part].pattern == undefined || avatar[part].colors == undefined) return false
				}else {
					return false
				}
			}
			return true
}

function is_valid_part(part){
	for (var p in avatar_lib) {
		if(part == p) return true
	}
  return false
}

function is_valid_direction(direction){
	if(direction == "next" || direction == "previous"){
		return true
	}else {
		return false
	}
}

function is_valid_change(change){
	if(change == "color" || change == "pattern"){
		return true
	}else {
		return false
	}
}

module.exports = {

    lib_json: function() {
        return avatar_lib
    },

    stringify_avatar: function(avatar_json){

    	if(!is_valid_avatar(avatar_json)) return {'error': true, 'msg':'unvalid avatar'}

    	return avatar_to_string(avatar_json)
    },

    render_svg: function(avatar){
    	avatar_parsed = parse_avatar(avatar)

    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

    	return generate_avatar(avatar_parsed)
    },

    random_avatar: function() {
        return random()
    },

    render_random_svg: function() {
        return generate_avatar(random())
    },

    modify_avatar: function(avatar,part,change,direction) {
      avatar_parsed = parse_avatar(avatar)

			if(!is_valid_change(change)) return {'error': true, 'msg':'unvalid argument, for "color" or "pattern" '}
			if(!is_valid_direction(direction)) return {'error': true, 'msg':'unvalid argument, for direction ("next" or "previous") '}
			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
      if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

      return change_avatar(avatar_parsed,part,change,direction)
    },

		modify_avatar_svg: function(avatar,part,color,direction) {
      avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
      if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

        return generate_avatar(change_avatar(avatar_parsed,part,color,direction))
    },

    next_pattern_avatar: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

        return change_avatar(avatar_parsed,part,'pattern','next')
    },
    next_pattern_svg: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

      return generate_avatar(change_avatar(avatar_parsed,part,'pattern','next'))
    },
    next_color_avatar: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

        return change_avatar(avatar_parsed,part,'color','next')
    },
    next_color_svg: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

      return generate_avatar(change_avatar(avatar_parsed,part,'color','next'))
    },

    previous_pattern_avatar: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

        return change_avatar(avatar_parsed,part,'pattern','previous')
    },
    previous_pattern_svg: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

        return generate_avatar(change_avatar(avatar_parsed,part,'pattern','previous'))
    },

    previous_color_avatar: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

        return change_avatar(avatar_parsed,part,'color','previous')
    },
    previous_color_svg: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)

			if(!is_valid_part(part)) return {'error': true, 'msg':'unvalid part'}
    	if(!is_valid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}

        return generate_avatar(change_avatar(avatar_parsed,part,'color','previous'))
    }

}

},{"./avatar_lib.json":1}]},{},[]);

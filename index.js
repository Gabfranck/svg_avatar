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

function is_unvalid_avatar(avatar){
    if(avatar.form == undefined || avatar.eye == undefined ||avatar.mouth == undefined || avatar.color1 == undefined || avatar.color2 == undefined) return true
}

function is_unvalid_part(part){
	if(part != 'forms' && part != 'eyes' && part != 'mouths' && part != 'color1' && part != 'color2' ) return true
}

module.exports = {

    lib_json: function() {
        return avatar_lib
    },

    stringify_avatar: function(avatar_json){

    	if(is_unvalid_avatar(avatar_json)) return {'error': true, 'msg':'unvalid avatar'}

    	return avatar_to_string(avatar_json)
    },

    render_svg: function(avatar){
    	avatar_parsed = parse_avatar(avatar)

    	if(is_unvalid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}
    		
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

    	if(is_unvalid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}
    	if(is_unvalid_part(part)) return {'error': true, 'msg':'unvalid part'}
        
        return nextPart(avatar_parsed,part)
    },
    next_part_svg: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)
    	
    	if(is_unvalid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}
    	if(is_unvalid_part(part)) return {'error': true, 'msg':'unvalid part'}

        return generate_avatar(nextPart(avatar_parsed,part))
    },

    previous_part_avatar: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)
    	
    	if(is_unvalid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}
    	if(is_unvalid_part(part)) return {'error': true, 'msg':'unvalid part'}

        return previousPart(avatar_parsed,part)
    },
    previous_part_svg: function(avatar,part) {
    	avatar_parsed = parse_avatar(avatar)
    	
    	if(is_unvalid_avatar(avatar_parsed)) return {'error': true, 'msg':'unvalid avatar'}
    	if(is_unvalid_part(part)) return {'error': true, 'msg':'unvalid part'}

        return generate_avatar(previousPart(avatar_parsed,part))
    }

}


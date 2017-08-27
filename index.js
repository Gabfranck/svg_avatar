function load_lib(lib){
	if(lib){
		return require(lib)
	}else{
		return require('./avatar_lib.json')	
	}
}


var avatar_lib = load_lib();

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
	avatar_rand.form = Math.floor(Math.random()*avatar_lib.forms.length);
	avatar_rand.eye = Math.floor(Math.random()*avatar_lib.eyes.length);	
	avatar_rand.mouth = Math.floor(Math.random()*avatar_lib.mouths.length); 
	avatar_rand.color1 = Math.floor(Math.random()*avatar_lib.colors.length);
	avatar_rand.color2 = Math.floor(Math.random()*avatar_lib.colors.length);

	return avatar_rand;
}


module.exports = {

    test: function() {
        return 'hello world'
    },

    lib_json: function(toto) {
        return avatar_lib
    },

    render_avatar: function(avatar){
    	return generate_avatar(avatar)
    },

    random_avatar: function() {
        return random()
    },

    change_part: function() {
        return avatar_lib.forms[0]
    }

}


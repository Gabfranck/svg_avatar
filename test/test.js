var should = require('chai').should(),
	svg_avatar = require('../index');

describe('#should work', function() {

	it('lib loaded', function() {
		svg_avatar.lib_json().should.have.all.keys('form', 'eye','mouth')
	})

	it('avatar to string', function() {
		var test_avatar = {"form":{"pattern":0,"colors":0},"mouth":{"pattern":0,"colors":0},"eye":{"pattern":0,"colors":0}}
		var result_avatar = '{"form":{"pattern":0,"colors":0},"mouth":{"pattern":0,"colors":0},"eye":{"pattern":0,"colors":0}}'
		svg_avatar.stringify_avatar(test_avatar).should.equal(result_avatar)
	})

	it('generate svg from object', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		// console.log(svg_avatar.render_svg(test_avatar))
		svg_avatar.render_svg(test_avatar).should.equal("<path d='M249,0.001h239c6.628,0,12,5.373,12,12v476.001c0,6.627-5.373,12-12,12H249'/> <path opacity='0.9' fill='#d32323' d='M500,488.002c0,6.627-5.373,12-12,12H12c-6.627,0-12-5.373-12-12V12.001 c0-6.627,5.373-12,12-12h476c6.628,0,12,5.373,12,12V488.002z'/><path d='M250,321.83c91.232,0,165.19,16.808,165.19,37.543c0,20.736-73.958,37.542-165.19,37.542'/> <path d='M249.781,333.095c-0.028,0-0.056,0-0.084,0v52.557c0.028,0,0.056,0,0.084,0c63.812,0,115.542-11.764,115.542-26.278 S313.593,333.095,249.781,333.095z'/> <ellipse opacity='0.9' fill='#ff2828' cx='250' cy='359.374' rx='115.626' ry='26.278'/> <path opacity='0.9' fill='#3A3A3A' d='M415.19,359.374c0,20.736-73.958,37.542-165.19,37.542c-91.232,0-165.19-16.806-165.19-37.542 c0-20.736,73.958-37.543,165.19-37.543C341.232,321.83,415.19,338.638,415.19,359.374z M250,333.095 c-63.859,0-115.626,11.765-115.626,26.279S186.142,385.651,250,385.651c63.858,0,115.626-11.764,115.626-26.278 S313.859,333.095,250,333.095z'/><ellipse cx='346.533' cy='199.666' rx='78.435' ry='37.591'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='151.467' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M179.937,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M179.937,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='151.467' cy='190.873' r='18.223'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='346.533' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M375.002,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M375.002,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='346.533' cy='190.873' r='18.223'/>")
	})

	it('generate svg from string', function() {
		var test_avatar = '{"form":{"pattern":0,"colors":0},"mouth":{"pattern":0,"colors":0},"eye":{"pattern":0,"colors":0}}'
		// console.log(svg_avatar.render_svg(test_avatar))
		svg_avatar.render_svg(test_avatar).should.equal("<path d='M249,0.001h239c6.628,0,12,5.373,12,12v476.001c0,6.627-5.373,12-12,12H249'/> <path opacity='0.9' fill='#d32323' d='M500,488.002c0,6.627-5.373,12-12,12H12c-6.627,0-12-5.373-12-12V12.001 c0-6.627,5.373-12,12-12h476c6.628,0,12,5.373,12,12V488.002z'/><path d='M250,321.83c91.232,0,165.19,16.808,165.19,37.543c0,20.736-73.958,37.542-165.19,37.542'/> <path d='M249.781,333.095c-0.028,0-0.056,0-0.084,0v52.557c0.028,0,0.056,0,0.084,0c63.812,0,115.542-11.764,115.542-26.278 S313.593,333.095,249.781,333.095z'/> <ellipse opacity='0.9' fill='#ff2828' cx='250' cy='359.374' rx='115.626' ry='26.278'/> <path opacity='0.9' fill='#3A3A3A' d='M415.19,359.374c0,20.736-73.958,37.542-165.19,37.542c-91.232,0-165.19-16.806-165.19-37.542 c0-20.736,73.958-37.543,165.19-37.543C341.232,321.83,415.19,338.638,415.19,359.374z M250,333.095 c-63.859,0-115.626,11.765-115.626,26.279S186.142,385.651,250,385.651c63.858,0,115.626-11.764,115.626-26.278 S313.859,333.095,250,333.095z'/><ellipse cx='346.533' cy='199.666' rx='78.435' ry='37.591'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='151.467' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M179.937,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M179.937,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='151.467' cy='190.873' r='18.223'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='346.533' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M375.002,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M375.002,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='346.533' cy='190.873' r='18.223'/>")
	})

	it('random avatar', function() {
		svg_avatar.random_avatar().should.have.all.keys('form', 'eye','mouth')
	})

	it('render random svg', function() {
		// console.log(svg_avatar.render_random_svg())
		svg_avatar.render_random_svg().should.be.a('string')
	})
	it('modify avatar', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		var result_avatar = {'form':{"pattern":1,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.modify_avatar(test_avatar, 'form', 'pattern', 'next').should.deep.equal(result_avatar)
	})

	it('modify avatar svg', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		var result_avatar = "<path d='M250,0.001c138.071,0,250,111.929,250,250S388.071,500.002,250,500.002'/> <circle opacity='0.9' fill='#d32323' cx='250' cy='250' r='250'/><path d='M250,321.83c91.232,0,165.19,16.808,165.19,37.543c0,20.736-73.958,37.542-165.19,37.542'/> <path d='M249.781,333.095c-0.028,0-0.056,0-0.084,0v52.557c0.028,0,0.056,0,0.084,0c63.812,0,115.542-11.764,115.542-26.278 S313.593,333.095,249.781,333.095z'/> <ellipse opacity='0.9' fill='#ff2828' cx='250' cy='359.374' rx='115.626' ry='26.278'/> <path opacity='0.9' fill='#3A3A3A' d='M415.19,359.374c0,20.736-73.958,37.542-165.19,37.542c-91.232,0-165.19-16.806-165.19-37.542 c0-20.736,73.958-37.543,165.19-37.543C341.232,321.83,415.19,338.638,415.19,359.374z M250,333.095 c-63.859,0-115.626,11.765-115.626,26.279S186.142,385.651,250,385.651c63.858,0,115.626-11.764,115.626-26.278 S313.859,333.095,250,333.095z'/><ellipse cx='346.533' cy='199.666' rx='78.435' ry='37.591'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='151.467' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M179.937,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M179.937,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='151.467' cy='190.873' r='18.223'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='346.533' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M375.002,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M375.002,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='346.533' cy='190.873' r='18.223'/>"
		svg_avatar.modify_avatar_svg(test_avatar, 'form', 'pattern', 'next').should.deep.equal(result_avatar)
	})

	it('next pattern', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		var result_avatar = {'form':{"pattern":1,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.next_pattern_avatar(test_avatar, 'form').should.deep.equal(result_avatar)
	})
	it('next colors', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		var result_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":1}}
		svg_avatar.next_color_avatar(test_avatar, 'eye').should.deep.equal(result_avatar)
	})

	it('previous pattern', function() {
		var test_avatar = {'form':{"pattern":1,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		var result_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.previous_pattern_avatar(test_avatar, 'form').should.deep.equal(result_avatar)
	})
	it('previous colors', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":1}}
		var result_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.previous_color_avatar(test_avatar, 'eye').should.deep.equal(result_avatar)
	})

	it('next pattern svg', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		var result_avatar = "<path d='M249,0.001h239c6.628,0,12,5.373,12,12v476.001c0,6.627-5.373,12-12,12H249'/> <path opacity='0.9' fill='#d32323' d='M500,488.002c0,6.627-5.373,12-12,12H12c-6.627,0-12-5.373-12-12V12.001 c0-6.627,5.373-12,12-12h476c6.628,0,12,5.373,12,12V488.002z'/><polygon points='335.734,359.106 258.354,359.106 250,359.106 250,392.198 255.943,392.198 358.094,392.198 434.646,308.599'/> <path opacity='0.9' fill='#ff2828' d='M258.354,359.106h-94.087l-98.912-50.508l76.553,83.6h114.035h-11.884h114.035l76.553-83.6 l-98.913,50.508h-94.087'/> <polygon fill='#FFFFFF' points='212.743,326.548 221.668,392.198 157.668,392.198 165.25,326.579'/><ellipse cx='346.533' cy='199.666' rx='78.435' ry='37.591'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='151.467' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M179.937,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M179.937,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='151.467' cy='190.873' r='18.223'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='346.533' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M375.002,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M375.002,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='346.533' cy='190.873' r='18.223'/>"
		svg_avatar.next_pattern_svg(test_avatar, 'mouth').should.deep.equal(result_avatar)
	})

	it('previous pattern svg', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		var result_avatar = "<path d='M249,0.001h239c6.628,0,12,5.373,12,12v476.001c0,6.627-5.373,12-12,12H249'/> <path opacity='0.9' fill='#d32323' d='M500,488.002c0,6.627-5.373,12-12,12H12c-6.627,0-12-5.373-12-12V12.001 c0-6.627,5.373-12,12-12h476c6.628,0,12,5.373,12,12V488.002z'/><polyline points='250,290.21 275.511,341.9 332.554,350.189 291.277,390.424 301.021,447.237 250,420.414 '/> <path opacity='0.9' fill='#3A3A3A' d='M250,290.21l25.511,51.69l57.043,8.289l-41.276,40.235l9.743,56.813L250,420.414 l-51.021,26.824l9.743-56.813l-41.276-40.235l57.044-8.289L250,290.21z M231.598,354.144l-41.151,5.979l29.776,29.025l-7.028,40.984 L250,410.783l36.806,19.35l-7.028-40.984l29.776-29.025l-41.15-5.979L250,316.855L231.598,354.144z'/> <polygon opacity='0.9' fill='#ff2828' points='250,316.835 268.403,354.124 309.554,360.103 279.777,389.128 286.806,430.113 250,410.763 213.194,430.113 220.223,389.128 190.446,360.103 231.598,354.124 '/><ellipse cx='346.533' cy='199.666' rx='78.435' ry='37.591'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='151.467' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M179.937,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M179.937,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='151.467' cy='190.873' r='18.223'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='346.533' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='#ff2828' d='M375.002,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M375.002,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='346.533' cy='190.873' r='18.223'/>"
		svg_avatar.previous_pattern_svg(test_avatar, 'mouth').should.deep.equal(result_avatar)
	})
})

describe('#should fail', function() {

	it('avatar to string fail avatar', function() {
		var test_avatar = {'form':{"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.stringify_avatar(test_avatar).should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('generate svg from object fail avatar', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.render_svg(test_avatar).should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('generate svg from string fail avatar', function() {
		var test_avatar = '{"form":{"pattern":0,"colors":0},"mouth":{"pattern":0,"colors":0},"eye":{"colors":0}}'
		svg_avatar.render_svg(test_avatar).should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('modify avatar pattern', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.modify_avatar(test_avatar, 'form','toto','next').should.deep.equal({'error': true, 'msg':'unvalid argument, for "color" or "pattern" '})
	})

	it('modify avatar direction', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.modify_avatar(test_avatar, 'form','pattern','toto').should.deep.equal({'error': true, 'msg':'unvalid argument, for direction ("next" or "previous") '})
	})

	it('next pattern fail part', function() {
		var test_avatar = {'forms':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.next_pattern_avatar(test_avatar, 'toto').should.deep.equal({'error': true, 'msg':'unvalid part'})
	})

	it('next pattern fail avatar', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"colors":0}}
		svg_avatar.next_pattern_avatar(test_avatar, 'eye').should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('next pattern svg fail part', function() {
		var test_avatar = {'forms':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		svg_avatar.next_pattern_svg(test_avatar, 'toto').should.deep.equal({'error': true, 'msg':'unvalid part'})	})

	it('next pattern svg fail avatar', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"colors":0}}
		svg_avatar.next_pattern_svg(test_avatar, 'eye').should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('next colors fail part', function() {
	  var test_avatar = {'forms':{"colors":0,"colors":0},'mouth':{"colors":0,"colors":0},'eye':{"colors":0,"colors":0}}
	  svg_avatar.next_color_avatar(test_avatar, 'toto').should.deep.equal({'error': true, 'msg':'unvalid part'})
	})

	it('next colors fail avatar', function() {
	  var test_avatar = {'form':{"colors":0,"colors":0},'mouth':{"colors":0,"colors":0},'eye':{"colors":0}}
	  svg_avatar.next_color_avatar(test_avatar, 'eye').should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('next colors svg fail part', function() {
	  var test_avatar = {'forms':{"colors":0,"colors":0},'mouth':{"colors":0,"colors":0},'eye':{"colors":0,"colors":0}}
	  svg_avatar.next_color_svg(test_avatar, 'toto').should.deep.equal({'error': true, 'msg':'unvalid part'})	})

	it('next colors svg fail avatar', function() {
	  var test_avatar = {'form':{"colors":0,"colors":0},'mouth':{"colors":0,"colors":0},'eye':{"colors":0}}
	  svg_avatar.next_color_svg(test_avatar, 'eye').should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})
	it('previous pattern fail part', function() {
	  var test_avatar = {'forms':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
	  svg_avatar.previous_pattern_avatar(test_avatar, 'toto').should.deep.equal({'error': true, 'msg':'unvalid part'})
	})

	it('previous pattern fail avatar', function() {
	  var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"colors":0}}
	  svg_avatar.previous_pattern_avatar(test_avatar, 'eye').should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('previous pattern svg fail part', function() {
	  var test_avatar = {'forms':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
	  svg_avatar.previous_pattern_svg(test_avatar, 'toto').should.deep.equal({'error': true, 'msg':'unvalid part'})	})

	it('previous pattern svg fail avatar', function() {
	  var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"colors":0}}
	  svg_avatar.previous_pattern_svg(test_avatar, 'eye').should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('previous colors fail part', function() {
	  var test_avatar = {'forms':{"colors":0,"colors":0},'mouth':{"colors":0,"colors":0},'eye':{"colors":0,"colors":0}}
	  svg_avatar.previous_color_avatar(test_avatar, 'toto').should.deep.equal({'error': true, 'msg':'unvalid part'})
	})

	it('previous colors fail avatar', function() {
	  var test_avatar = {'form':{"colors":0,"colors":0},'mouth':{"colors":0,"colors":0},'eye':{"colors":0}}
	  svg_avatar.previous_color_avatar(test_avatar, 'eye').should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

	it('previous colors svg fail part', function() {
	  var test_avatar = {'forms':{"colors":0,"colors":0},'mouth':{"colors":0,"colors":0},'eye':{"colors":0,"colors":0}}
	  svg_avatar.previous_color_svg(test_avatar, 'toto').should.deep.equal({'error': true, 'msg':'unvalid part'})	})

	it('previous colors svg fail avatar', function() {
	  var test_avatar = {'form':{"colors":0,"colors":0},'mouth':{"colors":0,"colors":0},'eye':{"colors":0}}
	  svg_avatar.previous_color_svg(test_avatar, 'eye').should.deep.equal({'error': true, 'msg':'unvalid avatar'})
	})

})

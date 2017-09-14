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
		svg_avatar.render_svg(test_avatar).should.equal("<rect x='15' y='15' fill='#3941c3'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><rect x='59.532' y='175.689' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/><rect x='59.532' y='159.062' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/><rect x='172.475' y='159.062' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/>")
	})

	it('generate svg from string', function() {
		var test_avatar = '{"form":{"pattern":0,"colors":0},"mouth":{"pattern":0,"colors":0},"eye":{"pattern":0,"colors":0}}'
		// console.log(svg_avatar.render_svg(test_avatar))
		svg_avatar.render_svg(test_avatar).should.equal("<rect x='15' y='15' fill='#3941c3'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><rect x='59.532' y='175.689' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/><rect x='59.532' y='159.062' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/><rect x='172.475' y='159.062' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/>")
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
		var result_avatar = "<polygon fill='#3941c3'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='67.158,225.185 9.316,125 67.158,24.814 182.842,24.814 240.684,125 182.841,225.185 '/><rect x='59.532' y='175.689' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/><rect x='59.532' y='159.062' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/><rect x='172.475' y='159.062' fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/>"
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
		var result_avatar = "<rect x='15' y='15' fill='#3941c3'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><circle fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='124.999' cy='185.725' r='32.015'/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/>"
		svg_avatar.next_pattern_svg(test_avatar, 'mouth').should.deep.equal(result_avatar)
	})

	it('previous pattern svg', function() {
		var test_avatar = {'form':{"pattern":0,"colors":0},'mouth':{"pattern":0,"colors":0},'eye':{"pattern":0,"colors":0}}
		var result_avatar = "<rect x='15' y='15' fill='#3941c3'  stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><path fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' d='M190.467,181.111 c0,5.961-4.831,10.792-10.791,10.792H70.322c-5.959,0-10.791-4.831-10.791-10.792l0,0c0-5.96,4.832-10.791,10.791-10.791h109.354 C185.636,170.32,190.467,175.151,190.467,181.111L190.467,181.111z'/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#45f202' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/>"
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

var should = require('chai').should(),
    svg_avatar = require('../index');

describe('#test', function() {
	
  it('lib loaded', function() {
  	svg_avatar.lib_json().should.have.all.keys('forms', 'eyes','mouths','colors')
  })

  it('avatar to string', function() {
  	var test_avatar = {'form':0,'mouth':0,'eye':0,'color1':0,'color2':0}
  	var result_avatar = '{"form":0,"mouth":0,"eye":0,"color1":0,"color2":0}'
  	svg_avatar.stringify_avatar(test_avatar).should.equal(result_avatar)
  })

  it('generate svg from object', function() {
  	var test_avatar = {'form':0,'mouth':0,'eye':0,'color1':0,'color2':0}
    console.log(svg_avatar.render_svg(test_avatar))
    svg_avatar.render_svg(test_avatar).should.equal("<rect x='15' y='15' fill='#3941c3' stroke='#3941c3' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/><rect x='59.532' y='175.689' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/><rect x='59.532' y='159.062' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/><rect x='172.475' y='159.062' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/>")
  })

  it('generate svg from string', function() {
  	var test_avatar = '{"form":0,"eye":0,"mouth":0,"color1":0,"color2":0}'
    console.log(svg_avatar.render_svg(test_avatar))
    svg_avatar.render_svg(test_avatar).should.equal("<rect x='15' y='15' fill='#3941c3' stroke='#3941c3' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/><rect x='59.532' y='175.689' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/><rect x='59.532' y='159.062' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/><rect x='172.475' y='159.062' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/>")
  })

  it('random avatar', function() {
    svg_avatar.random_avatar().should.have.all.keys('form', 'eye','mouth','color1','color2')	
  })

  it('render random svg', function() {
    console.log(svg_avatar.render_random_svg())
    svg_avatar.render_random_svg().should.be.a('string')	
  })

  it('next part', function() {
  	var test_avatar = {'form':0,'mouth':0,'eye':0,'color1':0,'color2':0}
    var result_avatar = {'form': 0,'mouth': 0,'eye': 1,'color1': 0,'color2': 0}
    svg_avatar.next_part_avatar(test_avatar, 'eyes').should.deep.equal(result_avatar)
  })

  it('previous part', function() {
  	var test_avatar = {'form': 0,'mouth': 0,'eye': 1,'color1': 0,'color2': 0}
    var result_avatar = {'form':0,'mouth':0,'eye':0,'color1':0,'color2':0}
    svg_avatar.previous_part_avatar(test_avatar, 'eyes').should.deep.equal(result_avatar)
  })

  it('next part svg', function() {
  	var test_avatar = {'form':0,'mouth':0,'eye':0,'color1':0,'color2':0}
  	var result_avatar = "<rect x='15' y='15' fill='#3941c3' stroke='#3941c3' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/><circle fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' cx='124.999' cy='185.725' r='32.015'/>"
    svg_avatar.next_part_svg(test_avatar, 'mouths').should.deep.equal(result_avatar)
  })

  it('previous part svg', function() {
  	var test_avatar = {'form':0,'mouth':0,'eye':0,'color1':0,'color2':0}
    var result_avatar = "<rect x='15' y='15' fill='#3941c3' stroke='#3941c3' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/><path fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' d='M190.467,181.111 c0,5.961-4.831,10.792-10.791,10.792H70.322c-5.959,0-10.791-4.831-10.791-10.792l0,0c0-5.96,4.832-10.791,10.791-10.791h109.354 C185.636,170.32,190.467,175.151,190.467,181.111L190.467,181.111z'/>"
    svg_avatar.previous_part_svg(test_avatar, 'mouths').should.deep.equal(result_avatar)
  })
})

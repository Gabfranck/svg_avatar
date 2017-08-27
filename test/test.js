var should = require('chai').should(),
    svg_avatar = require('../index');

describe('#test', function() {

  it('it works', function() {
    svg_avatar.test().should.equal('hello world')
  })

  it('lib loaded', function() {
  	svg_avatar.lib_json('toto').should.have.all.keys('forms', 'eyes','mouths','colors');
  })

  it('generate avatar', function() {
  	var test_avatar = {'form':'0','mouth':'0','eye':'0','color1':'0','color2':'0'}
    svg_avatar.render_avatar(test_avatar).should.equal("<rect x='15' y='15' fill='#3941c3' stroke='#3941c3' stroke-width='0' stroke-miterlimit='10' width='220' height='220'/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='111.5,113.08 48.84,92.974 97.583,48.761 '/><polygon fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' points='141.144,114.607 203.804,94.5 155.061,50.288 '/><rect x='59.532' y='175.689' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='130.936' height='20.073'/><rect x='59.532' y='159.062' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.994' height='36.7'/><rect x='172.475' y='159.062' fill='#3941c3' stroke='#000000' stroke-width='0' stroke-miterlimit='10' width='17.993' height='36.7'/>")
  })

  it('random avatar', function() {
    svg_avatar.random_avatar().should.have.all.keys('form', 'eye','mouth','color1','color2');	
  })

})

const games = {
	'z3' : {'e' : 'snes', 'f' : 'zelda3.sfc'},
	'zla' : {'e' : 'gba', 'f' : 'zla.gbc'},
	'wl' : {'e' : 'gba', 'f' : 'wl.gb'}
}


function $_GET(param) {
var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}

	return vars;
}

function getG() {
	return (games[$_GET('g')] || games['z3']);
} 

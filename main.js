function apply_theme(theme) {
	fg_color = ' ';
	bg_color = ' ';
	if(theme == null) {
		theme = 'Light';
	}
	if (theme == 'Light') {
		fg_color = 'black';
		bg_color = 'white';
	}
	if(theme == 'Dark') {
		fg_color = 'white';	
		bg_color = 'black';
	}
	if(theme == 'red') {
		fg_color = 'black';
		bg_color = 'red';
	}
	if(theme == 'blue') {
		fg_color = 'red';
		bg_color = 'blue';
	}
	document.body.style.color = fg_color;
	document.body.style.backgroundColor = bg_color;
	localStorage.setItem('theme', theme);
	var list = document.querySelectorAll('a');	
	list.forEach(function(el){ 
			el.style.color = fg_color;
	})
}
var saved_theme = localStorage.getItem('theme');
apply_theme(saved_theme);

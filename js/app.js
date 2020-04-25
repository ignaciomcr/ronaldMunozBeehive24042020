"use strict"
window.addEventListener('load', init, false);

function init() {
	this.bees = [];
	
	var url = 'https://beehive-270a2.firebaseio.com/data/users.json';

	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.send();
	request.onreadystatechange = processRequest;

	 function processRequest(e) {
		var request = e.target;

		if (request.readyState === 4) {
			switch (request.status) {
				case 200:
					console.log('OK');
					processResponse(request.responseText);
					break;
				case 404:
					console.log('Error');
					break;
			}
		}
	}
	
	//-------------------------------------------BEES -------------------------------------
	function processResponse(text){

		var data = JSON.parse(text);
		
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var bee = data[key];
				bees.push(new Bee(bee.id,bee.name, bee.username, bee.email, bee.phone ,bee.address.city));
			}
		}

		//var beesComponent = 
		new BeesComponent(bees, 'nada');
			
	}  
	 

}
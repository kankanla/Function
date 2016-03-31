

function $_GET(q){
	var array = {};
	var search = location.search.split('?')[1].split('&');
	for(var i = 0; i < search.length; i++){
		var x = search[i].split('=');
		array[x[0]]=x[1];
	}

	if(q){
		return array[q];
	}else{
		return array;
	}
}



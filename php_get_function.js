

function $_GET(q){
	var temp = {};
	var search = location.search.split('?')[1].split('&');
	for(var i = 0; i < search.length; i++){
		var para = search[i].split('=');
		temp[para[0]]=para[1];
	}

	if(q){
		return temp[q];
		// return temp.q;	// NG
	}else{
		return temp;
	}
}



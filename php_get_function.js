function $_GET(q){
    if(location.search.length > 0){
    	var temp = {};
        var search = location.search.split('?')[1].split('&');
     	    for(var i = 0; i < search.length; i++){
                var para = search[i].split('=');
                temp[para[0]]=para[1];
        	}

        if(q && temp[q]){
        	// youfunction(temp[q]);
                // return temp.q; // NG
                return temp[q];
        }else{
        	// console.log(temp);
                return temp;
        }
    }
}

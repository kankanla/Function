function fn_replace(q){
	var x = {'&'   :   '%26', 
			 '"'   :   '%22',
			 ' '   :   '+',
			 '%20' :   '+',
			 '\n'  :   '%0d%0a'
			 };

	for(var i in x){
		q= q.replace(RegExp(i,'g'),x[i]);
	}
	return q;
}
var stringtype = "mystring",
        bool = true,
        numbertype = 10,
		fname = "firstname",
		lname = "lastname",
		num = 13,
		num1 = "13";
		
        /*count up to 10*/
        for ( var i = 0; i <= 10; i++ ) {
		console.log(i);
		}
		/*count down to 0*/
		for ( var i = 10; i >= 0; i-- ) {

        console.log(i);
		}
		/*compare fname and lname*/
		if(fname == lname) {
		console.log("shits the same");
		}else{
		console.log("shits not the same");
		}
		/*comapare if the same and same type */
		if(fname === lname) {
		console.log("shits the same");
		}else{
		console.log("shits not the same");
		}
		/*compares num to num1 to see if the numbers are the same*/
		if(num == num1) {
		console.log("shits the same");
		}else{
		console.log("shits not the same");
		}
		/*compares num to num1 to see if the numbers are the same and the type is the same*/
		if(num === num1) {
		console.log("shits the same");
		}else{
		console.log("shits not the same");
		}
    console.log("before");
    console.log(stringtype);
    
    stringtype = stringtype + " more string";
    
    console.log("after");
    console.log(stringtype);

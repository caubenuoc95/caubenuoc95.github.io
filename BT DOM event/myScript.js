function key(val){
	document.getElementById("d").value+=val;
}

function reset(val) {
    document.getElementById("d").value=val;
}

function calculate(){
	try {
        reset(eval(document.getElementById("d").value))
    }
    catch(calculate) {
        reset('error')
    }
}
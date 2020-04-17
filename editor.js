window.addEventListener('load',function() {
	var canvas= document.querySelector('canvas');
	var c=canvas.getContext('2d');


	//canvas-size
	canvas.width=window.innerWidth;
	canvas.height=window.InnerHeight;
    

    //flag
    var painting= false;

    function start(){
    	painting= true;
        draw(event);
    }
   

    function end(){
    	painting= false;
    	c.beginPath();

    }


    //drawing function

    function draw(event){

    if(!painting) return;
     c.lineWidth =5;
     c.lineCap='round';
     c.lineTo(event.clientX,event.clientY);
     c.stroke();
     c.beginPath();
     c.moveTo(event.clientX,event.clientY);

    }
   


    // Event listner
   canvas.addEventListener("mousedown",start);
   canvas.addEventListener("mouseup",end);
   canvas.addEventListener("mousemove",draw);
   

})

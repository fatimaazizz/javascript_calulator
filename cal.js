var num="";
var dotcanappear=true;
var oldnum="";
var operatornotpresent=true;
var operator="";
var error=false;
//adding numbers
function add1()
{ 
    if( num=="" || error==true)
	{num="1";
     console.log(num);
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
	{
     num+="1";
	 console.log(num);
	 document.getElementById('input').innerHTML = num;
	}

}
function add2()
{ if( num=="" || error==true)
	{num="2";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
	{
    num+="2";
	 document.getElementById('input').innerHTML = num;
	}
}
function add3()
{ if( num=="" || error==true)
	{num="3";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
	{
     num+="3";
	 document.getElementById('input').innerHTML = num;
	}
}
function add4()
{    if( num=="" || error==true)
	{num="4";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
	{
     num+="4";
	 document.getElementById('input').innerHTML = num;
	}
}
function add5()
{ if( num=="" || error==true)
	{num="5";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
	{
     num+="5";
	 document.getElementById('input').innerHTML = num;
	}
}
function add6()
{    if( num=="" || error==true)
	{num="6";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
    {num+="6";
	 document.getElementById('input').innerHTML = num;
     }
}
function add7()
{ if( num=="" || error==true)
	{num="7";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
	{num+="7";
	 document.getElementById('input').innerHTML = num;
	}
}
function add8()
{    if( num=="" || error==true)
	{num="1";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
    {num+="8";
	 document.getElementById('input').innerHTML = num;
     }   
}
function add9()
{ 
if( num=="" || error==true)
	{num="9";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
   {
     num+="9";
	 document.getElementById('input').innerHTML = num;
   }
}
function add0()
{if( num=="" || error==true)
	{num="0";
	 document.getElementById('input').innerHTML = num;
		error=false;
	}
	else
	{ num+="0";
	 document.getElementById('input').innerHTML = num;
}
}
function adddot()
{ if(dotcanappear==true && error==false)
	{
     num+=".";
	 document.getElementById('input').innerHTML = num;
     dotcanappear=false;
	}
}

//operators function;
function plus()
{ if(operatornotpresent==true && num!="" && error==false)
	{
      oldnum=num; 
      console.log(oldnum);
      num="";
      operator="+";document.getElementById('input').innerHTML = num;
	  document.getElementById('input').innerHTML = num;
      dotcanappear=true;
	  operatornotpresent=false;
	}
   
}
function minus()
{  if(operatornotpresent==true && num!="" && error==false)
	{
      oldnum=num; 
      console.log(oldnum);
      num="";
	  document.getElementById('input').innerHTML = num;
      operator="-";
      dotcanappear=true;
	  operatornotpresent=false;
	}
   
}
function mul()
{ if(operatornotpresent==true &&num!=""&& error==false)
	{
      oldnum=num; 
      console.log(oldnum);
	  
      num="";
	  document.getElementById('input').innerHTML = num;
      operator="*";
      dotcanappear=true;
	  operatornotpresent=false;
	}
   
}
function divs()
{  if(operatornotpresent==true && num!=""  && error==false)
	{
      oldnum=num; 
      console.log(oldnum);
	  
      num="";
      operator="/";
	  document.getElementById('input').innerHTML = num;
      dotcanappear=true;
	  operatornotpresent=false;
	}
   
}
//equals
function equals()
{
	console.log(num);
	console.log(oldnum);
	if(operator=="+")
	{
	if(oldnum!="")
	{ num=parseFloat(num);
      oldnum=parseFloat(oldnum);
	  num=num+oldnum;
	  console.log(num);
	  
		
	}
	}
	else if(operator=="-")
	{
	if(oldnum!="")
	{ num=parseFloat(num);
      oldnum=parseFloat(oldnum);
	  num=oldnum-num;
	  console.log(num);
	  
		document.getElementById('input').innerHTML = num;
	}
	}
	else if(operator=="*")
	{
	if(oldnum!="")
	{ num=parseFloat(num);
      oldnum=parseFloat(oldnum);
	  num=oldnum*num;
	  console.log(num);
	  document.getElementById('input').innerHTML = num;
		
	}
	}
	else if(operator=="/")
	{
		
	if(oldnum!="")
	{ 
     num=parseFloat(num);
      oldnum=parseFloat(oldnum);
	  if(num!=0)
	  {
	  num=oldnum/num;
	  console.log(num);
	  document.getElementById('input').innerHTML = num;
	  }
	  else 
	  {
		  document.getElementById('input').innerHTML = 'math error';
		  error=true;
	  }
	  
		
	}
	}
	
	

	
	operatornotpresent=true;
	operator="";
    dotcanappear=true;
	
}


function clearr()
{
	console.log(num);
	num="";
	oldnum="";
	operator="";
    dotcanappear=true;
	document.getElementById('input').innerHTML = num;
	

	
}
function backk()
{
	if(num!="")
	{
	  num=num.slice(0,-1);
	  document.getElementById('input').innerHTML = num;
	
	}
}




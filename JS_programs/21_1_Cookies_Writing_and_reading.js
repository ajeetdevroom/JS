// "document.cookie = "key1 = value1; key2 = value2; expires = date";
// WriteCookie
function WriteCookie() {  
    if( document.myform.customer.value == "" ){  
       alert ("Enter some value!");  
       return;  
    }  
    var now = new Date();  
    now.setMonth( now.getMonth() + 1 );  
    cookievalue = escape(document.myform.customer.value) + ";"  
    document.cookie = "name = " + cookievalue;  
    document.cookie = "expires = " + now.toUTCString() + ";"  
    document.write ("Setting Cookies : " + "name = " + cookievalue );    
 }
//  <body> 
//  <form name = "myform" action = ""> 
//     Enter Cookie Name: <input type = "text" name = "customer"/> 
//     <input type = "button" value = "Set Cookie" onclick = "WriteCookie()"/> 
//  </form> 
// </body>

//  ReadCookie
 function ReadCookie() {  
    var allcookies  =  document.cookie;  
    document.write ("All Cookies : " + allcookies ); 
 } 
 // Get all the cookies pairs in an array  
 cookiearray = allcookies.split(';');  
 
 // Now take key value pair out of this array  
 for(var i = 0; i<cookiearray.length; i++) {  
    name  =  cookiearray[i].split('=')[0];  
    value = cookiearray[i].split('=')[1];  
    document.write ("Key is : " + name + " and Value is : " + value); 
 }  
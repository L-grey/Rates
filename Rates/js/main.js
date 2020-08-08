window.onload = function(){
/*
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange= function (){
        if (xhttp.readyState==4 && xhttp.status==200){
            var obj = JSON.parse(xhttp.response);
            document.getElementById('demo').innerHTML= javaobj.rates;
        }
    };
    xhttp.open("GET","currencies.json",true)
    xhttp.send();
*/


    var data = `{"success":true,"timestamp":1596461944,"base":"EUR","date":"2020-08-03","rates":{"USD":1.17055,"AUD":1.652887,"CAD":1.573722,"BGN":1.952208}}`

    var obj = JSON.parse(data);
    var objRates = obj.rates
    var arrObjRates = Object.entries(objRates);
    var div = document.getElementById('demo');
    var tbody = document.getElementById('tbody');

    for (var i=0;i<arrObjRates.length; i ++){
        var a = arrObjRates[i];
        var row = document.createElement('tr');
        for(var j=0; j<a.length; j ++){
            var c= a[j];
          if (typeof c=='number'){
            c = parseFloat(c).toFixed(4);
        }
        else {
            c = (obj.base).concat(c);
        }
            var cell = document.createElement('td');
            var cellText = document.createTextNode(c);
            cell.appendChild(cellText);
            row.appendChild(cell);
            
        }
        tbody.appendChild(row);
    }            
        
    var f = document.getElementsByTagName('td');
    
    var time = 1;

    var interval = setInterval(function() { 
    if (time <= 12) { 
        time++;
        for(let b =1; b<f.length;b++){
            if(b % 2 === 1){
                var m = f[b].innerHTML;
              var l = f[b].innerHTML= (parseFloat(f[b].innerHTML) + 0.0001).toFixed(4);
                if(+m<+l){
                    f[b].style.backgroundColor='#27a79f';
                }
                m = l;
            }
        }
    
    }
    else { 
        clearInterval(interval);
    
        var timesec = 1;

        var intervalsec = setInterval(function() { 
        if (timesec <= 12) { 
            timesec++;
            for(let b =1; b<f.length;b++){
                if(b % 2 === 1){
                    var m = f[b].innerHTML;
                  var l = f[b].innerHTML= (parseFloat(f[b].innerHTML) - 0.0001).toFixed(4);
                    if(+m>+l){
                        f[b].style.backgroundColor='#ef5350';
                    }
                    m = l;
                }
            }
        
        }
        else { 
            clearInterval(intervalsec);
            var timeThird = 1;

            var intervalThird = setInterval(function() { 
            if (timeThird <= 12) { 
                timeThird++;
                for(let b =1; b<f.length;b++){
                    if(b % 2 === 1){
                        var m = f[b].innerHTML;
                    var l = f[b].innerHTML= (parseFloat(f[b].innerHTML) + 0.0001).toFixed(4);
                        if(+m<+l){
                            f[b].style.backgroundColor='#27a79f';
                        }
                        m = l;
                    }
                }
            
            }
            else { 
                clearInterval(intervalThird);
                var timeFourth = 1;

                var intervalFourth = setInterval(function() { 
                if (timeFourth <= 12) { 
                    timeFourth++;
                    for(let b =1; b<f.length;b++){
                        if(b % 2 === 1){
                            var m = f[b].innerHTML;
                        var l = f[b].innerHTML= (parseFloat(f[b].innerHTML) - 0.0001).toFixed(4);
                            if(+m>+l){
                                f[b].style.backgroundColor='#ef5350';
                            }
                            m = l;
                        }
                    }
                
                }
                else { 
                    clearInterval(intervalFourth);
                    var timeFifth = 1;

                    var intervalFifth = setInterval(function() { 
                    if (timeFifth <= 12) { 
                        timeFifth++;
                        for(let b =1; b<f.length;b++){
                            if(b % 2 === 1){
                                var m = f[b].innerHTML;
                              var l = f[b].innerHTML= (parseFloat(f[b].innerHTML) + 0.0001).toFixed(4);
                                if(+m<+l){
                                    f[b].style.backgroundColor='#27a79f';
                                }
                                m = l;
                            }
                        }
                    
                    }
                    else { 
                        clearInterval(intervalFifth);
                        
                    }
                    }, 5000);
                }
                }, 5000);
            }
            }, 5000);
        }
        }, 5000);
    }
    }, 5000);   
      

    

}
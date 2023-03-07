document.getElementById('submitButton').onclick = function(){
    
    a = Number(document.getElementById('aSideInput').value)  
    b = Number(document.getElementById('bSideInput').value)

    if(a == 0 || b == 0){

        alert('You must enter a value larger than zero.')
        document.getElementById('aSideInput').value = ''
        document.getElementById('bSideInput').value = ''
        document.getElementById('cOutput').innerHTML = ''
    }
    
    if(typeof(b) !== 'number' && typeof(a) !== 'number'){

        alert('You must enter a number.')
        document.getElementById('aSideInput').value = ''
        document.getElementById('bSideInput').value = ''
        document.getElementById('cOutput').innerHTML = ''
    }

    if(typeof(b) == 'number' && typeof(a) == 'number'){

        c = String((Math.pow(a, 2) + Math.pow(b, 2)))

        document.getElementById('cOutput').innerHTML = c
        if(c=='NaN'){
            alert('You must enter number values for A and B')
            document.getElementById('cOutput').innerHTML = ''
        }else if(c == 0){
            document.getElementById('cOutput').innerHTML = ''
        }
    }   
document.getElementById('clearButton').onclick = function(){
    document.getElementById('aSideInput').value = ''
    document.getElementById('bSideInput').value = ''
    document.getElementById('cOutput').innerHTML = ''
    }
}
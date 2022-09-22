function getInputValue(){
  
    let inputVal = document.getElementById('myInput').value;
    let number = inputVal;

    if (number == 1 ) {
        document.getElementById('output').textContent = "Congratulations! you have won a XBOX 360! ";  
        document.getElementById('picture').innerHTML = '<img src=' +'"https://cdn.pixabay.com/photo/2016/02/14/20/51/xbox-360-e-1200222_960_720.jpg"' + '/>'
        console.log('The prize is XBOX 360');
            }
    else if(number == 2 ) {
        document.getElementById('output').textContent = "Congratulations! you have won a PlayStation 5! ";  
        document.getElementById('picture').innerHTML = '<img src=' +'"https://cdn.pixabay.com/photo/2020/10/15/07/45/playstation-5656248_960_720.jpg"' + '/>'
        console.log('The prize is PlayStation 5');
            }
}
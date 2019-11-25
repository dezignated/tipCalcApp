function tipCalculate(slider, bill) {
    //set variables
    var tip = document.getElementById('tip');
    var slideval = document.getElementById('slideval');
    //set value
    var bill = document.getElementById(bill).value;
    //figure out the percentage
    var prcnt = slider * .01;
    tip.innerHTML = "$" + (bill * prcnt).toFixed(2);
    slideval.innerHTML = slider + "%";
}
javascript:void(function(){var s=document.createElement('script'); s.src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'; document.getElementsByTagName('head')[0].appendChild(s);}());

window.setTimeout(function() {

function letterToGPA(lettergrades) {
  var gpaarray = [];
  for (y=0; y<lettergrades.length; y++) {
    var clg = lettergrades[y];
    if (clg.indexOf('A')!=-1) gpaarray[y]=4;
    if (clg.indexOf('B')!=-1) gpaarray[y]=3;
    if (clg.indexOf('C')!=-1) gpaarray[y]=2;
    if (clg.indexOf('D')!=-1) gpaarray[y]=1;
    if (clg.indexOf('F')!=-1) gpaarray[y]=0;

    if (clg.length != 1) {
      if (clg.indexOf('+')!=-1) gpaarray[y]+=0.3;
      if (clg.indexOf('-')!=-1) gpaarray[y]-=0.3;
    }
  }
  return arrayAverage(gpaarray);
}

function arrayAverage(averagedArray) {
  var total = 0;
  for(var x = 0; x < averagedArray.length; x++) { total = total + parseFloat(averagedArray[x]); } return(total/averagedArray.length);
}

var i = 0, lettergrades=[], numericgrades=[], grades=[], sum=0; $.each($('a'), function() { if (this.href.indexOf('scores.html') != -1) { i++; if(this.innerText.indexOf('--')==-1 && i==2) { grades.push(this.innerText.split("\n")); lettergrades[grades.length-1]=grades[grades.length-1][0]; numericgrades[grades.length-1]=grades[grades.length-1][1]; } } if (i==4) i=0; }); alert(letterToGPA(lettergrades));

}, 300);

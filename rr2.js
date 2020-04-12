function myFunction(){
  var x = document.getElementById("myFile");
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "Select one or more files.";
    } else {
      for (var i = 0; i < x.files.length; i++) {
        txt += "<br><strong>" + (i+1) + ". file</strong><br>";
        var file = x.files[i];
        if ('name' in file) {
          txt += "name: " + file.name + "<br>";
        }
        if ('size' in file) {
          txt += "size: " + file.size + " bytes <br>";
        }
      }
    }
  }
  else {
    if (x.value == "") {
      txt += "Select one or more files.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
    }
  }
  document.getElementById("demo").innerHTML = txt;
}


function displayRadioValue() {
           var ele = document.getElementsByName('gender');

           for(i = 0; i < ele.length; i++) {
               if(ele[i].checked)
               document.getElementById("result").innerHTML
                       = "Gender: "+ele[i].value;
           }
       }

       function submit_alll() {
         let aa=document.getElementById('first_name').value;
         let bb=document.getElementById('last_name').value;
         let cc=document.getElementById('father_name').value;
         let dd=document.getElementById('mother_name').value;
         let ee=document.getElementById('H_no').value;
         let ff=document.getElementById('city').value;
         let gg=document.getElementById('state').value;
         let hh=document.getElementById('country').value;
         let ii=document.getElementById('ap');
         let jj=document.getElementById('an');
         let kk=document.getElementById('bp');
         let ll=document.getElementById('bn');
         let mm=document.getElementById('abp');
         let nn=document.getElementById('abn');
         let oo=document.getElementById('op');
         let pp=document.getElementById('on');
         let qq=document.getElementById('amount_b').value;
         let rr=document.getElementById('male');
         let ss=document.getElementById('female');

         if (aa == "",bb == "",cc == "",dd == "",ee == "",ff == "",gg == "",hh == "",qq == "") {
           alert("please fill all details");
         }
         else {
           if (qq > 10) {
             qq=qq-8;
           var myWindow = window.open("", "MsgWindow", "width=500,height=400");
          myWindow.document.write("<p style='position:absolute;top:10px;color:#84082B;font-size: 20px;font-family: cursive;'>"+aa+"<br>s/o:"+cc+"<br>"+aa+" thanks for response ,we will be their for your <b>blood</b> with in 2 days!</p>"+"<p style='position:absolute;top:100px;color:#84082B;font-size: 20px;font-family: cursive;'><br> Blood amount you have to give:"+qq+"gm</p>"+"<a href='re.html'><button style='position:absolute;top:320px;left:150px;border:none;outline:none;cursor:pointer;border-radius:30px;padding:20px;background-color:#84082B;color:white;'>Yes, take my blood</button></a>"+"<img src='approval.png' style='position:absolute;top:170px;left:300px;'>");
          window.close();
          let aaaa=window.close();
          let aaab=window.close();

         }
         else {
           alert("sorry you cann't donate blood, Dear you need blood go to you home!");
         }
       }


       }

var search = window.location.search.substr(1),
	keys = {};
      
search.split('&').forEach(function(item) {
	item = item.split('=');
	keys[item[0]] = item[1];
});
 
var dataConfig;
loadDataConfig();
function loadConfig(){

     getOutputFromRequest('/mpa/ajax-config.php', setConfigHTML)
     


}
function loadDataConfig(){
   getOutputFromRequest('/mpa/ajax-config.php', setConfigData);

}

function setConfigData(data){

    dataConfig =  data;
}
  

function setConfigHTML(data){

      document.getElementById("mpa-title").innerHTML = data.titleDonate;     
      document.getElementById("mpa-text").innerHTML = data.shortTextDonate;
      document.getElementById("mpa-sum").innerHTML = data.sumDonate;
      document.getElementById("mpa-currency").innerHTML = data.currencyDonate;
      
      
}
          
function getBePaidJS(data){
                       var options = {
                       type: 'inline',
                       id: 'donate-scope',
                       url: data.checkout.redirect_url,
                       style: dataConfig.css,
                       size: { width: 480, height: 365 }
                       };
                       var pf = new BeGateway(options);
                       pf.buildForm();
            
          } 

function getOutputFromRequest(url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 300){
          var data = JSON.parse(request.responseText);
          
          return callback(data);
         }
        }
      }; 
      request.send();
 }

function radiobutton(){
             document.getElementById("5").checked = false;
             document.getElementById("10").checked = false;
             document.getElementById("15").checked = false;
             document.getElementById("20").checked = false;
             document.getElementById("50").checked = false;
             document.getElementById("100").checked = false;
                 
}
function removeinput(){
        document.getElementById("free-donate").value = "";

}
function backbutton(){
        document.getElementById("donate-scope").innerHTML = '<ul class="button-storage"><li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="5" class="custom-input" value="5"><label for="5" class="custom-button">5 руб.</label></li><li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="10" class="custom-input" value="10"><label for="10" class="custom-button">10 руб.</label></li><li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="15" class="custom-input" value="15"><label for="15" class="custom-button">15 руб.</label></li><li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="20" class="custom-input" value="20"><label for="20" class="custom-button">20 руб.</label></li><li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="50" class="custom-input" value="50"><label for="50" class="custom-button">50 руб.</label></li><li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="100" class="custom-input" value="100"><label for="100" class="custom-button">100 руб.</label></li><li id="custom-free-donate"><input type="text" name="free-donate" id="free-donate" onclick="radiobutton()" placeholder="Iншая сума" title="Калі ласка, увядзіце неабходную суму"></li><li id="li-button-donate"><button id="button-donate" onclick="submitbutton()">Ахвяруй!</button></li></ul>';
        document.getElementById("mpa-rules").innerHTML = '<a href="javascript:PopUpShow()">Апiсанне спосабу аплаты</a>';
}
function back(){
        document.location.reload(false);
}
function submitbutton(){

             

             var iscustom = false;
             if (document.getElementById("5").checked) {iscustom = document.getElementById("5").value;}
             var customdonate1 = document.getElementById("5").checked;
             if (document.getElementById("10").checked) {iscustom = document.getElementById("10").value;}
             var customdonate2 = document.getElementById("10").checked;
             if (document.getElementById("15").checked) {iscustom = document.getElementById("15").value;}
             var customdonate3 = document.getElementById("15").checked;
             if (document.getElementById("20").checked) {iscustom = document.getElementById("20").value;}
             var customdonate4 = document.getElementById("20").checked;
             if (document.getElementById("50").checked) {iscustom = document.getElementById("50").value;}
             var customdonate5 = document.getElementById("50").checked;
             if (document.getElementById("100").checked) {iscustom = document.getElementById("100").value;}
             var customdonate6 = document.getElementById("100").checked;
              
             var freedonate = document.getElementById("free-donate");
             var isok = customdonate1 + customdonate2 + customdonate3 + customdonate4 + customdonate5 + customdonate6;
             var regexp = /^[1-9]\d*$/;
             
            
            if(!isok && !freedonate.value){
                 
                 document.getElementById("mpa-rules").innerHTML = "Сума не абрана альбо не уведзена!";
                
             }                      
             else if(!regexp.test(freedonate.value) && freedonate.value ){
               document.getElementById("mpa-rules").innerHTML = 'У поле "Iншая сума" трэба уводзiць цэлыя лiкi!';  
               
               
               
             }
             else if(freedonate.value >  dataConfig.maxDonate){
             
                       document.getElementById("mpa-rules").innerHTML = 'Ахвяраванне не можа быць большым за '+ dataConfig.maxDonate +' руб!';
             
             
             }
             else if(freedonate.value && freedonate.value < dataConfig.minDonate ){
             
                       document.getElementById("mpa-rules").innerHTML = 'Ахвяраванне не можа быць меншым за '+ dataConfig.minDonate +' руб!';
             
             
             }
                                                                                                         
              else {
                  document.getElementById("main-conteiner").setAttribute('style','height: 365px');
                  document.getElementById("button-back").innerHTML = '<img onclick="back()" src="mpa/img/button-back.png">';
                  document.getElementById("donate-scope").innerHTML ='';
                  document.getElementById("mpa-rules").innerHTML = '';
                  if(iscustom){                                                                                         
                     var url = 'mpa/donate.php?donate=' + iscustom;
                  
                  }else{ var url = 'mpa/donate.php?donate=' + freedonate.value; }  
                  getOutputFromRequest(url,getBePaidJS);
                  
             
             }
}
window.onload = function() {
        if(keys.message){
            document.getElementById("mpa-rules").innerHTML = '<button onclick="backbutton()">Паспрабаваць яшчэ раз</button>';            
            switch (keys.message) {
              case '1':
              document.getElementById("donate-scope").innerHTML ="<h3 style='margin-top: 12%'>Ахвяраванне паспяхова здейснена</h3><h1 style='text-align: center'>Дзякуй за падтрымку!</h1>";
              document.getElementById("mpa-rules").innerHTML = '';
              break;
              case '2':
              document.getElementById("donate-scope").innerHTML = "<h3 style='margin-top: 15%' >Прабачце, транзакция была адхiлена банкам</h3>";
              break;
              case '3':
              document.getElementById("donate-scope").innerHTML = "<h3 style='margin-top: 14%' >Прабачце, транзакцыя была адхiлена</h3><h3>з прычын тэхнiчнага збою</h3>" ;
              break;
           }   
        }
};
  $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }
 loadConfig();     

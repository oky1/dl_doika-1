Прывітанне,

Праект "Doika" - сумесная праца айціваланцёраў Лічбавай майстэрні. Наш адрас: it.falanster.by


Установка "Модуля прыёму ахвяраванняў":
1) Скачать архив из репозитория и распаковать файл "index.html" и директорию "mpa" в корне каталога сайта. 
2) Открыть файл index.html в текстовом редакторе и скопировать код верстки блока от "-- MPA start --" до "-- MPA end --" и поместить в нужном месте вашей страницы.
<!-- MPA start -->
    <div id="main-conteiner">
      <div id="left-conteiner">
           <h1 id="mpa-title" ></h1>
          <div id="mpa-description">
            <img src="mpa/servak.jpg" id="mpa-image"/>
            <div id="mpa-text"></div>
            <div id="mpa-necessity">Патрэбная сума: <span id="mpa-sum"></span> <span id="mpa-currency"></span>.</div>
          </div>
          <div id="button-back"></div>
      </div>                           
      <div id="donate-scope">
           
           <ul class="button-storage">
            <li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="5" class="custom-input" value="5"><label for="5" class="custom-button">5 руб.</label></li>
            <li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="10" class="custom-input" value="10"><label for="10" class="custom-button">10 руб.</label></li>
            <li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="15" class="custom-input" value="15"><label for="15" class="custom-button">15 руб.</label></li>
            <li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="20" class="custom-input" value="20"><label for="20" class="custom-button">20 руб.</label></li>
            <li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="50" class="custom-input" value="50"><label for="50" class="custom-button">50 руб.</label></li>
            <li class="custom-donate"><input type="radio" name="custom-button-donate" onclick="removeinput()" id="100" class="custom-input" value="100"><label for="100" class="custom-button">100 руб.</label></li>
            <li id="custom-free-donate"><input type="text" name="free-donate" id="free-donate" onclick="radiobutton()" placeholder="Iншая сума" title="Калі ласка, увядзіце неабходную суму"></li>
            <li id="li-button-donate"><button id="button-donate" onclick="submitbutton()">Ахвяруй!</button></li>
            
            
           </ul>
                  
      </div>
      
      <h3 id="mpa-rules"><a href="javascript:PopUpShow()">Апiсанне спосабу аплаты</a></h3>
      <div class="b-popup" id="popup1">
        <div class="b-popup-content">
            <p style="text-align: center">На гэтай старонцы ахвяраванне робіцца <strong>банкаўскай картай</strong>.</p>
            <p>Па націсканні кнопкі “Ахвяруй!” для Вас будзе выведзеная адмысловая плацёжная форма працэсінгавай сістэмы <span style="background-color:#ffffff;color:#f79646;font-weight:700;text-decoration:underline"><a href="https://www.google.com/url?q=https://www.google.com/url?q%3Dhttp://bepaid.by/%26amp;sa%3DD%26amp;ust%3D1512210348836000%26amp;usg%3DAFQjCNF80DpFih_fNIw_ddPPenMA6k1VRQ&amp;sa=D&amp;ust=1512210348842000&amp;usg=AFQjCNEr7EVyPzSdZapDB4yMW-BY6e1nAA" style="color:inherit;text-decoration:inherit">be</a></span><span style="background-color:#ffffff;color:#1155cc;font-weight:700;text-decoration:underline"><a href="https://www.google.com/url?q=https://www.google.com/url?q%3Dhttp://bepaid.by/%26amp;sa%3DD%26amp;ust%3D1512210348836000%26amp;usg%3DAFQjCNF80DpFih_fNIw_ddPPenMA6k1VRQ&amp;sa=D&amp;ust=1512210348843000&amp;usg=AFQjCNEA49MozecrsbatrFpI-2tc8Z5I9A" style="color:inherit;text-decoration:inherit">Paid</a></span>.
            Для аплаты Вам спатрэбіцца ўвесці дадзеныя сваёй карты і пацвердзіць плацёж кнопкай “Аплаціць N руб.”, дзе N ― вызначаная Вамі сума.
            Мы прымаем плацяжы з наступных банкаўскіх картаў: MasterCard, Maestro, Visa, Visa Electron, Белкарт.</p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:center"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 355.57px; height: 62.06px;"><img alt="" src="https://lh4.googleusercontent.com/9EEq8ZYJPpco2xK00gYJFFUx_Stj37Nb5wLQanbnBU5ELcPdOan1UAy_jeUqGNFdCAoWC0PT_5AXfjwhZcPrBR1JXsrf9XGcv58mR-ktyN0vPN77gRdOaXXg1i-oCKX-CzkKK4vl=s800" style="width: 255.57px; height: 52.06px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""><img src="https://lh6.googleusercontent.com/Bt1eFBKo9amovmut4a08H93W1863_8c-a24F5S-vvXiQkVTbk44B5x9O-k4bIz6S93spBuuUyAD8dVr4l7Hk-KCX6crgyMo8tN5NCra707A1sAlmzmVInE_NJKgWrf3rplqdIshN"></span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:center"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 120.00px; height: 80.00px;"><img alt="" src="https://lh5.googleusercontent.com/Ca6oYDV-FN43D4v26PQMQY9vewOEcrGHoSr7loyG7xlUmOxkxEaILtkq9W7ZrETZKe00OYzP4F94bKA5IMvHDs7kuAi5hxETr7W9QuelOJYdPXBXDQiFEKQ6drqEuhumtyMGdZHG=s800" style="width: 120.00px; height: 80.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            
            <br /> 
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:justify"><span style="font-style:italic">Плацяжы з банкаўскіх картаў ажыццяўляюцца праз сістэму электронных плацяжоў </span><span style="background-color:#ffffff;font-style:italic;color:#f79646;font-weight:700;text-decoration:underline"><a href="https://www.google.com/url?q=https://www.google.com/url?q%3Dhttp://bepaid.by/%26amp;sa%3DD%26amp;ust%3D1512210929948000%26amp;usg%3DAFQjCNEUoxeFz8lTx5QHUi_w8BRG936XKw&amp;sa=D&amp;ust=1512210929952000&amp;usg=AFQjCNHUx_27SUuixkj1Fve8R4V1o1wnEA" style="color:inherit;text-decoration:inherit">be</a></span><span style="background-color:#ffffff;font-style:italic;color:#1155cc;font-weight:700;text-decoration:underline"><a href="https://www.google.com/url?q=https://www.google.com/url?q%3Dhttp://bepaid.by/%26amp;sa%3DD%26amp;ust%3D1512210929948000%26amp;usg%3DAFQjCNEUoxeFz8lTx5QHUi_w8BRG936XKw&amp;sa=D&amp;ust=1512210929952000&amp;usg=AFQjCNHUx_27SUuixkj1Fve8R4V1o1wnEA" style="color:inherit;text-decoration:inherit">Paid</a></span><span style="font-style:italic">.</span><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:&quot;Arial&quot;;font-style:normal">&nbsp;Плацёжная форма сістэмы адпавядае ўсім патрабаванням бяспекі перадачы звестак (PCI DSS Level 1). Усе канфідэнцыйныя звесткі захоўваюцца ў зашыфраваным выглядзе і максімальна ўстойлівыя да ўзлому.</span></p>
            
         <p style="text-align:center"><a href="javascript:PopUpHide()">Назад да старонкi ахвяравання</a></p>
     </div>
  </div>
                                                
  <!-- MPA end --> 
  
  3) Подключить файлы js и css, при необходимости отредактировать пути к файлам, если ваша страница находится не в корневом каталоге:
  
    <link rel="stylesheet" href="mpa/donate.css">
    <script src="http://code.jquery.com/jquery-2.0.2.min.js"></script> //або выкарыстозвайце ўжо падключаную бібліятэку
    <script type="text/javascript" src="https://js.bepaid.by/begateway-1-latest.min.js"></script>
    <script type="text/javascript" src="mpa/mpa-script.js"></script>
  
  4) Можна вы даліць файл "sample.html"
  5) Скапіраваць з файл sample.configc.php у configc.php 
  6) Заполнить данные в configc.php, в его комментариях даны пояснения какое значение требуется каждому ключу массива.
  7) Файл config.php можна выкарыстоўваць для наладжвання стыляў модуля.

Калі ласка развівайце бягучы праект і выкарыстоўвайце на сваіх сайтах!

Кантактны мэйл: falanster.by@gmail.com
  

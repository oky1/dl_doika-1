<?php

include_once "configc.php";

$config2 = ['css' =>'
.payment-methods {
	background-color: #4d4d4d;
	border: none;
}
.payment-method {
	margin: 0;
}
#request input {
	height: 26px;
	border-radius: 0;
}
#request input::-webkit-input-placeholder, #request .exp-date input::-webkit-input-placeholder, #request .verification-value input::-webkit-input-placeholder {
	color: #939393;
	font-size: 14px;
}
#request input:-ms-input-placeholder, #request .exp-date input:-ms-input-placeholder, #request .verification-value input:-ms-input-placeholder {
	color: #939393;
	font-size: 14px;
}
#request input::-ms-input-placeholder, #request .exp-date input::-ms-input-placeholder, #request .verification-value input::-ms-input-placeholder {
	color: #939393;
	font-size: 14px;
}
#request input::placeholder, #request .exp-date input::placeholder, #request .verification-value input::placeholder {
	color: #939393;
	font-size: 14px;
}
.credit-card-icon, .card-holder-icon {
	width: 25.2px;
	height: 22.4px;
	margin-top: -3px!important;
}
.content {
	margin: 6px 20px!important;
}
#request {
	margin-top: 30px;
}
#request .submit-button .pure-button input {
	padding: 0!important;
}
#request .submit-button .pure-button input, .submit-button .pure-button {
	background-color: #ccff00;
	border-radius: 0;
	padding: 0;
	height: 32px;
	color: #333333;
	font-weight: 700;
	font-size: 17px;
	margin-top: 10.5px;
}

.exp-date,
.verification-value,
#request .exp-date input, #request .verification-value input {
	width: 100%;
}

#request .exp-date label, #request .verification-value label {
	color: white;
	font-size: 11px;
}
.submit-button, .credit-card {
	margin: 0!important;
	padding: 0!important;
}
.credentials {
	margin-top: 5px!important;
	color: white!important;
	font-size: 12px!important;
}
#logos {
	margin-top: -10px!important;
}
.pure-form input[type="text"], .pure-form input[type="tel"] {
	padding: 0;
}
#logos-container #logos .inline-logo {
	display: none;
}
#request input:focus {
	box-shadow: 0px 0px 1px 2px #ccff00;
	color: #000;
}
'
];


$config = array_merge($config, $config2);

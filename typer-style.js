:root {
	background-color: #000 !important;
}

body {
	background-color: #000
}

::-moz-selection { /* Code for Firefox */
	color: #000;
	background: #fff;
  }
  
  ::selection {
	color: #000;
	background: #fff;
  }

#console {
	font-family: courier, monospace;
	color: #fff;
	width:950px;
	margin-left:auto;
	margin-right:auto;
	margin-top:100px;
	font-size:15px;
}

a {
	color: #0bc;
	text-decoration: none;
}

#userandhost {
	color: #0f0;
}

#syntaxing {
	color: #4d4cc6;
}

@media (max-width : 950px) {
    #console {
		width: auto !important;
		margin-top: 0px !important;
		font-size: 15px !important;
		justify-content: center !important;
		flex-direction: column !important;
		overflow-wrap:initial !important;
	}
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
	display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  html {
	-ms-overflow-style: none;  /* IE and Edge */
	scrollbar-width: none;  /* Firefox */
  }

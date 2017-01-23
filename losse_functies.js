/* loslopende functie */
function showHelloWorld () {alert("Hello, World, JMO from external Javascript");}

function ShowName( voornaam , achternaam )
	{
	var myCsv = 'Voornaam;Achternaam;'  + "\r\n" 
			+ voornaam + ';' + achternaam + ';' + "\r\n" 
				+ voornaam + ';' + achternaam + ';';

	window.open( "data:application/vnd.ms-excel;charset=utf-8," + encodeURIComponent(myCsv));
	alert("done");
 	}

function showInfoSandbox() {alert("Dit zijn de publicaties van de Sandbox van Werkwel") ;} 

function Filter_Opdrachten() {
  			// Declare variables 
  			var input, filter, table, tr, td, td2, i;
  			input = document.getElementById("myInput");  	// haal waarde parameter op
  			filter = input.value.toUpperCase();		// zet die om naar hoofdletter
  			table = document.getElementById("myTable");  	// zoek de tabel op
  			tr = table.getElementsByTagName("tr");		// identificeer de rijen met tag tr

  			// Loop through all table rows, and hide those who don't match the search query
  			for (i = 0; i < tr.length; i++) {
    			td = tr[i].getElementsByTagName("td")[0];
    			td2 = tr[i].getElementsByTagName("td")[1];
    			if (td){
      				if (td.innerHTML.toUpperCase().indexOf(filter) > -1 ||  
      						td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
        				tr[i].style.display = ""; 
      					} else {
        					tr[i].style.display = "none";
      						}}}}

function myFunction() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var contact = document.getElementById("contact").value;
	
	// Returns successful data submission message when the entered information is stored in database.
	var dataString = 'name1=' + name + '&email1=' + email + '&password1=' + password + '&contact1=' + contact;
	if (name == '' || email == '' || password == '' || contact == '') {
		alert("Please Fill All Fields");
		} else {
		// AJAX code to submit form.
	alert("Start Ajax");
	$.ajax({
	type: "POST",
	url: "ajaxjs.php",
	data: dataString,
	cache: false,
	success: function(html) {
	alert(html);
	}
	});
	}
	return false;
	}






//	window.open('data:text/csv;charset=utf-8,' + escape(myCsv));

download('file text', 'myfilename.txt', 'text/plain')
function download(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}


/**
function buildData(){
    var txtData = "Name: "+$("#nameField").val()+
            "\r\nLast Name: "+$("#lastNameField").val()+
            "\r\nGender: "+($("#genderMale").is(":checked")?"Male":"Female");

    return txtData;
}





 code restanten
public class HelloWorld {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hello World JMO");	}}
function showHelloWorld () {System.out.println("Hello World JMO");}
function showHelloWorld () {console.log('JMO', 'test');}
**/




function validation()
	{
		var letters= /^[A-Za-z]{1}[A-Za-z ]*$/;

		var fname=document.signup.fn.value,
			lname=document.signup.ln.value,
			em=document.signup.email.value,
			pwd1=document.signup.password.value,
			pwd2=document.signup.cnf_password.value,
			country=document.signup.country.value;
		
		var e1="<span id='1'>**name can not blank</span>",
		    e2="<span id='2'>**name should be alphabets</span>",
		    e3="<span id='3'>**email can not be blank</span>",
		    e4="<span id='4'>**password can not be blank</span>",
		    e5="<span id='5'>**length of password must be 6</span>",
		    e6="<span id='6'>**both password must be same</span>",
		    e7="<span id='7'>**select one country</span>",
		    e8="<span id='8'>**select gender</span>",
		    e9="<span id='9'>**please accept terms & conditions</span>";

		var t1=document.getElementById("c1"),
		    t2=document.getElementById("c2"),
		    t3=document.getElementById("c3"),
		    t4=document.getElementById("c4"),
		    t5=document.getElementById("c5"),
		    t6=document.getElementById("c6"),
		    t7=document.getElementById("c7");

		if(fname == "" || lname == "")
			{
				
				t1.insertAdjacentHTML("afterend",e1);	
				document.signup.fn.focus();

				return false;
			}

		if(!letters.test(fname) || !letters.test(lname))
			{
				
				t1.insertAdjacentHTML("afterend",e2)													
				document.signup.fn.focus();

				return false;
			}

		if(em == "")
			{
				t2.insertAdjacentHTML("afterend",e3)
				document.signup.email.focus();

				return false;
			}

		if(pwd1 == "")
			{
				t3.insertAdjacentHTML("afterend",e4)
				document.signup.password.focus();

				return false;
			}

		if(pwd1.length<6)	
			{
				t3.insertAdjacentHTML("afterend",e5)
				document.signup.cnf_password.focus();

				return false;
			}

		if(pwd1 != pwd2)
			{
				t4.insertAdjacentHTML("afterend",e6);
				document.signup.cnf_password.focus();

				return false;
			}	

		if(country == "-")
			{
				t5.insertAdjacentHTML("afterend",e7);
				document.signup.country.focus();

				return false;
			}

		if(document.signup.gender[0].checked == false && document.signup.gender[1].checked == false)
			{
				t6.insertAdjacentHTML("afterend",e8);
				document.signup.gender[0].focus();

				return false;
			}

		if(document.signup.checkbox.checked == false)
			{
				t7.insertAdjacentHTML("afterend",e9);
				document.signup.checkbox.focus();

				return false;
			}
			
			return true;
		
	}		
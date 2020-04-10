(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

function dropshow () {
 var dropsh=document.querySelector(".dropdown-menu");
	if (dropsh.style.display === 'block') {
		dropsh.style.display = 'none'
	} else {
		dropsh.style.display = 'block';
	}

}


( function( $ ) {
$( document ).ready(function() {
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});
} )( jQuery );


// Now date

var date=new Date();
document.querySelector(".nowdate").innerHTML=date;

// ---------------------------
function AddFile () {
 let addfilelink=$(".add_file_part");
 let addformfile=$(`<div class="form-group">
   <label for="exampleFormControlFile1">Fayllar</label>
   <input type="file" class="form-control-file" id="exampleFormControlFile1">
   </div>`)
 addfilelink.append(addformfile);
}
// -------------------------

function AddMan () {
  let addmen=$(".added-man-main");
 let addselect=$(".add-select").val();
 let addizoh=$(".add-izoh").val();
  let addmenitem=$(`<div class="add-man-items mb-5 mt-2">
                  <div class="added-man mb-1">
                    <p><b>Xodim:</b><span>` +(addselect)+`</span></p>
                    <p><b>Izoh: </b>`+(addizoh)+`</p>
                  </div>
                  <div class="added-man-btn float-right mt-1 ">
                    <button class="btn btn-success">O'zgartirish</button>
                    <button class="btn btn-danger">O'chirish</button>
                  </div>
                </div>`)
  
  addmen.append(addmenitem);
}

//------------------------ 
function addXodim () {
  let add=document.querySelector(".add-xodim");
  if (add.style.display === 'none') {
    add.style.display = 'block';
  } else {
    add.style.display = 'none';
  }
}



// Tab link
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Login JS


(function ($) {
    "use strict";


     /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }   
    

})(jQuery);


// Nazorat
function Nazorat () {
  let n =document.querySelectorAll(".nazorat");

  for (var i = 0; i < n.length; i++) {

    if (n[i].style.color === 'red'&&n[i].innerHTML==="Nazorat qo'yilgan ") {
      n[i].style.color = 'green'
      n[i].innerHTML="Nazoratda emas"
    } else {
      n[i].style.color = 'red'
      n[i].innerHTML="Nazorat qo'yilgan "
    }
  }
}

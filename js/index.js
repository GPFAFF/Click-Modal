$(function(){

    if (window.location.href === ("file:///Users/gpfaff/Desktop/Razorfish-Dev/SF-Modal/test.html")) {
        
      /*if (location.hostname.match === ("es.statefarm.com") */
        modalBody = $('.nav-modal-container');
        warningModal = $('.display-language-warning');
        closeButton = $('a.btn-close.close');
        cancelButton = $('.btn.btn-primary.cancel');
        continueButton = $('a.btn.btn-primary.continue');
        languageModal = $('div#languageWarningModal.modal.hide.noindex');

        warningModal.click(function(e) {

        	e.preventDefault();

            modalBody.addClass('active');
            languageModal.removeClass('hide');
            continueButton.attr("href", $(this).attr("href"));

    	});
    	
    	var cancelClick = function(e){
  			e.preventDefault();
    		modalBody.removeClass('active');
    		languageModal.addClass('hide');
    	};

    	closeButton.on('click', cancelClick);
        cancelButton.on('click', cancelClick);

    } else {
        return false
    }
});
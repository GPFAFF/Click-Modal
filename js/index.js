function languageWarningModal() {
        
    if(location.href.indexOf("test.html") > -1) {
        modalBody = $('.nav-modal-container');
        warningModal = $('a.display-language-warning');
        closeButton = $('a.btn-close.close');
        cancelButton = $('.btn.btn-primary.cancel');
        continueButton = $('a.btn.btn-primary.continue');
        languageModal = $('div#languageWarningModal.modal.hide.noindex');

        warningModal.click(function(e) {

            e.preventDefault();

            modalBody.addClass('active');
            
            languageModal.removeClass('hide');

            console.log('Yep, been clicked');

            continueButton.attr("href", $(this).attr("href"));

        });
        var cancelClick = function(e){
            
            e.preventDefault();
            
            modalBody.removeClass('active');
            
            languageModal.addClass('hide');
        };

        closeButton.on('click', cancelClick);
        cancelButton.on('click', cancelClick);
     }
};

$(document).ready(function() {
    languageWarningModal();

});
(function ($) {
    'use strict';
    var form = $('.contact-form'),
        messageAlert = $('.messenger-box-contact__msg');

    form.on('submit', function (e) {
        e.preventDefault();

        var requiredMsg = $('#required-msg');
        var fullNameInput = $('#full-name');
        var emailInput = $('#email');
        var phoneInput = $('#phone-number');
        var subjectInput = $('#subject');
        var messageInput = $('#message');

        var fullName = fullNameInput.val().trim();
        var email = emailInput.val().trim();
        var phone = phoneInput.val().trim();
        var subject = subjectInput.val().trim();
        var userMessage = messageInput.val().trim();

        var hasError = false;

        // Validation for required fields
        if (!fullName) {
            fullNameInput.addClass('invalid');
            hasError = true;
        } else {
            fullNameInput.removeClass('invalid');
        }

        if (!email) {
            emailInput.addClass('invalid');
            hasError = true;
        } else {
            emailInput.removeClass('invalid');
        }

        if (!subject) {
            subjectInput.addClass('invalid');
            hasError = true;
        } else {
            subjectInput.removeClass('invalid');
        }

        if (hasError) {
            requiredMsg.addClass('show');
            return false;
        }

        requiredMsg.removeClass('show');

        // Build email subject and pre-filled body
        var emailSubject = 'Portfolio Inquiry: ' + subject + ' (' + fullName + ')';
        var emailBody = 'Hello Prashant,\n\n' +
            'I reached out to you through your portfolio website with the following details:\n\n' +
            '-----------------------------------------\n' +
            '• Name: ' + fullName + '\n' +
            '• Email: ' + email + '\n' +
            (phone ? '• Phone: ' + phone + '\n' : '') +
            '• Subject: ' + subject + '\n' +
            '-----------------------------------------\n\n' +
            'Message:\n' + (userMessage || '(No message written)') + '\n\n' +
            'Best regards,\n' + fullName;

        var recipient = 'prashantkumar102369@gmail.com';
        var mailtoUrl = 'mailto:' + recipient +
            '?subject=' + encodeURIComponent(emailSubject) +
            '&body=' + encodeURIComponent(emailBody);

        // Display confirmation feedback box
        messageAlert
            .removeClass('alert-danger')
            .addClass('alert-success')
            .html('<i class="las la-envelope-open-text me-1"></i> Opening your email client with your message pre-filled... <br><span style="font-size: 13px; color: #bbb;">If your mail app does not open automatically, you can also write directly to <a href="mailto:' + recipient + '" style="color:#28e98c; text-decoration:underline;">' + recipient + '</a></span>')
            .slideDown();

        // Launch mailto URL
        var mailLink = document.createElement('a');
        mailLink.href = mailtoUrl;
        mailLink.target = '_blank';
        mailLink.rel = 'noopener noreferrer';
        document.body.appendChild(mailLink);
        mailLink.click();
        document.body.removeChild(mailLink);

        // Fallback for direct window location trigger
        setTimeout(function () {
            window.location.href = mailtoUrl;
        }, 150);
    });

    // Remove invalid highlight on keyup/change
    $('#full-name, #email, #subject, #message').on('input change', function () {
        if ($(this).val().trim()) {
            $(this).removeClass('invalid');
        }
    });

})(jQuery);
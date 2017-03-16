$(function () {
    $('.checkbox-button').each(function () {

        var $checkbox = $(this);

        var onIcon = (typeof $checkbox.data('on-icon') != 'undefined') ? $checkbox.data('on-icon') : 'glyphicon glyphicon-check';
        var offIcon = (typeof $checkbox.data('off-icon') != 'undefined') ? $checkbox.data('off-icon') : 'glyphicon glyphicon-unchecked';
        var onText = (typeof $checkbox.data('on-text') != 'undefined') ? $checkbox.data('on-text') : 'On';
        var offText = (typeof $checkbox.data('off-text') != 'undefined') ? $checkbox.data('off-text') : 'Off';
        var onColor = (typeof $checkbox.data('on-color') != 'undefined') ? $checkbox.data('on-color') : 'primary';
        var offColor = (typeof $checkbox.data('off-color') != 'undefined') ? $checkbox.data('off-color') : 'default';
        var buttonSize = (typeof $checkbox.data('btn-size') != 'undefined') ? "btn-" + $checkbox.data('btn-size') : 'btn-md';

        $checkbox.hide();
        $checkbox.after("<span style="display:none"><button type='button' id='" + $checkbox.attr("id") + "-button' class='btn " + buttonSize + "'><i class='state-icon'></i>&nbsp;<span class='state-text'></span></button></span>");

        var $button = $checkbox.next();

        function update(on) {
            if (on) {
                $button.removeClass('active btn-' + offColor).addClass('btn-' + onColor);
                $button.find('.state-text').text(onText);
                $button.find('.state-icon').removeClass().addClass('state-icon ' + onIcon);
            } else {
                $button.removeClass('btn-' + onColor).addClass('active btn-' + offColor);
                $button.find('.state-text').text(offText);
                $button.find('.state-icon').removeClass().addClass('state-icon ' + offIcon);
            }
        }
		
		update(false);
		var offWidth = $button.width();
        update(true);
		var onWidth = $button.width();

        var buttonWidth = Math.max(offWidth, onWidth);
        $button.css("width", buttonWidth + "px");

        $button.on('click', function () {
            $checkbox.trigger('click');
            update($checkbox.is(':checked'));
        });

        update($checkbox.is(':checked'));
    });
});
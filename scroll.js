var x = 0;
var y = 0;
var next_x = 0;
var next_y = 0;
var timeout;

$(window).unbind('scroll');
$(window).scroll(save_position);

// listen for the message
chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log("scrolling back to " + y);
            window.scroll(x,y);
        }
        );

function save_position() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        y = next_y;
        next_y = $(window).scrollTop();
        x = next_x;
        next_x = $(window).scrollLeft();
    }, 50);
}


(function($) {
    var XT_Ajax_Queue = $({});
    $.XT_Ajax_Queue = function(ajaxOpts) {
        var jqXHR, dfd = $.Deferred(),
            promise = dfd.promise();

        function doRequest(next) {
            jqXHR = $.ajax(ajaxOpts);
            jqXHR.done(dfd.resolve).fail(dfd.reject).then(next, next)
        }
        XT_Ajax_Queue.queue(doRequest);
        promise.abort = function(statusText) {
            if (jqXHR) {
                return jqXHR.abort(statusText)
            }
            var queue = XT_Ajax_Queue.queue(),
                index = $.inArray(doRequest, queue);
            if (index > -1) {
                queue.splice(index, 1)
            }
            dfd.rejectWith(ajaxOpts.context || ajaxOpts, [promise, statusText, ""]);
            return promise
        };
        return promise
    }
})(jQuery);
/**
 * Created by pengwei on 2017/4/14.
 */

$(function () {
    $(".entry-content a").each(function (index, ele) {
        $(ele).attr('target', 'external')
    })
});

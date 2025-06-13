function init(){try{if (!window.jkit) {
    window.jkit = true;
    $("#roof-wrap1").jKit();
}
var index = this[0];
var pathname = '/',
    a = decodeURIComponent(window.location.pathname)
    .replace(new RegExp('^' + pathname), '')
    .replace(/\_/g, ' ')
    .replace(/\%2f/g, '/')
    .replace(/\%2F/g, '/')
    .replace(/\/+/g, '/')
    .replace(/^\/+|\/+$/g, '');
var t = !a,
    e = $("#roof-wrap" + (+t + 1)),
    i = $("#roof-wrap" + (+!t + 1));

if (i.is(":hidden") && !a) {
    $("#content").css("marginTop", "558px");
    $("#menu").css("marginTop", "503px");
} else {
    $("#content").css("marginTop", "230px");
    $("#menu").css("marginTop", "175px");
}

e.css("display", "none");
i.find("img").css("width","100%");
i.css("display", "initial");

VK.init({
    apiId: 5015945,
    onlyWidgets: true
});

function VK_Widget_Init() {
    // Комментарии
    const vk_comments = $("#vk_comments");
    if (vk_comments.length) {
        vk_comments.html('<div id="vk_comments_widget"></div>');
        VK.Widgets.Comments("vk_comments_widget", {
            limit: 20,
            attach: "*"
        });
    }
}
VK_Widget_Init();
$(window).resize(VK_Widget_Init);}catch(e){}}
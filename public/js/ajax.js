$(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost:9000/1",
        dataType: "json",
        success: function(data) {
            $(".news-container").empty();
            for (var j = 0; j < data.length; j++) {
                $(".news-container").append('<div class="news-main"><a href=""><img src="" class="newsimg"></a><div class="content"><p class="newstitle"></p><p class="newscontent"></p><p class="addtime"></p></div></div>');
            }
            for (var i = 0; i < data.length; i++) {
                $(".newstitle").eq(i).text(data[i].newstitle);
                $(".newsimg").eq(i).attr("src", data[i].newsimg);
                $(".newscontent").eq(i).text(data[i].newscontent);
                $(".addtime").eq(i).text(new Date(data[i].addtime).toLocaleString());
            }
        },
        error: function(jqXHR) {
            alert("发生错误：" + jqXHR.status);
        }
    });
    $(".navigator-tool li").each(function(index) {
        $(this).on("click", function() {
            var $navTool=$(".navigator-tool span");
            $navTool.removeClass("cur");
            $navTool.eq(index).addClass("cur");
            $.ajax({
                type: "GET",
                url: "http://localhost:9000/"+newsstyle(),
                dataType: "json",
                success: function(data) {
                    $(".news-container").empty();
                    for (var j = 0; j < data.length; j++) {
                        $(".news-container").append('<div class="news-main"><a href=""><img src="" class="newsimg"></a><div class="content"><p class="newstitle"></p><p class="newscontent"></p><p class="addtime"></p></div></div>');
                    }
                    for (var i = 0; i < data.length; i++) {
                        $(".newstitle").eq(i).text(data[i].newstitle);
                        $(".newsimg").eq(i).attr("src", data[i].newsimg);
                        $(".newscontent").eq(i).text(data[i].newscontent);
                        $(".addtime").eq(i).text(new Date(data[i].addtime).toLocaleString());
                    }
                },
                error: function(jqXHR) {
                    alert("发生错误：" + jqXHR.status);
                }
            });
        })

    })
    $(".ui-refresh").on("click", function() {
        var contentLength=$(".news-main").length;
        $.ajax({
            type: "POST",
            url: "http://localhost:9000/refresh/"+newsstyle(),
            data:{contentLength:contentLength},
            dataType: "json",
            success: function(data) {
                $(".news-container").empty();
                for (var j = 0; j < data.length; j++) {
                    $(".news-container").append('<div class="news-main"><a href=""><img src="" class="newsimg"></a><div class="content"><p class="newstitle"></p><p class="newscontent"></p><p class="addtime"></p></div></div>');
                }
                for (var i = 0; i < data.length; i++) {
                    $(".newstitle").eq(i).text(data[i].newstitle);
                    $(".newsimg").eq(i).attr("src", data[i].newsimg);
                    $(".newscontent").eq(i).text(data[i].newscontent);
                    $(".addtime").eq(i).text(new Date(data[i].addtime).toLocaleString());
                }
            },
            error: function(jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });
    })
    function newsstyle() {
        var char = $(".cur").text();
        var result
        switch (char) {
            case "推荐":
                result = 1;
                break;
            case "百家":
                result = 2;
                break;
            case "本地":
                result = 3;
                break;
            case "娱乐":
                result = 4;
                break;
            default:
                break;
        }
        return result;
    };
})

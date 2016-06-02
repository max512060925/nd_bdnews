$(function() {
    $("#newbtn").on("click", function() {
        $("#newfrom").show();
    })
    $(".close").on("click", function() {
        $("#newfrom").hide();
        $("#revisefrom").hide();
        $(".callback").text("");
    })
    $("#send").on("click", function() {
        send();
    })
    $(".newsstyle").text($("#demo li a").eq(0).text());
    get();
    $("#demo li a").each(function(index) {
        $(this).on("click", function() {
            $(".newsstyle").text($(this).text());
            get();
        })
    });


    function newsstyle() {
        var char = $(".newsstyle").text();
        var result
        switch (char) {
            case "推荐新闻":
                result = 1;
                break;
            case "百家新闻":
                result = 2;
                break;
            case "本地新闻":
                result = 3;
                break;
            case "娱乐新闻":
                result = 4;
                break;
            default:
                break;
        }
        return result;
    }

    function get() {
        $.ajax({
            type: "GET",
            url: "http://localhost:9000/back/"+newsstyle(),
            dataType: "json",
            success: function(data) {
                $("#page-wrapper table tbody").empty();
                for (var i = 0; i < data.length; i++) {
                    $("#page-wrapper table tbody").append('<tr><td class="newsid-show"></td><td class="newstitle-show"></td><td class="newsimg-show"></td><td class="newscontent-show"></td><td class="addtime-show"></td><td><button type="button" class="btn btn-success btn-xs revise">修改</button><button type="button" class="btn btn-danger btn-xs del">删除</button></td></tr>');
                    $(".newsid-show").eq(i).text(data[i].newsid);
                    $(".newstitle-show").eq(i).text(data[i].newstitle);
                    $(".newsimg-show").eq(i).text(data[i].newsimg);
                    $(".newscontent-show").eq(i).text(data[i].newscontent);
                    $(".addtime-show").eq(i).text(new Date(data[i].addtime).toLocaleString());
                }
                $(".revise").each(function(index) {
                    $(this).on("click", function() {
                        $("#revisefrom").show();
                        $("#newsid-revise").text(data[index].newsid);
                        $("#newstitle-revise").val(data[index].newstitle);
                        $("#newsimg-revise").val(data[index].newsimg);
                        $("#newscontent-revise").val(data[index].newscontent);
                        $("#addtime-revise").val(data[index].addtime)
                        $("#send-revise").on("click", function() {
                            sendrevise();
                        })

                    });
                });
                $(".del").each(function(index) {
                    $(this).on("click", function() {
                        var newstyle = newsstyle();
                        var newsid = $(".newsid-show").eq(index).text();
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:9000/back/del/"+newsstyle(),
                            dataType: "json",
                            data: {'newsid': newsid },
                            success: function(data) {
                                if (data.success) {
                                    alert(data.msg);
                                } else {
                                    alert("出现错误：" + data.msg);
                                }
                                location.reload();
                            },
                            error: function(jqXHR) {
                                alert("发生错误：" + jqXHR.status);
                            }
                        });
                    })
                })
            },
            error: function(jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        });
    }

    function send() {
        $(".callback").text("请稍后...");
        var newstyle = newsstyle();
        var newstitle = $("#newstitle").val();
        var newsimg = $("#newsimg").val();
        var newscontent = $("#newscontent").val();
        var addtime = $("#addtime").val();
        if (newstitle==""){
            $(".callback").text("信息不能为空");
        }else if(newsimg==""){
            $(".callback").text("信息不能为空")
        }else if(newscontent==""){
            $(".callback").text("信息不能为空")
        }else if(addtime==""){
            $(".callback").text("信息不能为空")
        }else{
            $.ajax({
                type: "POST",
                url: "http://localhost:9000/back/create/"+newsstyle(),
                dataType: "json",
                data: {'newstitle': newstitle, 'newsimg': newsimg, 'newscontent': newscontent, 'addtime': addtime },
                success: function(data) {
                    if (data.success) {
                        $(".callback").text(data.msg);
                    } else {
                        $(".callback").text("出现错误：" + data.msg);
                    }
                    location.reload();
                },
                error: function(jqXHR) {
                    alert("发生错误：" + jqXHR.status);
                }
            });
        }
    }

    function sendrevise() {
        $(".callback").text("请稍后...");
        var newsid = $("#newsid-revise").text();
        var newstyle = newsstyle();
        var newstitle = $("#newstitle-revise").val();
        var newsimg = $("#newsimg-revise").val();
        var newscontent = $("#newscontent-revise").val();
        var addtime = $("#addtime-revise").val();
        if (newstitle==""){
            $(".callback").text("信息不能为空");
        }else if(newsimg==""){
            $(".callback").text("信息不能为空")
        }else if(newscontent==""){
            $(".callback").text("信息不能为空")
        }else if(addtime==""){
            $(".callback").text("信息不能为空")
        }else{
            $.ajax({
                type: "POST",
                url: "http://localhost:9000/back/update/"+newsstyle(),
                dataType: "json",
                data: {'newsid': newsid, 'newstitle': newstitle, 'newsimg': newsimg, 'newscontent': newscontent, 'addtime': addtime },
                success: function(data) {
                    if (data.success) {
                        $(".callback").text(data.msg);
                    } else {
                        $(".callback").text("出现错误：" + data.msg);
                    }
                    location.reload();
                },
                error: function(jqXHR) {
                    alert("发生错误：" + jqXHR.status);
                }
            });
        };
    };
    // 日期选择
    $('#addtime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });

    $('#addtime').datetimepicker({
        language: 'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $('#addtime').datetimepicker({
        language: 'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0
    });
    $('#addtime-revise').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });

    $('#addtime-revise').datetimepicker({
        language: 'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $('#addtime-revise').datetimepicker({
        language: 'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0
    });
});

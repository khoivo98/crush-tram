const textConfig = {
    text1: "Hế lu Trâmm!",
    text2: "Anh có một số câu hỏi phỏng vấn ^^",
    text5: "Không phải đâuu :33",
    text6: "Hì. Đúng vậy <3 ",
    text7: "Haha. Anh nói chỉ có đúng thôi, nhìn là mờ ê mêêêêê ^^ ",
    text8: "Ááá...Đau tym quá <3 ",
    text9: "Mẹ ơi, con muốn lấy bé này ^^ ",
    text10: "Thực ra, Anh có điều muốn nói với em, đó chính là ... ",
    text11: "Gặp rồi anh nói cho haha ^^",
    text12: "Hì hì <3. Em hiểu anh quá cơ :3  ",
};

$(document).ready(function() {
    // process bar
    setTimeout(function() {

        firstQuestion();
        $(".spinner").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            overflow: "visible",
        });
    }, 600);
    $(".bg1").hide();
    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#no").html(textConfig.text5);
    $("#yes").html(textConfig.text6);

    function firstQuestion() {
        $(".content").hide();
        Swal.fire({
            title: "<h2 style='color:white'>" + textConfig.text1 + "</h2>",
            text: textConfig.text2,
            imageUrl: "img/cuteCat.jpg",
            imageWidth: 300,
            imageHeight: 300,
            background: '#fff url("img/iput-bg.jpg")',
            imageAlt: "Custom image",
        }).then(function() {
            $(".content").show(200);
        });
    }

    // switch button position
    function switchButton() {
        var leftNo = $("#no").css("left");
        var topNO = $("#no").css("top");
        var leftY = $("#yes").css("left");
        var topY = $("#yes").css("top");
        $("#no").css("left", leftY);
        $("#no").css("top", topY);
        $("#yes").css("left", leftNo);
        $("#yes").css("top", topNO);
    }
    // move random button póition
    function moveButton() {
        var audio = new Audio("sound/Swish1.mp3");
        audio.play();
        if (screen.width <= 600) {
            var x = Math.random() * 300;
            var y = Math.random() * 500;
        } else {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
        }
        var left = x + "px";
        var top = y + "px";
        $("#no").css("left", left);
        $("#no").css("top", top);
    }

    var n = 0;
    $("#no").mousemove(function() {
        if (n < 1) switchButton();
        if (n > 1) moveButton();
        n++;
    });
    $("#no").click(() => {
        if (screen.width >= 900) switchButton();
    });


    // show popup
    $("#yes").click(function() {
        $(".content").hide();
        Swal.fire({
            title: textConfig.text7,
            imageUrl: "img/4.jpg",
            imageWidth: 300,
            imageHeight: 300,
            confirmButtonText: 'Tiếp',
            background: '#FF3333 url("img/nen-tt.jpg")',
            imageAlt: "Custom image",
        }).then((result) => {
            Swal.fire({
                title: textConfig.text8,
                imageUrl: "img/2.jpg",
                imageWidth: 300,
                imageHeight: 300,
                confirmButtonText: 'Nữa',
                background: '#FAF0E6 url("img/input-bg.jpg")',
                imageAlt: "Custom image",
            }).then((result) => {
                Swal.fire({
                    title: textConfig.text9,
                    imageUrl: "img/6.jpg",
                    imageWidth: 300,
                    imageHeight: 300,
                    confirmButtonText: 'Ayzzaaa',
                    background: '#FAF0E6 url("img/nen3.jpg")',
                    imageAlt: "Custom image",
                }).then((result) => {
                    const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-success',
                            cancelButton: 'btn btn-danger'
                        },

                    })

                    swalWithBootstrapButtons.fire({
                        title: textConfig.text10,
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'Là gì?',
                        cancelButtonText: 'Em biết rồi :3',
                        background: '#FAF0E6 url("img/nen4.jpg")',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: textConfig.text11,
                                confirmButtonText: 'Dạ',
                            })

                        } else if (
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            Swal.fire({
                                    title: textConfig.text12,
                                    confirmButtonText: 'Yup Haha'
                                }

                            )

                        }
                    })
                })
            })
        });
    });
});
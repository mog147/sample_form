
// -------------------------------
// お問い合わせフォーム
// 参考資料
// https://logzitsu.tlog.work/archives/1511


// ①フォーム内容をGoogleフォームに送信→通知を受け取る
function postToGoogle() {

  //フォームの隊を取得
  var field1 = $('[name="entry.1564263618"]').val();
  var field2 = $('[name="entry.292870337"]').val();
  var field3 = $('[name="entry.1735355409"]').val();
  var field4 = $('[name="entry.1370003883"]').val();

  
  //urlやentryは書き換えてね。
            $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYEsQyqY1EzHRB7w8vg46BP_26vIJuk0lQjoJ_G1KD4qYslw/formResponse",
            data: {"entry.1564263618": field1,
  "entry.292870337": field2,
  "entry.1735355409": field3,
  "entry.1370003883": field4,
  },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function() {
                    //Success message
  location.href="#";
                },
                200: function() {
                    //Success Message
  location.href="#";
                }
            }
        });
        }

//②必須項目が空かどうかフラグ


  $(function() {
    //始めにjQueryで送信ボタンを無効化する
    $('.send').prop("disabled", true);
    
    //始めにjQueryで必須欄を加工する
    $('form input:required').each(function () {

        $(this).prev("label").addClass("required");

    });
    
    //入力欄の操作時
    $('form input:required').change(function () {

        //必須項目が空かどうかフラグ
        let flag = true;

        //必須項目をひとつずつチェック
        $('form input:required').each(function(e) {

            //もし必須項目が空なら
            if ($('form input:required').eq(e).val() === "") {
                flag = false;
            }

        });
        //全て埋まっていたら
        if (flag) {
            //送信ボタンを復活
            $('.send').prop("disabled", false);
        }

        else {
            //送信ボタンを閉じる
            $('.send').prop("disabled", true);

        }

    });

});


// お問い合わせフォーム
// -------------------------------
 

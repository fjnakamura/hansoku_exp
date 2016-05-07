$(function () {
  var nyukinmachiTxt = "入金待ちなり";
  var cancelTxt = "キャンセルなり";
  $("select[name='status']").change( function () {
    var mailTextArea = $("textarea[name='comments']");
    switch (this.value) {

      // ご入金待ち
      case "5":
        mailTextArea.val(nyukinmachiTxt);
        break;

      // キャンセル
      case 8:
        mailTextArea.val(cancelTxt);
        break;
      default:
        break;
    }
  });
});

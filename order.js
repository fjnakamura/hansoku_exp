$(function () {
  $("select[name='status']").change( function () {
    var mailTextArea = $("textarea[name='comments']");
    switch (this.val) {

      // ご入金待ち
      case 7:
        break;

      // キャンセル
      case 8:
        break;
      default
        break;
    }
    mailTextArea.value();
  });
});

  //Executes your code when the DOM is ready.  Acts the same as $(document).ready().
  $(function() {
      //Calls the tocify method on your HTML div.
      $("#toc").tocify();
  });

  var client = new ZeroClipboard( $("span#scenario1button_create-backup") );
  var client = new ZeroClipboard( $("span#scenario1button_deploydev") );
  var client = new ZeroClipboard( $("span#scenario1button_deploytest") );
  var client = new ZeroClipboard( $("span#scenario2button_clear-cache") );
  var client = new ZeroClipboard( $("span#scenario3button_scenario3") );

//$(document).ready(function(){
      $('#population').click(function(){
            $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10').css('z-index', '0');
            $('#02, #06').css('z-index', '1');
      });

      $('#income').click(function(){
            $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10').css('z-index', '0');
            $('#05, #07').css('z-index', '1');
      });

       $('#housing').click(function(){
            $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10').css('z-index', '0');
            $('#03, #04').css('z-index', '1');
      });

       $('#urban').click(function(){
            $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10').css('z-index', '0');
            $('#05, #06').css('z-index', '1');
      });

       $('#rural').click(function(){
            $('#01, #02, #03, #04, #05, #06, #07, #08, #09, #10').css('z-index', '0');
            $('#02, #07').css('z-index', '1');
      });
    });

function add(number1, number2) {
  return number1 + number2;
};

function sub(number1, number2) {
  return number1 - number2;
};

function multi(number1, number2) {
  return number1 * number2;
};

function divi(number1, number2) {
  return number1 / number2;
};



$(document).ready(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#addOutput").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = sub(number1, number2);
    $("#subtractOutput").text(result);
});
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divi(number1, number2);
    $("#divideOutput").text(result);

  });

  $("form#multi").submit(function(even) {
    even.preventDefault();
    var number1 = parseInt($("#multi1").val());
    var number2 = parseInt($("#multi2").val());
    var result = multi(number1, number2);
    $("#multiOutput").text(result);


  })

});

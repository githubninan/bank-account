//business logic
function BankAccount(name, initial, balance) {
  this.name = name;
  this.initial = initial;
  this.balance = balance;
}


BankAccount.prototype.deposit = function() {

  return this.balance + depositInput;
  }
BankAccount.prototype.withdrawal = function() {

  return this.balance - withdrawalInput;
  }

//User Interface Logic
$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();
    var depositInput = ParseInt($("#deposit").val());
    var withdrawalInput = ParseInt($("withdrawal").val());

    var balance = 0;
    var newAccount = new BankAccount (depositInput, withdrawalInput, balance)
    var currentBalance = newAccount.balance();



    $("#current-balance").text(currentBalance);
    $("#current-balance").show();
  });
});

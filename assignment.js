//  https://github.com/Safwan504/assignment-three

// 1meter = .001km
function kilometerToMeter(kilometer) {
    var meter = kilometer/.001;
    return meter;
}


// megafriend var friends = ["am", "jam", "kathal", "kola"]
function megaFriend(friends) {
  var longestName = "";
  for(var i = 0; i < friends.length; i++){
        if(friends[i].length > longestName.length){
        longestName = friends[i];
        }
  }
 return longestName;
}


// hotel cost Calculate
function hotelCost(days){
var cost = 0;
if(days <= 10){
    cost = days * 100;
}
else if(days <= 20) {
    var firstPart = 10 * 100;
    var remaining = days - 10;
    var secondPart = remaining * 80;
    cost = firstPart + secondPart;
}
else{
    var firstPart = 10*100;
    var secondPart = 10*80;
    var remaining = days - 20;
    var thirdPart = remaining * 50;
    cost = firstPart + secondPart + thirdPart;
}
return cost;
}


// BudgetCalculator part
function budgetCalculator(watch, phone, laptop){
    var watchPrice = 50 * watch;
    var phonePrice = 100 * phone;
    var laptopPrice = 500 * laptop;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}


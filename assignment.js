//kiloMeterTometer
function kiloMeterToMeter(km) {
    var meters = km * 1000;
    return meters;
}

//kiloMeterTometer_Completed

//budgetCalculator

function budgetCalculator(x, y, z) {
    var clocks = x;
    var mobiles = y;
    var laptops = z;

    var clocksTotal = clocks * 50;
    var mobilesTotal = mobiles * 100;
    var laptopsTotal = laptops * 500;

    return clocksTotal + mobilesTotal + laptopsTotal;
}

//BudgetCalulator_completed

//hotelcost_started
function hotelCost(x) {
    if (x < 10) {
        var result = x * 100;
        return result;
    } else if (x > 10 && x < 20) {
        var result = 1000 + (x - 10) * 80;
        return result;
    } else if (x > 20) {
        var result = 1800 + (x * 50);
        return result;
    }
}

//hotel_cost_Compleeted

//megaFriend_Started
function megaFriend(name) {
    var friendsName = name[0];
    for (i = 0; i < name.length; i++) {
        var longestName = name[i];
        if (longestName[i] > friendsName) {
            friendsName = longestName;

            return longestName;
        }
    }
}



//mega_friend_completed
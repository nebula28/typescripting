var sliceOfCake = function (slices, type) {
    if (slices === void 0) { slices = 1; }
    if (slices === 1) {
        console.log("you take a slice of " + type + " cake...");
    }
    else if (slices > 1) {
        console.log("you take " + slices + " slices of " + type + " cake...");
    }
    else {
        console.log("you didn't take any cake... what's wrong with you?");
    }
};
sliceOfCake(2, 'ice cream');

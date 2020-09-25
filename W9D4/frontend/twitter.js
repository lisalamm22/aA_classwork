const FollowToggle = require("./follow_toggle.js");


$(function () {
    console.log("ready!");
    const $followToggleButtons = $(".follow-toggle");
    console.log($followToggleButtons);
    console.log($followToggleButtons.length);
    let followToggleInstances = [];
    for(let k=0; k<$followToggleButtons.length; k++){
        console.log("in this loop");
        let instance = FollowToggle.constructor($followToggleButtons[k]);
        followToggleInstances.push(instance);
    }
});


// User.all();
// FollowToggle.all();

// get all the buttons : use class .follow_toggle
// call constructor for each
// 
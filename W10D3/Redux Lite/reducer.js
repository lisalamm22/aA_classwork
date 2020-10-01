let state = {
    user: "Andy",
    role: "Instructor"
};

const action = {
    type: "change role",
    newRole: "Student",
    type: "add role"
};


const roleReducer = (oldRole = null, action) => {
    if (action.type === "change role") {
        return action.newRole; //should we reassign? state.role = action.newRole?
    } 
    else if(action.type === "add role"){
        return state.newRole = action.newRole
    }
    else {
        return oldRole;
    }
};

// console.log(roleReducer(state.role, action))
// console.log(state)

let state = {
    hungerLevel: "high",
    nextMeal: "dinner",
    whatsForDinner: "fried chicken"
}

const action = {
    type: "increase hunger",
    upHungerLevel: "extremely high",
    type: "decrease hunger",
    downHungerLevel: "fed"
}

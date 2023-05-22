function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work='go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(char ='*') {
    return function(adjective='special') {
        return `You are ${char}${adjective}${char}!`;
    }
}

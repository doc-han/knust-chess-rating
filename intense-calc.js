exports.calc = function (hugeObj) {
    let { current, old } = hugeObj;
    let locs = new Map();

    old.forEach((user, index) => {
        locs.set(user.username, index);
    });

    current.forEach((user, index) => {
        if(locs.has(user.username)){
            // user exists
            let oldIndex = locs.get(user.username);
            user.blitzProg = user.blitz - old[oldIndex].blitz;
            user.bulletProg = user.bullet - old[oldIndex].bullet;
            user.rapidProg = user.rapid - old[oldIndex].rapid;
        }else{
            // user is new
            user.blitzProg = 0;
            user.bulletProg = 0;
            user.rapidProg = 0;
        }
    })
    return current;
}
class Sort {
    static blitzSorter = (a, b) => {
        if (a.blitzGames == 0 && a.blitz == b.blitz && b.blitzGames == 0) return 0;
        else if (a.blitzGames == 0 && b.blitzGames != 0) return 1;
        else if (a.blitzGames != 0 && b.blitzGames == 0) return -1;
        else return b.blitz - a.blitz;
    }

    static bulletSorter =  (a, b) => {
        if (a.bulletGames == 0 && a.bullet == b.bullet && b.bulletGames == 0) return 0;
        else if (a.bulletGames == 0 && b.bulletGames != 0) return 1;
        else if (a.bulletGames != 0 && b.bulletGames == 0) return -1;
        else return b.bullet - a.bullet;
    }

    static rapidSorter =  (a, b) => {
        if (a.rapidGames == 0 && a.rapid == b.rapid && b.rapidGames == 0) return 0;
        else if (a.rapidGames == 0 && b.rapidGames != 0) return 1;
        else if (a.rapidGames != 0 && b.rapidGames == 0) return -1;
        else return b.rapid - a.rapid;
    }
}
module.exports = Sort;


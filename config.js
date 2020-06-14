class Config {
    static formatRatings(data) {
        return data.map(i => {
            return {
                username: i.username,
                blitz: i.perfs.blitz.rating,
                bullet: i.perfs.bullet.rating,
                rapid: i.perfs.rapid.rating,
                blitzGames: i.perfs.blitz.games,
                bulletGames: i.perfs.bullet.games,
                rapidGames: i.perfs.rapid.games
            }
        })
    }

    static parseData(data) {
        let resp = data.map((i, e) => {
            return JSON.parse(i);
        });
        return resp;
    }

    static support = ["blitz","bullet","rapid"];

    static isSupported = (type) => this.support.includes(type);
}

module.exports = Config
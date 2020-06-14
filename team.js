const Config = require('./config');

class Team {

    constructor(teamId) {
        this.teamId = teamId;
        this.$ = require('request-promise');
    }

    getTeamData = (teamURI) => {
        return new Promise((resolve, reject) => {
            $(teamURI, (err, data) => {
                data = data.body;
                data = data.split('\n');
                data.pop();
                data = Config.parseData(data);
                resolve(data);
            })
        })
    }

    getTeamURI = (teamId) => `https://lichess.org/api/team/${teamId}/users`

}

module.exports = Team;
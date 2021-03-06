'use strict';

import db from '../../data-access/stats';

export class StatsReport {

    constructor(tournamentId) {
        this.tournamentId = tournamentId;
    }

    getTeamReport(phaseId) {
        return new Promise((resolve, reject) => {
            db.teamReport(this.tournamentId, phaseId)
                .then(result => resolve(result))
                .catch(error => reject(error));
        })
    }

    getIndividualReport(phaseId) {
        return new Promise((resolve, reject) => {
            db.individualReport(this.tournamentId, phaseId)
                .then(result => resolve(result))
                .catch(error => reject(error));
        })
    }

    getTeamFullReport(phaseId) {
        return new Promise((resolve, reject) => {
            db.teamFullReport(this.tournamentId, phaseId)
                .then(result => resolve(result))
                .catch(error => reject(error));
        })
    }

    getPlayerFullReport(phaseId) {
        return new Promise((resolve, reject) => {
            db.playerFullReport(this.tournamentId, phaseId)
                .then(result => resolve(result))
                .catch(error => reject(error));
        })
    }

    getRoundReport(phaseId) {
        return new Promise((resolve, reject) => {
            db.roundReport(this.tournamentId, phaseId)
                .then(result => resolve(result))
                .catch(error => reject(error));
        })
    }

}
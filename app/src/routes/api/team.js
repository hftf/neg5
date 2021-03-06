import Team from './../../models/sql-models/team';

import {hasToken} from './../../auth/middleware/token';
import {accessToTournament, adminAccessToTournament, directorAccessToTournament} from './../../auth/middleware/tournament-access';

export default (app) => {
    
    app.route('/api/t/:tid/teams')
        .get(hasToken, accessToTournament, (req, res) => {
            Team.findByTournament(req.params.tid)
                .then(teams => res.json({teams}))
                .catch(error => res.status(500).send(error));
        })
        .post(hasToken, accessToTournament, (req, res) => {
            Team.addToTournament(req.params.tid, req.body.team, req.currentUser)
                .then(team => res.json({team, success: true}))
                .catch(error => res.status(500).send({error}));
        })
        
    app.route('/api/t/:tid/teams/:teamId')
        .get(hasToken, accessToTournament, (req, res) => {
            Team.findById(req.params.tid, req.params.teamId)
                .then(result => res.json({result, success: true}))
                .catch(error => res.status(500).send({error, success: false}))
        })
        .put(hasToken, adminAccessToTournament, (req, res) => {
            Team.updateName(req.params.tid, req.params.teamId, req.body.name)
                .then(result => res.json({result, success: true}))
                .catch(error => res.status(500).send({error, success: false}))
        })
        .delete(hasToken, adminAccessToTournament, (req, res) => {
            Team.deleteTeam(req.params.tid, req.params.teamId)
                .then(result => res.json({result, success: true}))
                .catch(error => res.status(500).send({error, success: false}))
        })

    app.route('/api/t/:tid/teams/:teamId/divisions')
        .put(hasToken, adminAccessToTournament, (req, res) => {
            Team.updateDivisions(req.params.tid, req.params.teamId, req.body.divisions)
                .then(result => res.json({result, success: true}))
                .catch(error => res.status(500).send({error, success: false}))
        })
    

}
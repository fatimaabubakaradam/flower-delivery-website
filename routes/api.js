const express = require('expess');
const router = express.Router();
Router.get('/flower', function(req, res)
{
    res.send({type: 'GET'});
} );
Router.post('/flower', function(req, res)
{
    res.send({type: 'POST'});
} );
Router.put('/flower/:id', function(req, res)
{
    res.send({type: 'PUT'});
} );
Router.delete('/flower/:id', function(req, res)
{
    res.send({type: 'DELETE'});
} );

module.exports = router
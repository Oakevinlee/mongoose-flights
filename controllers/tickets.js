const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    addTicket
    
};


function newTicket(req, res) {
    res.render('tickets/new', {flightId: req.params.id})

}

function addTicket(req, res) {
    const ticket = req.body
    ticket.flight = req.params.id
    Ticket.create(ticket, function(err, ticket){
    res.redirect(`/flights/${req.params.id}`)
    })
}





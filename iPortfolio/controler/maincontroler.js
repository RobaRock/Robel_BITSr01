const Feedback = require('../module/feedback')

module.exports.get_index =  (req,res) =>{
    res.render("index")
}
module.exports.get_portfolio_details = (req,res) =>{
    res.render("portfolio-details")
}
module.exports.post_send_feedback = (req ,res) =>{
    console.log(req.body);
    const feedback = new Feedback(req.body)
    feedback.save()
    .then(() => {
        res.status(201).json({message: "Your message has been sent. Thank you!"});
     console.log('write Successfully')
    })
    .catch((err) => {
        res.status(400).json({message: "Your message has not been sent. Try again!"});
      console.log(err);
    });

}
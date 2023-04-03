const Query = require('../models/query');

exports.userquery = async(req, res) =>{
    try{
        const userQuery=req.body;
        const query = new Query({
            userName: userQuery.name,
            userEmail: userQuery.email,
            subject: userQuery.subject,
            message: userQuery.message
        });
        await query.save()

        res.status(201).json({message: "Query Posted"});
    } catch (error){
        res.status(500).json({ message: 'Something Went Wrong'});
    }
}
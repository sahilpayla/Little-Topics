const registerController = async(req, res) => {
    try{
    
    }
    catch(err){
        console.log("error --> ", err.message)
        res.status(500).json({
            failure: true,
            message: 'Error in --> register API',
            err
        })
    }
}

module.exports = registerController;
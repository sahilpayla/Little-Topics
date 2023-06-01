const testController = (req, res) => {
    res.status(200).json({
        message:"Bill gates",
        success: true,
    })
}

module.exports = testController ;
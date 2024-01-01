import { asyncHandler } from "../utils/asyncHandler.js";

const regsiterUser = asyncHandler( async (req,res) => {
    res.status(200).json({
        message: "saurav"
    })
})

export {
    regsiterUser,
}
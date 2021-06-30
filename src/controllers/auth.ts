import { Request, Response } from 'express';

import { asyncHandler } from "../middlewares/asyncHandler";

// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
const register = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ desc: "OK" });
});

export { register };
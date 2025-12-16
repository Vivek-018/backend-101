import { Router } from "express";
import Controllers from "../controllers/index"
import { authenticateUser, validateRequest } from "../middlewares";
import validators from "../validators";
import { otpRateLimit } from "../middlewares/rateLimiter";

const router = Router();

router.get("/campaigns",authenticateUser,validateRequest(validators.CampaignValidatorSchema.getCampaigns), Controllers.Campaign.getCampaigns);

export default router;

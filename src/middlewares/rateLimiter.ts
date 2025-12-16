import rateLimit from "express-rate-limit";


// export const limiter = rateLimit({
// 	windowMs: 5 * 60 * 1000, // 5 minutes
// 	max: 30, // Limit each IP to 30 requests per `window` (here, per 5 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//   message: "Too many requests from this IP, please try again after 5 minutes",
// })
export const limiter = rateLimit({
	windowMs: 1, // 5 minutes
	max: 300, // Limit each IP to 30 requests per `window` (here, per 5 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Too many requests from this IP, please try again after 5 minutes",
});

export const otpRateLimit = rateLimit({
	windowMs: 4 * 1000, // 4 seconds
	max: 1, // Limit each IP to 1 request per `window`
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  	message: "Too many buy requests, please try again",
})
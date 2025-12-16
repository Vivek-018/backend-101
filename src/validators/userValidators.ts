import { nullable, z } from "zod";

export default class CampaignValidatorSchema {
  static getCampaigns = z.object({
    body: z.object({
    }).strict(),
    params: z.object({
    }).strict(),
    query: z.object({}).strict(),
  }).strict();

}

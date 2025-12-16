export default class Campaign{
    static getCampaigns = async (req, res) => {
        try {
            const data = [
                { id: 1, name: "Campaign 1", description: "Description for Campaign 1" },
                { id: 2, name: "Campaign 2", description: "Description for Campaign 2" },
            ];
            res.status(200).json({status: true, data, message: "Campaigns fetched successfully"});
        } catch (error) {
            res.status(500).json({ status: false, message: "Campaigns fetched successfully" });
        }
    }
}
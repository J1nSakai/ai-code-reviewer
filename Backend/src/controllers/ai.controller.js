import generateReview from "../services/ai.service.js";

export const reviewController = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    res.status(400).send("Prompt is required");
  }

  const review = await generateReview(code);
  res.send(review);
};

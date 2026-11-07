export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { policyText, scenario } = req.body;

    if (!policyText?.trim()) {
      return res.status(400).json({
        error: "Policy text is required.",
      });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          temperature: 0.1,
          max_tokens: 3000,

          messages: [
            {
              role: "system",
              content: `You decode insurance policies for ordinary people.

Return ONLY valid JSON in this exact structure:

{
  "summary": "string",
  "policyType": "string",
  "covered": [
    {
      "item": "string",
      "plain": "string"
    }
  ],
  "exclusions": [
    {
      "clause": "string",
      "plain": "string",
      "severity": "high|med|low"
    }
  ],
  "conditions": [
    {
      "clause": "string",
      "plain": "string"
    }
  ],
  "waitingPeriods": [
    {
      "what": "string",
      "duration": "string"
    }
  ],
  "glossary": [
    {
      "term": "string",
      "meaning": "string"
    }
  ],
  "riskScore": 0,
  "scenarioVerdict": {
    "likely": "paid|partial|rejected|unclear",
    "why": "string"
  }
}

Rules:
- Only use information actually present in the policy.
- Never invent clauses.
- Quote the source clause when identifying exclusions or conditions.
- If something cannot be determined, say "unclear".
- riskScore must be between 0 and 100.
- Return JSON only.
- Do not use markdown.`,
            },
            {
              role: "user",
              content: `POLICY:
${policyText.slice(0, 60000)}

SCENARIO:
${scenario || "none"}`,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Groq API request failed.",
      });
    }

    const text = data.choices?.[0]?.message?.content || "{}";

    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleaned);

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Could not decode the policy.",
    });
  }
}
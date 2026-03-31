export const rehearsalSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "scenarioTitle",
    "readinessScore",
    "signalHeadline",
    "executiveBrief",
    "narrative",
    "stance",
    "flashpoints",
    "drills",
    "voices",
    "timeline",
    "proofPoints",
    "launchChecklist",
  ],
  properties: {
    scenarioTitle: {
      type: "string",
    },
    readinessScore: {
      type: "number",
      minimum: 0,
      maximum: 100,
    },
    signalHeadline: {
      type: "string",
    },
    executiveBrief: {
      type: "string",
    },
    narrative: {
      type: "string",
    },
    stance: {
      type: "string",
    },
    flashpoints: {
      type: "array",
      minItems: 2,
      maxItems: 4,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["title", "detail", "severity"],
        properties: {
          title: {
            type: "string",
          },
          detail: {
            type: "string",
          },
          severity: {
            type: "string",
            enum: ["low", "medium", "high"],
          },
        },
      },
    },
    drills: {
      type: "array",
      minItems: 3,
      maxItems: 4,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["title", "detail", "owner"],
        properties: {
          title: {
            type: "string",
          },
          detail: {
            type: "string",
          },
          owner: {
            type: "string",
          },
        },
      },
    },
    voices: {
      type: "array",
      minItems: 3,
      maxItems: 5,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["role", "concern"],
        properties: {
          role: {
            type: "string",
          },
          concern: {
            type: "string",
          },
        },
      },
    },
    timeline: {
      type: "array",
      minItems: 3,
      maxItems: 4,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["label", "detail"],
        properties: {
          label: {
            type: "string",
          },
          detail: {
            type: "string",
          },
        },
      },
    },
    proofPoints: {
      type: "array",
      minItems: 3,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
    launchChecklist: {
      type: "array",
      minItems: 4,
      maxItems: 6,
      items: {
        type: "string",
      },
    },
  },
} as const;

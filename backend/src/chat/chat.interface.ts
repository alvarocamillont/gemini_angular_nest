export interface ContentReturn {
  candidates: Candidate[];

  promptFeedback: PromptFeedback;
}

export interface PromptFeedback {
  safetyRatings: SafetyRating[];
}

export interface Candidate {
  content: Content;

  finishReason: string;

  index: number;

  safetyRatings: SafetyRating[];
}

export interface SafetyRating {
  category: string;

  probability: string;
}

export interface Content {
  parts: Part[];

  role: string;
}

export interface Part {
  text: string;
}

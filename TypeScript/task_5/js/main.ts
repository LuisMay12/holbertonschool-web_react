// 10. Brand convention & Nominal typing

// Branded interfaces (nominal-ish)
export interface MajorCredits {
  credits: number;
  readonly brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  readonly brand: 'MinorCredits';
}

// Sum functions with correct return brands
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits',
  };
}

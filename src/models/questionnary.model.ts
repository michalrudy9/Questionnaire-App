export interface Questionnary {
  title: string;
  description: string;
  questions: [
    {
      question: string;
      inputType: string,
      options: string[];
      shortAnswer: string;
      scaleFrom: number;
      scaleTo: number;
    }
  ];
}

export type Title = "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care"

export default interface Activity {
  title: Title;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    },
    weekly: {
      current: number;
      previous: number;
    },
    monthly: {
      current: number;
      previous: number;
    }
  }
}


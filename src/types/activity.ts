export default interface Activity {
  activityName: string;
  timeCategory: "day" | "week" | "month";
  currentTime: number;
  previousTime: number;
}

import "./RefreshCountdown.css";

export default function RefreshCountdown({ timeToRefresh }) {
  return <span className="refresh-countdown">resfreshing in {timeToRefresh} seconds...</span>;
}

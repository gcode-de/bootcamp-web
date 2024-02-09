import "./ActivityItem.css";
export default function ActivityItem({ activity, handleDelete }) {
  return (
    <li className="activityItem">
      <span className="activity-name">{activity}</span>
      <button
        className="delete-button"
        onClick={() => {
          handleDelete(activity);
        }}
        aria-label="delete activity"
        title="delete"
      >
        ❌
      </button>
    </li>
  );
}

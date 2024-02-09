import ActivityItem from "../ActivityItem";
import "./ActivityList.css";
export default function ActivityList({ activities, handleDelete }) {
  return (
    <div className="ActivityList">
      <p>
        <b>Suggested activities:</b>
      </p>
      <ul>
        {activities.map((activity) => (
          <ActivityItem key={activity.name} activity={activity.name} handleDelete={handleDelete}></ActivityItem>
        ))}
      </ul>
    </div>
  );
}

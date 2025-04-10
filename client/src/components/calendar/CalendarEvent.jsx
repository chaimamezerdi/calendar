const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <div>
      <strong>{title}</strong>
      <span> - {user?.name || "Unknown User"}</span> {/* Fallback to "Unknown User" */}
    </div>
  );
};
export default CalendarEvent;

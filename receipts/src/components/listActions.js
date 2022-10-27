import "../assets/styles/listActions.css";

function ListActions(uid) {
  return (
    <div className="actions">
      <button>[edit ({uid.uid})]</button>
      <button>[del. ({uid.uid})]</button>
    </div>
  );
}

export default ListActions;

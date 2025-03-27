export default function TaskCard({ task, priority, onDelete }) {
    return (
      <div className="w-[40rem] bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{task}</h3>
          <p className="text-gray-500 text-sm">Priority: {priority}</p>
        </div>
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    );
}
export default function Modal({
  title,
  message,
  confirm,
  cancel,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-[#30313A] text-gray-300 p-6 rounded-lg shadow-lg md:w-[40%] w-[80%] lg:w-[20%]">
        <h2 className="text-xl font-bold mb-2 ">{title}</h2>
        <p className="mb-4">{message}</p>

        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-gray-800"
            onClick={onCancel}
          >
            {cancel}
          </button>
          <button
            className="px-4 py-2 bg-red-800 text-white rounded"
            onClick={onConfirm}
          >
            {confirm}
          </button>
        </div>
      </div>
    </div>
  );
}

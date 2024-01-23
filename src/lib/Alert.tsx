import React from "react";

interface AlertProps {
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ title, message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 px-4 py-6">
      <div className="bg-white p-4 rounded-lg shadow-xl text-center max-w-sm mx-auto w-full">
        <h2 className="text-lg font-bold mb-4">
          {title}
        </h2>
        <p className="mb-4">
          {message}
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;

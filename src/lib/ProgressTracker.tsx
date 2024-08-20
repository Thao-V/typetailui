import React from 'react';
import Container from './Container';

export interface Topic {
  title: string;
  completed: boolean;
}

interface ProgressTrackerProps {
  topics: Topic[];
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ topics }) => {
  return (
    <Container className="p-5 max-w-lg mx-auto">
      <ul className="list-none p-0">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-center mb-6">
            <div
              className={`w-5 h-5 rounded-full ${
                topic.completed ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            <div className="flex-1 border-t-2 ml-2 mr-2">
              <div
                className={`${
                  topic.completed ? 'w-full bg-green-500' : 'w-0'
                } h-0.5 transition-all duration-300`}
              />
            </div>
            <span className="ml-4">{topic.title}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProgressTracker;

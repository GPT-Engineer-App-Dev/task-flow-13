import React from "react";

const TodayPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>
      {/* Task List */}
      <div className="space-y-4">
        {/* Example Task */}
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="form-checkbox" />
          <div>
            <p className="text-lg">Example Task</p>
            <p className="text-sm text-muted-foreground">Due Date: Today</p>
          </div>
        </div>
        {/* Add more tasks here */}
      </div>
      {/* Add Task Input */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default TodayPage;
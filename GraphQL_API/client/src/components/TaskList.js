import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import TaskDetails from './TaskDetails';
import { graphql } from '@apollo/client/react/hoc';

// Construct the query
const GET_TASKS_QUERY = gql`
  {
    tasks {
      id
      title
    }
  }
`;

function TaskList(props) {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(GET_TASKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="task-list">
        {data.tasks.map(task => (
          <li key={task.id} onClick={() => setSelected(task.id)}>
            {task.title}
          </li>
        ))}
      </ul>
      <TaskDetails taskId={selected} />
    </div>
  );
}

export default graphql(GET_TASKS_QUERY)(TaskList); // export default TaskList;

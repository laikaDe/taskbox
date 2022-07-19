import React from 'react';
import Task from './Task';

//Here the Task object is stored as a default object with the props
//component: Task, and title: 'Task'
export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;
//Jsx elements are capitalized 
//Template takes in all properties of the Task component with ...notation syntax

// Template.bind({}) is assigned to Default 
// This stores the default args of task to Default object
// so that the Default object can be called again in different 
// functions such as Pinned and Archived
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
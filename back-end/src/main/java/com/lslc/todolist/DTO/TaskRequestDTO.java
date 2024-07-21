package com.lslc.todolist.DTO;

import com.lslc.todolist.Entities.Task;

public class TaskRequestDTO {
    private Long userId;
    private Task task;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }
}

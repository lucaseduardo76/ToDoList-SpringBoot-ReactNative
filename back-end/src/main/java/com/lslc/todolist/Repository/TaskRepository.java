package com.lslc.todolist.Repository;

import com.lslc.todolist.Entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}

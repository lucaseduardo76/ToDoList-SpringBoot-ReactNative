package com.lslc.todolist.Service;

import com.lslc.todolist.DTO.TaskRequestDTO;
import com.lslc.todolist.Entities.Task;
import com.lslc.todolist.Entities.User;
import com.lslc.todolist.Repository.TaskRepository;
import com.lslc.todolist.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    @Autowired
    private UserRepository userRepository;

    public List<Task> findAll() {
        return repository.findAll();
    }

    public Task findById(Long id) {
        Optional<Task> task = repository.findById(id);
        return task.orElse(null);
    }

    public Task insert(TaskRequestDTO obj) {
        User user = userRepository.findById(obj.getUserId()).orElse(null);

        if (user == null) {
            return null;
        }

        Task task = obj.getTask();
        if (task == null) {
            return null;
        }

        task.setUser(user);
        return repository.save(task);
    }

    public Task update(Long id, Task task) {
        Optional<Task> entity = repository.findById(id);
        if (entity.isPresent()) {
            return updateTask(entity.get(), task);
        } else {
            return null; // ou lançar uma exceção apropriada
        }
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private Task updateTask(Task entity, Task obj) {
        entity.setTitle(obj.getTitle());
        entity.setDescription(obj.getDescription());
        entity.setStatus(obj.getStatus());

        return repository.save(entity);
    }
}

package com.lslc.todolist.Service;

import com.lslc.todolist.DTO.LoginRequestDTO;
import com.lslc.todolist.Entities.User;
import com.lslc.todolist.Repository.UserRepository;
import com.lslc.todolist.Util.Cryptography;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> findAll() {
        return repository.findAll();
    }

    public User findById(Long id) {
        Optional<User> user = repository.findById(id);
        return user.orElse(null);
    }

    public User insert(User user) {
        user.setPassword(Cryptography.encrypt(user.getPassword()));
        return repository.save(user);
    }

    public User login(LoginRequestDTO loginRequestDTO) {
        List<User> users = repository.findAll();

        List<User> t = new ArrayList<User>();


        for (User u : users) {
            if(u.getEmail().equalsIgnoreCase(loginRequestDTO.getEmail())
                    && Cryptography.checkPassword(loginRequestDTO.getPassword(), u.getPassword())) {
                return u;
            }

        }

        return null;
    }

    public User update(Long id, User user) {
        User entity = new User();
        return updateUser(entity,user);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private User updateUser(User entity, User obj) {
        entity.setName(obj.getName());
        entity.setEmail(obj.getEmail());
        entity.setPassword(obj.getPassword());

        return repository.save(entity);
    }

}

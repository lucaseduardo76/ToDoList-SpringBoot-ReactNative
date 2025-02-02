package com.lslc.todolist.Controllers;

import com.lslc.todolist.DTO.LoginRequestDTO;
import com.lslc.todolist.Entities.User;
import com.lslc.todolist.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> findAll(){

        List<User> listU = userService.findAll();

        return ResponseEntity.ok().body(listU);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id){

        User user = userService.findById(id);
        return ResponseEntity.ok().body(user);

    }

    @PostMapping(value = "/add")
    public ResponseEntity<User> insert(@RequestBody User obj){
        obj = userService.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id]").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<User> login(@RequestBody LoginRequestDTO obj){
        User u = userService.login(obj);
        return ResponseEntity.ok().body(u);
    }


    @DeleteMapping(value = "/del/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){

        userService.delete(id);
        return ResponseEntity.noContent().build();

    }

    @PutMapping(value = "/update/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User obj){
        obj = userService.update(id, obj);
        return ResponseEntity.ok().body(obj);

    }
}

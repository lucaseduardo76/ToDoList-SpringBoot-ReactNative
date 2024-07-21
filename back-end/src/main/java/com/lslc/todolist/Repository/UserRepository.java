package com.lslc.todolist.Repository;

import com.lslc.todolist.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

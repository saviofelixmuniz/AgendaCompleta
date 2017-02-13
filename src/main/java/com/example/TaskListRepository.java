package com.example;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by saviomuniz on 04/02/17.
 */
public interface TaskListRepository extends MongoRepository<TaskList,String> {

}

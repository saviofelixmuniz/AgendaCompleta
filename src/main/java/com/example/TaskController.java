package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by saviomuniz on 12/02/17.
 */

@Controller
public class TaskController {
    @Autowired
    private TaskListRepository repository;

    @RequestMapping(value = "/list/save",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveLists (List<TaskList> lists) {
        repository.deleteAll();
        for (TaskList list:
             lists) {
            repository.save(list);
        }
    }

    @RequestMapping("/list/get")
    public ResponseEntity<List<TaskList>> getLists () {
        System.out.println(repository.findAll().get(0).name);
        return new ResponseEntity(repository.findAll(), HttpStatus.OK);
    }



}

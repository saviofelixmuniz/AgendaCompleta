package com.example;

import org.springframework.data.annotation.Id;

import java.util.List;

/**
 * Created by saviomuniz on 04/02/17.
 */
public class TaskList {

    @Id
    public String id;

    public String name;
    public List<Task> tasks;

    public TaskList(String name, List<Task> tasks) {
        this.name = name;
        this.tasks = tasks;
    }

    public TaskList() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}

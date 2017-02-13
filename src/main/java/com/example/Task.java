package com.example;

import org.springframework.data.annotation.Id;

/**
 * Created by saviomuniz on 12/02/17.
 */
public class Task {

    @Id
    public String id;

    private String name;
    private String description;
    private String priority;
    private String category;
    private TaskList list;

    private SubTasks subTasks;

    public Task(String name, String description, String priority, String category, TaskList list, SubTasks subTasks) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.category = category;
        this.list = list;
        this.subTasks = subTasks;
    }

    public Task() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public TaskList getList() {
        return list;
    }

    public void setList(TaskList list) {
        this.list = list;
    }

    public SubTasks getSubTasks() {
        return subTasks;
    }

    public void setSubTasks(SubTasks subTasks) {
        this.subTasks = subTasks;
    }
}

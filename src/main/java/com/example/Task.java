package com.example;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import java.io.Serializable;

/**
 * Created by saviomuniz on 12/02/17.
 */

@Entity
public class Task implements Serializable{

    @Id
    private long id;

    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String priority;
    @Column
    private String category;
    @Column
    private TaskList list;
    @Column
    private SubTasks subTasks;

    public Task(String name, String description, String priority, String category, TaskList list, SubTasks subTasks) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.category = category;
        this.list = list;
        this.id = (long) (Math.random()*1000);
        this.subTasks = subTasks;
    }

    public Task() {
        this.id = (long) (Math.random()*1000);

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    @Override
    public String toString(){
        return getName();
    }
}

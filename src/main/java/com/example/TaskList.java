package com.example;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import java.io.Serializable;
import java.util.List;

/**
 * Created by saviomuniz on 04/02/17.
 */
@Entity
public class TaskList implements Serializable{

    @Id
    private long id;

    @Column
    public String name;
    @Column
    public List<Task> tasks;

    public TaskList(String name, List<Task> tasks) {
        this.id = (long) (Math.random()*1000);
        this.name = name;
        this.tasks = tasks;
    }

    public TaskList() {
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

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    @Override
    public String toString(){
        return getName()+ " - "+getTasks();
    }
}

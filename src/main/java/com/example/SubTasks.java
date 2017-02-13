package com.example;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import java.io.Serializable;
import java.util.List;

/**
 * Created by saviomuniz on 12/02/17.
 */

@Entity
public class SubTasks implements Serializable{

    @Id
    private long id;


    @Column
    List<String> undone;
    @Column
    List<String> done;

    public SubTasks(List<String> undone, List<String> done) {
        this.undone = undone;
        this.done = done;
        this.id = (long) (Math.random()*1000);

    }

    public SubTasks() {
        this.id = (long) (Math.random()*1000);

    }

    public long getId(){return this.id;}

    public List<String> getUndone() {
        return undone;
    }

    public void setUndone(List<String> undone) {
        this.undone = undone;
    }

    public List<String> getDone() {
        return done;
    }

    public void setDone(List<String> done) {
        this.done = done;
    }
}

package com.example;

import java.util.List;

/**
 * Created by saviomuniz on 12/02/17.
 */

public class SubTasks {

    List<String> undone;
    List<String> done;

    public SubTasks(List<String> undone, List<String> done) {
        this.undone = undone;
        this.done = done;
    }

    public SubTasks() {
    }

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

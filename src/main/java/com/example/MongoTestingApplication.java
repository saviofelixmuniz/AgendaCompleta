package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.LinkedList;
import java.util.List;

@SpringBootApplication

public class MongoTestingApplication implements CommandLineRunner {

	@Autowired
	private TaskListRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(MongoTestingApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {

		repository.deleteAll();

        List<Task> list = new LinkedList<Task>();
        list.add(new Task("Fazer atividade","aewfiuawf","Alta","Casa",null,null));

		repository.save(new TaskList("cookie",list));

		System.out.println("Customers found with findAll():");
		System.out.println("------------------------------");
		for (TaskList lists:
			 repository.findAll()) {
			System.out.println(lists);
		}
	}
}

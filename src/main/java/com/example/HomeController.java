package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by saviomuniz on 12/02/17.
 */

@Controller
public class HomeController {
    @RequestMapping("/")
    public String index() {
        return "index.html";
    }
}

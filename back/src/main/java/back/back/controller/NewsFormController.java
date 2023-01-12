package back.back.controller;

import back.back.crawler.NewsCrawler;
import back.back.form.NewsForm;
import back.back.repository.NewsFormRepository;
import back.back.service.NewsFormService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class NewsFormController {
    private final NewsFormService service;

    @GetMapping("/news")
    public List<NewsForm> newsForm(@RequestParam String companyName) {
        NewsCrawler newsCrawler = new NewsCrawler(companyName);
        List<NewsForm> newsForms = service.findAll();

        return newsForms;
    }

    @GetMapping("/news/add")
    public String addData(@RequestParam String companyName) {
        NewsCrawler newsCrawler = new NewsCrawler(companyName);
        List<NewsForm> newsForms = null;
        try {
            newsForms = newsCrawler.titleParsing();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        service.saveAll(newsForms);
        return "ok";
    }
}

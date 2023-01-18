package back.back.controller;

import back.back.crawler.BuzzInfoCrawler;
import back.back.crawler.NewsCrawler;
import back.back.domain.financialratio.FinancialRatio;
import back.back.domain.News;
import back.back.service.CompanyService;
import back.back.service.NewsFormService;
import back.back.web.CompanyDto;
import back.back.web.HomeDto;
import back.back.web.MainPage;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class NewsFormController {
    private final NewsFormService service;
    private final CompanyService service2;
    private final ObjectMapper mapper;

    @GetMapping("/news")
    public List<News> newsForm(@RequestParam String companyName) {
        NewsCrawler newsCrawler = new NewsCrawler(companyName);
        List<News> news = service.findAll();
        return news;
    }

    @GetMapping("/news/add")
    public String addData(@RequestParam String companyName) {
        NewsCrawler newsCrawler = new NewsCrawler(companyName);
        List<back.back.domain.News> news = null;
        try {
            news = newsCrawler.titleParsing();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return "ok";
    }

    @GetMapping("/")
    public HomeDto home() {
       return service2.home();
    }

    @GetMapping("/test")
    public CompanyDto test(@RequestParam String companyName) throws JsonProcessingException {
        CompanyDto companyDto = service2.mainPage(companyName);
        String s = mapper.writeValueAsString(companyDto);
        System.out.println(s);
        return companyDto;
    }

    @GetMapping("/news/add2")
    public String addData2(@RequestParam String companyName) throws IOException {
        BuzzInfoCrawler crawler = new BuzzInfoCrawler();
        Map<String, FinancialRatio> ratio = crawler.findBuzzInfo2(companyName);
        NewsCrawler crawler2 = new NewsCrawler(companyName);
        List<back.back.domain.News> news = crawler2.titleParsing();
        MainPage save = service2.save(ratio, news, companyName);
        return "ok";
    }
}

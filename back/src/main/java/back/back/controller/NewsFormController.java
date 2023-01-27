package back.back.controller;

import back.back.crawler.BuzzInfoCrawler;
import back.back.crawler.NewsCrawler;
import back.back.domain.Company;
import back.back.domain.financialratio.FinancialRatio;
import back.back.domain.News;
import back.back.service.CompanyService;
import back.back.service.NewsFormService;
import back.back.web.CompanyDto;
import back.back.web.CompanyInfoPage;
import back.back.web.FinancialDto;
import back.back.web.HomeDto;
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

    @GetMapping("/")
    public HomeDto home(@RequestParam String categoryName) {
       return service2.home(categoryName);
    }

    @GetMapping("/test")
    public CompanyInfoPage test(@RequestParam String companyName) throws JsonProcessingException {
        CompanyDto companyDto = service2.mainPage(companyName);
        CompanyInfoPage companyInfoPage = new CompanyInfoPage(companyDto);
        return companyInfoPage;
    }


    @GetMapping("/news/add2")
    public Company addData2(@RequestParam String companyName) throws IOException {
        BuzzInfoCrawler crawler = new BuzzInfoCrawler();
        FinancialDto financialDto = crawler.findBuzzInfo2(companyName);

        NewsCrawler crawler2 = new NewsCrawler(companyName);
        List<News> news = crawler2.titleParsing();

        Company save = service2.save(financialDto, news, companyName);
        return save;
    }
}

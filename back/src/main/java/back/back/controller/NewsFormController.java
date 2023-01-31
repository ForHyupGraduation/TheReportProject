package back.back.controller;

import back.back.crawler.BuzzInfoCrawler;
import back.back.crawler.NewsCrawler;
import back.back.domain.Company;
import back.back.domain.News;
import back.back.service.CompanyService;
import back.back.web.CompanyDto;
import back.back.web.CompanyInfoPage;
import back.back.web.FinancialDto;
import back.back.web.HomeDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class NewsFormController {
    private final CompanyService service2;

    @GetMapping("/home")
    public HomeDto home(@RequestParam String categoryName) {
       return service2.home(categoryName);
    }

    @GetMapping("/test")
    public CompanyDto test(@RequestParam String companyName){
        CompanyDto companyDto = service2.mainPage(companyName);
        CompanyInfoPage companyInfoPage = new CompanyInfoPage(companyDto);
        return companyDto;
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

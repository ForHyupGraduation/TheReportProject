package back.back.controller;

import back.back.crawler.BuzzInfoCrawler;
import back.back.crawler.NewsCrawler;
import back.back.domain.Company;
import back.back.domain.News;
import back.back.request.SendRequest;
import back.back.service.CompanyService;
import back.back.web.CompanyDto;
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
public class CompanyController {
    private final CompanyService companyService;
    private final SendRequest sendRequest;

    @GetMapping("/home")
    public HomeDto home(@RequestParam String categoryName) {
       return companyService.home(categoryName);
    }

    @GetMapping("/test")
    public CompanyDto test(@RequestParam String companyName){
        CompanyDto companyDto = companyService.mainPage(companyName);
        companyDto.setSimpleInfos(companyService.findRelationCompany(companyDto.getCategoryName()));
        return companyDto;
    }


    @GetMapping("/test2")
    public CompanyDto test2(@RequestParam String companyName) {
        CompanyDto companyDto = companyService.mainPage(companyName);
        return null;
    }

    @GetMapping("/news/add2")
    public Company addData2(@RequestParam String companyName) throws IOException {
        BuzzInfoCrawler crawler = new BuzzInfoCrawler();
        FinancialDto financialDto = crawler.findBuzzInfo2(companyName);

        NewsCrawler crawler2 = new NewsCrawler(companyName);
        List<News> news = crawler2.titleParsing();

        Company save = companyService.save(financialDto, news, companyName);
        return save;
    }

    @GetMapping("/operate")
    public String operate() throws InterruptedException {
        sendRequest.sendRequest();
        return "ok";
    }
}

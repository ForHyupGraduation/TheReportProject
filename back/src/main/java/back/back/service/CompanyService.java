package back.back.service;

import back.back.domain.Company;
import back.back.domain.News;
import back.back.domain.financialratio.*;
import back.back.repository.CompanyRepository;
import back.back.repository.FinancialRepository;
import back.back.repository.NewsRepository;
import back.back.web.CompanyDto;
import back.back.web.MainPage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
public class CompanyService {
    private final CompanyRepository companyRepository;
    private final FinancialRepository financialRepository;
    private final NewsRepository newsRepository;
    public MainPage save(Map<String, FinancialRatio> ratio, List<News> newsForms, String companyName) {
        OperatingProfitMargin margin = (OperatingProfitMargin) ratio.get("영업이익률");
        OperatingProfit profit = (OperatingProfit) ratio.get("영업이익");
        Revenue revenue = (Revenue) ratio.get("매출액");
        NetProfit netProfit = (NetProfit) ratio.get("당기순이익");
        financialRepository.save(margin, profit, revenue, netProfit);
        Company company = new Company();
        company.setCompanyName(companyName);

        for (News news : newsForms) {
            company.addNews(news);
        }

        company.setRevenue(revenue);
        company.setOperatingProfit(profit);
        company.setNetProfit(netProfit);
        company.setOperatingProfitMargin(margin);
        companyRepository.save(company);

        MainPage mainPage = new MainPage();
        mainPage.setCompanyName(company.getCompanyName());
        mainPage.setNews(company.getNews());
        mainPage.setNetProfit(company.getNetProfit());
        mainPage.setRevenue(company.getRevenue());
        mainPage.setOperatingProfitMargin(company.getOperatingProfitMargin());

        return mainPage;
    }

    public CompanyDto mainPage(String companyName) {
        CompanyDto companyDto = companyRepository.findByCompanyName(companyName);
        return companyDto;
    }

}

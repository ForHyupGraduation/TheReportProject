package back.back.service;

import back.back.csvFileReader.CsvFileReader;
import back.back.domain.Company;
import back.back.domain.News;
import back.back.domain.financialratio.*;
import back.back.domain.growth.GrowthRatio;
import back.back.repository.CompanyRepository;
import back.back.repository.FinancialRepository;
import back.back.repository.NewsRepository;
import back.back.web.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CompanyService {
    private final CompanyRepository companyRepository;
    private final FinancialRepository financialRepository;
    private final NewsRepository newsRepository;
    private final CsvFileReader reader;

    public Company save(FinancialDto financialDto, List<News> newsForms, String companyName) {

        Map<String, FinancialRatio> ratio = financialDto.getFinancialRatioMap();

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
        company.setCompanyName(companyName);
        company.setCategoryName(financialDto.getCategoryName());
        company.setCategoryCode(financialDto.getCompanyCode());
        GrowthRatio growthRates = reader.readGrowthRatio("growthRates", company.getCategoryName(), company.getCategoryCode());
        company.setGrowthRatio(growthRates);
        company.setGrowthPoint((int)Math.round(growthRates.getSalesGrowthRate()* 100));

        companyRepository.save(company);

        return company;
    }

    public HomeDto home(String categoryName) {
        List<Company> company = companyRepository.findAll(categoryName);
        HomeDto homeDto = new HomeDto();
        for (Company company1 : company) {
            homeDto.getSimpleInfos().add(new CompanySimpleInfo(company1.getCompanyName(),
                    company1.getGrowthPoint(), company1.getInterestPoint(), company1.getGrowthRatio().getSalesGrowthRate(),
                    company1.getGrowthRatio().getOperatingProfitGrowthRate()));
        }
        return homeDto;
    }


    public CompanyDto mainPage(String companyName) {
        List<Company> companies = companyRepository.findByCompanyName(companyName);
        CompanyDto collect = companies.stream().map(company -> new CompanyDto(company))
                .findFirst()
                .get();
        return collect;
    }

}

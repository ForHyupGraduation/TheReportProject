package back.back.service;

import back.back.csvFileReader.CsvFileReader;
import back.back.domain.Company;
import back.back.domain.News;
import back.back.domain.financialratio.*;
import back.back.domain.ratio.NormalizedGrowthRatio;
import back.back.domain.ratio.NormalizedInterestRatio;
import back.back.domain.ratio.PostAndTrading;
import back.back.repository.CompanyRepository;
import back.back.repository.FinancialRepository;
import back.back.web.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CompanyService {
    private final CompanyRepository companyRepository;
    private final FinancialRepository financialRepository;
    private final CsvFileReader reader;

    public Company save(FinancialDto financialDto, List<News> news, String companyName) {
        Company company = new Company();

        company.setCompanyName(companyName);
        company.setCategoryName(financialDto.getCategoryName());
        company.setCompanyCode(financialDto.getCompanyCode());

        company.setSales(financialDto.getSales());
        company.setOperatingProfit(financialDto.getOperatingProfit());
        company.setNormalizedGrowthRatio(financialDto.getGrowthRates());
        company.addPostAndTradings(financialDto.getPostAndTradings());
        company.addInterestRate(financialDto.getNormalizedInterestRatios());
        company.setMinMaxRatio(financialDto.getMinMaxRatio());
        company.addNews(news);
        company.setGrowthPoint(100);
        company.setInterestPoint(getInterestPoint(financialDto));
        companyRepository.save(company);

        return company;
    }

    public List<CompanySimpleInfo> getSimpleCompanyInfo(String categoryName) {

        return companyRepository.findAllByCategoryName(categoryName)
                .stream()
                .map(company -> new CompanySimpleInfo(company))
                .collect(Collectors.toList());
    }

    private int getInterestPoint(FinancialDto financialDto) {
        PostAndTrading postAndTrading = financialDto.getPostAndTradings()
                .stream()
                .limit(1)
                .findFirst()
                .get();

        System.out.println("postAndTrading.getDate() = " + postAndTrading.getDate());

        Double todayPost = postAndTrading.getPostPerDay();
        Double todayVolume = postAndTrading.getTradingPerDay();

        Double maxPosts = financialDto.getMinMaxRatio().getMaxPosts();
        Double minPosts = financialDto.getMinMaxRatio().getMinPosts();
        Double maxVolume = financialDto.getMinMaxRatio().getMaxVolume();
        Double minVolume = financialDto.getMinMaxRatio().getMinVolume();

        Double positionA = (todayPost - minPosts) / (maxPosts - minPosts);
        Double positionB = (todayVolume - minVolume) / (maxVolume - minVolume);
        return (int)((positionA + positionB) / 2 * 100) ;
    }

    private Integer findTodayRatio(List<NormalizedInterestRatio> normalizedInterest) {
        LocalDate today = LocalDate.now();

        Double aDouble = normalizedInterest.stream()
                .filter(ratio -> ratio.getDate().equals(today.toString()))
                .map(ratio -> ratio.getPostPerDay() * 100 + ratio.getTradingPerDay() * 100)
                .findFirst()
                .orElse(null);
        return aDouble.intValue();
    }


    private Integer findLatestRatio(List<NormalizedInterestRatio> normalizedInterest) {
        Double aDouble = normalizedInterest.stream()
                .map(ratio -> ratio.getPostPerDay() * 100 + ratio.getTradingPerDay() * 100)
                .findFirst()
                .orElse(null);
        return aDouble.intValue();
    }


    public List<RelationCompanyListDto> findRelationCompany(String categoryName) {
        List<Company> companies = companyRepository.findAllByCategoryName(categoryName);
        return companies.stream()
                .map(company -> new RelationCompanyListDto(company))
                .collect(Collectors.toList());
    }

    public HomeDto home(String categoryName) {
        List<Company> company = companyRepository.findAllByCategoryName(categoryName);
        HomeDto homeDto = new HomeDto();
        for (Company company1 : company) {
            homeDto.getSimpleInfos().add(new CompanySimpleInfo(company1.getCompanyName(),
                    company1.getGrowthPoint(), company1.getInterestPoint(), company1.getNormalizedGrowthRatio().getAverageSalesGrowthRate(),
                    company1.getNormalizedGrowthRatio().getAverageOperatingProfitsGrowthRate()));
        }
        homeDto.setCategoryName(categoryName);
        return homeDto;
    }

    public CompanyDto mainPage(String companyName) {
        List<Company> companies = companyRepository.findByCompanyName(companyName);
        CompanyDto collect = companies.stream()
                .map(company -> new CompanyDto(company))
                .findFirst()
                .get();
        return collect;
    }
}

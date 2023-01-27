package back.back.web;

import back.back.domain.Company;
import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Revenue;

import back.back.web.news.NewsDto;
import back.back.web.news.NewsListDto;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class CompanyDto {
    private String companyName;
    private List<NewsListDto> news;
    private Revenue revenue;
    private NetProfit netProfit;
    private OperatingProfit operatingProfit;
    private OperatingProfitMargin margin;
    private Integer growthPoint;
    private Integer interestPoint;
    public CompanyDto() {
    }

    public CompanyDto(Company company) {
        this.companyName = company.getCompanyName();
        List<NewsListDto> collect = company.getNews().stream()
                .map(NewsListDto::new)
                .collect(Collectors.toList());
        this.news = collect;
        this.revenue = company.getRevenue();
        this.netProfit = company.getNetProfit();
        this.operatingProfit = company.getOperatingProfit();
        this.margin = company.getOperatingProfitMargin();
        this.growthPoint = company.getGrowthPoint();
        this.interestPoint = company.getInterestPoint();
    }

}

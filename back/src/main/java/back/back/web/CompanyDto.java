package back.back.web;

import back.back.domain.Company;
import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Sales;

import back.back.domain.ratio.PostAndTrading;
import back.back.service.CompanyService;
import back.back.web.news.NewsListDto;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class CompanyDto {
    private String companyName;
    private String categoryName;
    private Integer growthPoint;
    private Integer interestPoint;
    private List<InterestRatioDto> interestRatioDtos; //
    private List<NewsListDto> news;
//    private List<PostAndTradingDto> postAndTradings;
    private List<CompanySimpleInfo> companySimpleInfos;
    private SalesDto sales;
    private OperatingProfitDto operatingProfit;

    public CompanyDto() {
    }

    public CompanyDto(Company company) {
        this.companyName = company.getCompanyName();
        this.categoryName = company.getCategoryName();
        List<NewsListDto> collect = company.getNews().stream()
                .map(NewsListDto::new)
                .collect(Collectors.toList());
        this.news = collect;

        this.sales = new SalesDto(company.getSales());
        this.operatingProfit = new OperatingProfitDto(company.getOperatingProfit());

        this.growthPoint = company.getGrowthPoint();
        this.interestPoint = company.getInterestPoint();

        this.interestRatioDtos = company.getPostAndTradings()
                .stream().map(ratio -> new InterestRatioDto(ratio, company.getMinMaxRatio()))
                .collect(Collectors.toList());
//
//        this.postAndTradings = company.getPostAndTradings()
//                .stream()
//                .limit(5)
//                .map(postAndTrading -> new PostAndTradingDto(postAndTrading))
//                .collect(Collectors.toList());
    }
}

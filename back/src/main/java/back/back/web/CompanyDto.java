package back.back.web;

import back.back.domain.News;
import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Revenue;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Data
public class CompanyDto {
    private String companyName;
    private List<News> news;
    private Revenue revenue;
    private NetProfit netProfit;
    private OperatingProfit operatingProfit;
    private OperatingProfitMargin margin;
    public CompanyDto() {
    }

    public CompanyDto(String companyName, List<News> news, Revenue revenue, NetProfit netProfit , OperatingProfit profit, OperatingProfitMargin margin) {
        this.companyName = companyName;
        this.news = news;
        this.revenue = revenue;
        this.netProfit = netProfit;
        this.operatingProfit = profit;
        this.margin = margin;
    }

    public void addNews(News news) {
        this.news.add(news);
    }

    public void printNews() {
        for (News news1 : news) {
            System.out.println("news1 " + news1.getTitle());
        }
    }
}

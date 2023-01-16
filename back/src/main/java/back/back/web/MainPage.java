package back.back.web;

import back.back.domain.News;
import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Revenue;

import java.util.List;

public class MainPage {

    private String companyName;
    private NetProfit netProfit;
    private OperatingProfitMargin operatingProfitMargin;
    private Revenue revenue;
    private List<News> news;

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public NetProfit getNetProfit() {
        return netProfit;
    }

    public void setNetProfit(NetProfit netProfit) {
        this.netProfit = netProfit;
    }

    public OperatingProfitMargin getOperatingProfitMargin() {
        return operatingProfitMargin;
    }

    public void setOperatingProfitMargin(OperatingProfitMargin operatingProfitMargin) {
        this.operatingProfitMargin = operatingProfitMargin;
    }

    public Revenue getRevenue() {
        return revenue;
    }

    public void setRevenue(Revenue revenue) {
        this.revenue = revenue;
    }

    public List<News> getNews() {
        return news;
    }

    public void setNews(List<News> news) {
        this.news = news;
    }
}

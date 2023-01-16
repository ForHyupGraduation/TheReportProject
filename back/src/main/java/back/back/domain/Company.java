package back.back.domain;

import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Revenue;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.checkerframework.checker.units.qual.C;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private Long id;
    @Column(name = "company_name")
    private String companyName;

    @OneToMany(mappedBy = "company")
    @JsonManagedReference
    private List<News> news = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "net_profit_id")
    private NetProfit netProfit;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "operating_profit_id")
    private OperatingProfit operatingProfit;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "operating_profit_margin_id")
    private OperatingProfitMargin operatingProfitMargin;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "revenue_id")
    private Revenue revenue;

    private Integer growthPoint;

    private Integer interestPoint;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public List<News> getNews() {
        return news;
    }

    public void addNews(News news) {
        this.news.add(news);
        news.setCompany(this);
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", companyName='" + companyName + '\'' +
                ", news=" + news +
                ", netProfit=" + netProfit +
                ", operatingProfit=" + operatingProfit +
                ", operatingProfitMargin=" + operatingProfitMargin +
                ", revenue=" + revenue +
                ", growthPoint=" + growthPoint +
                ", interestPoint=" + interestPoint +
                '}';
    }

    public NetProfit getNetProfit() {
        return netProfit;
    }

    public void setNetProfit(NetProfit netProfit) {
        this.netProfit = netProfit;
    }

    public OperatingProfit getOperatingProfit() {
        return operatingProfit;
    }

    public void setOperatingProfit(OperatingProfit operatingProfit) {
        this.operatingProfit = operatingProfit;
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

    public Integer getGrowthPoint() {
        return growthPoint;
    }

    public void setGrowthPoint(Integer growthPoint) {
        this.growthPoint = growthPoint;
    }

    public Integer getInterestPoint() {
        return interestPoint;
    }

    public void setInterestPoint(Integer interestPoint) {
        this.interestPoint = interestPoint;
    }
}

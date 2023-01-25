package back.back.domain;

import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Revenue;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.checkerframework.checker.units.qual.C;

import java.util.ArrayList;
import java.util.List;

@Entity
@Setter @Getter
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private Long id;

    @Column(name = "company_name")
    private String companyName;

    private String categoryCode;

    private String categoryName;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
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

}

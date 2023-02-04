package back.back.domain;

import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Sales;
import back.back.domain.ratio.NormalizedGrowthRatio;
import back.back.domain.ratio.NormalizedInterestRatio;
import back.back.domain.ratio.PostAndTrading;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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

    private String companyCode;

    private String categoryName;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<PostAndTrading> postAndTradings = new ArrayList<>();


//
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "net_profit_id")
//    private NetProfit netProfit;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "operating_profit_margin_id")
//    private OperatingProfitMargin operatingProfitMargin;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<News> news = new ArrayList<>();

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<NormalizedInterestRatio> normalizedInterestRatios = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "revenue_id")
    private Sales sales;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "operating_profit_id")
    private OperatingProfit operatingProfit;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "growth_ratio_id")
    private NormalizedGrowthRatio normalizedGrowthRatio;


    @Embedded
    private MinMaxRatio minMaxRatio;

    private Integer growthPoint;

    private Integer interestPoint;

    public void addNews(List<News> news) {
        for (News news1 : news) {
            this.news.add(news1);
            news1.setCompany(this);
        }
    }

    public void addInterestRate(List<NormalizedInterestRatio> ratio) {
        for (NormalizedInterestRatio normalizedInterestRatio : ratio) {
            this.normalizedInterestRatios.add(normalizedInterestRatio);
            normalizedInterestRatio.setCompany(this);
        }
    }

    public void addPostAndTradings(List<PostAndTrading> postAndTradings) {
        for (PostAndTrading postAndTrading : postAndTradings) {
            this.postAndTradings.add(postAndTrading);
            postAndTrading.setCompany(this);
        }
    }
}

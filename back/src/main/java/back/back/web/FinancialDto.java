package back.back.web;

import back.back.domain.MinMaxRatio;
import back.back.domain.financialratio.FinancialRatio;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.Sales;
import back.back.domain.ratio.NormalizedGrowthRatio;
import back.back.domain.ratio.NormalizedInterestRatio;
import back.back.domain.ratio.PostAndTrading;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Setter @Getter
public class FinancialDto {

    private List<NormalizedInterestRatio> normalizedInterestRatios;
    private List<PostAndTrading> postAndTradings;
    private NormalizedGrowthRatio growthRates;
    private MinMaxRatio minMaxRatio;
    private Sales sales;
    private OperatingProfit operatingProfit;

    private final String companyCode; // 업종 코드
    private final String categoryName; // 업종

    // 1. categorycode -- #게임,
    // form <<<---->>> game; company join categorycode -- categoryName
}

package back.back.web;

import back.back.domain.financialratio.OperatingProfit;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OperatingProfitDto {
    private String operatingFourYearsAgo;
    private String operatingThreeYearsAgo;
    private String operatingTwoYearsAgo;
    private String operatingOneYearsAgo;

    public OperatingProfitDto(OperatingProfit operatingProfit) {
        operatingFourYearsAgo = operatingProfit.getOperatingProfitsFourYearsAgo();
        operatingThreeYearsAgo = operatingProfit.getOperatingProfitsThreeYearsAgo();
        operatingTwoYearsAgo = operatingProfit.getOperatingProfitsTwoYearsAgo();
        operatingOneYearsAgo = operatingProfit.getOperatingProfitsOneYearsAgo();
    }
}

package back.back.web;

import back.back.domain.financialratio.Sales;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SalesDto {
    private String salesFourYearsAgo;
    private String salesThreeYearsAgo;
    private String salesTwoYearsAgo;
    private String salesOneYearsAgo;


    public SalesDto(Sales sales) {
        salesOneYearsAgo = sales.getSalesOneYearsAgo();
        salesTwoYearsAgo = sales.getSalesTwoYearsAgo();
        salesThreeYearsAgo = sales.getSalesThreeYearsAgo();
        salesFourYearsAgo = sales.getSalesFourYearsAgo();
    }
}

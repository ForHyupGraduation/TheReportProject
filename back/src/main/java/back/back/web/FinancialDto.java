package back.back.web;

import back.back.domain.financialratio.FinancialRatio;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Map;

@RequiredArgsConstructor
@Setter @Getter
public class FinancialDto {
    private final Map<String, FinancialRatio> financialRatioMap;
    private final String companyCode; // 업종 코드
    private final String categoryName; // 업종
    // 1. categorycode -- #게임,
    // form <<<---->>> game; company join categorycode -- categoryName
}

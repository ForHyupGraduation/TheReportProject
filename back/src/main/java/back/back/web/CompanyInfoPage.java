package back.back.web;

import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class CompanyInfoPage {
    private CompanyDto companyDto;

    public CompanyInfoPage(CompanyDto companyDto) {
        this.companyDto = companyDto;
    }
}

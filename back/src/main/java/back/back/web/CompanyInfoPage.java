package back.back.web;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class CompanyInfoPage {
    CompanyDto companyDto;

    public CompanyInfoPage(CompanyDto companyDto) {
        this.companyDto = companyDto;
    }
}

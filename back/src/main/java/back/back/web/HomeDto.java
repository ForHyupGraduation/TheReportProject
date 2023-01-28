package back.back.web;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class HomeDto {
    private String categoryName;
    private List<CompanySimpleInfo> simpleInfos;

    public HomeDto() {
        simpleInfos = new ArrayList<>();
    }

    public List<CompanySimpleInfo> getSimpleInfos() {
        return simpleInfos;
    }

    public void setSimpleInfos(List<CompanySimpleInfo> simpleInfos) {
        this.simpleInfos = simpleInfos;
    }
}

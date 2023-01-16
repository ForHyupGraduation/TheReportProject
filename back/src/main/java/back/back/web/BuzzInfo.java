package back.back.web;

import back.back.domain.News;
import lombok.Data;

import java.util.List;

@Data
public class BuzzInfo {
    private List<News> newsForms;
    private BuzzIndex buzzIndex;
    public BuzzInfo() {
    }

    public BuzzInfo(List<News> newsForms, BuzzIndex buzzIndex) {
        this.newsForms = newsForms;
        this.buzzIndex = buzzIndex;
    }
}

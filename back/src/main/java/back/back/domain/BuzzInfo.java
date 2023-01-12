package back.back.domain;

import back.back.form.NewsForm;
import lombok.Data;

import java.util.List;

@Data
public class BuzzInfo {
    private List<NewsForm> newsForms;
    private BuzzIndex buzzIndex;
    public BuzzInfo() {
    }

    public BuzzInfo(List<NewsForm> newsForms, BuzzIndex buzzIndex) {
        this.newsForms = newsForms;
        this.buzzIndex = buzzIndex;
    }
}

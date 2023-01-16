package back.back.web;

import lombok.Data;

import java.util.List;
import java.util.Map;
@Data
public class BuzzIndex {
    private Map<String, List<String>> buzzInfoMap;
    private Map<String, String> empNumberInfo;

    public BuzzIndex(Map<String, List<String>> buzzInfoMap, Map<String, String> empNumberInfo) {
        this.buzzInfoMap = buzzInfoMap;
        this.empNumberInfo = empNumberInfo;
    }
}

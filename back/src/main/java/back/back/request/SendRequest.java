package back.back.request;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SendRequest {
    private List<String> strings = new ArrayList<>(
            Arrays.asList("밸로프", "위메이드플레이", "미스터블루", "티쓰리",
                    "드래곤플라이", "위메이드맥스", "한빛소프트", "크래프톤", "넵튠",
                    "미투젠", "엔씨소프트", "카카오게임즈", "위메이드", "액토즈소프트",
                    "액션스퀘어", "컴투스홀딩스", "스카이문스테크놀로지", "베스파", "코원플레이",
                    "썸에이지", "네오위즈홀딩스", "펄어비스", "더블유게임즈", "웹젠", "엠게임",
                    "넷마블", "미투온", "데브시스터즈", "컴투스", "조이시티", "룽투코리아",
                    "플레이위드", "모비릭스", "넥슨게임즈", "네오위즈")
    );

    private String requestURL = "http://localhost:8080/add/news";
    
    public void sendRequest() {
        try {
            URL url = new URL(requestURL);
            url.
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }
}

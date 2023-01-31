package back.back.csvFileReader;

import back.back.domain.ratio.GrowthRatio;
import back.back.domain.ratio.InterestRatio;
import com.opencsv.bean.CsvToBeanBuilder;
import org.springframework.stereotype.Component;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;

@Component
public class CsvFileReader {
    public GrowthRatio readGrowthRatio(String fileName, String categoryName, int companyCode) { // 263
        try {
            List<GrowthRatio> growthRatios = new CsvToBeanBuilder(new FileReader(growthPathResolver(fileName, categoryName)))
                    .withType(GrowthRatio.class)
                    .build()
                    .parse();

            return growthRatios.stream().filter(g -> g.getCategoryCode() == companyCode)
                    .findFirst()
                    .orElse(null);

        }catch(Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public List<InterestRatio> readInterestRatio(String fileName, int companyCode) {
        try {
            List<InterestRatio> parse = new CsvToBeanBuilder<InterestRatio>(new FileReader(interestPathResolver(fileName, companyCode)))
                    .withType(InterestRatio.class)
                    .build()
                    .parse();
            return parse;
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }


    private String interestPathResolver(String fileName, Integer companyCode) {
        return "DB/normalizedInterests/" + fileName + companyCode + ".csv";
    }

    private String growthPathResolver(String fileName, String categoryName) {
       Integer code = 0;

       if(categoryName.equals("게임엔터테인먼트")) {
           code = 263;
       }

        return "DB/normalizedGrowthRates/" + fileName + code + ".csv";
    }
}

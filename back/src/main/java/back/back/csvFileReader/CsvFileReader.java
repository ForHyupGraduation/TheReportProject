package back.back.csvFileReader;

import back.back.domain.growth.GrowthRatio;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.bean.CsvToBeanBuilder;
import org.springframework.stereotype.Component;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;

@Component
public class CsvFileReader {
    public GrowthRatio readGrowthRatio(String fileName, String categoryName, int companyCode) { // 263
        try {
            List<GrowthRatio> growthRatios = new CsvToBeanBuilder(new FileReader(pathResolver(fileName, categoryName)))
                    .withType(GrowthRatio.class)
                    .build()
                    .parse();

            return growthRatios.stream().filter(g -> g.getCategoryCode() == companyCode)
                    .findFirst()
                    .get();

        }catch(Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    private String pathResolver(String fileName, String categoryName) {
       Integer code = 0;
        if(categoryName.equals("게임엔터테인먼트")) {
            code = 263;
        }

        return "DB/growthDB/" + fileName + code + ".csv";
    }

    public static void main(String[] args) {
        CsvFileReader csvFileReader = new CsvFileReader();
        GrowthRatio growthRatio = csvFileReader.readGrowthRatio("DB/growthDB/growthRates263.csv", "삼성전자",225570);
        System.out.println("growthRatio.getOperatingProfitGrowthRate() = " + growthRatio.getOperatingProfitGrowthRate());

    }
}

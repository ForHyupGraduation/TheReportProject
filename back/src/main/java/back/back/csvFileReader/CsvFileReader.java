package back.back.csvFileReader;

import back.back.domain.MinMaxRatio;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.Sales;
import back.back.domain.ratio.PostAndTrading;
import back.back.domain.ratio.NormalizedGrowthRatio;
import back.back.domain.ratio.NormalizedInterestRatio;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.enums.CSVReaderNullFieldIndicator;
import org.springframework.stereotype.Component;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;

@Component
public class CsvFileReader {
    public NormalizedGrowthRatio readGrowthRatio(String categoryName, String companyCode) {
        try {
            List<NormalizedGrowthRatio> normalizedGrowthRatios = new CsvToBeanBuilder(new FileReader(growthPathResolver(categoryName)))
                    .withType(NormalizedGrowthRatio.class)
                    .build()
                    .parse();
            for (NormalizedGrowthRatio normalizedGrowthRatio : normalizedGrowthRatios) {
                System.out.println("growthRatio = " + normalizedGrowthRatio);
            }
            return normalizedGrowthRatios.stream()
                    .filter(g -> g.getCompanyCode().equals(companyCode))
                    .findFirst()
                    .orElse(null);
        } catch(Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public List<NormalizedInterestRatio> readInterestRatio(String companyCode) {
        try {
            List<NormalizedInterestRatio> parse = new CsvToBeanBuilder<NormalizedInterestRatio>(new FileReader(interestPathResolver(companyCode)))
                    .withType(NormalizedInterestRatio.class)
                    .withFieldAsNull(CSVReaderNullFieldIndicator.BOTH)
                    .build()
                    .parse();
            return parse;
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public List<PostAndTrading> postAndTrading(String companyCode) {
        try {
            return new CsvToBeanBuilder<PostAndTrading>(new FileReader("DB/interests/interest"+companyCode+".csv"))
                    .withType(PostAndTrading.class)
                    .withFieldAsNull(null)
                    .build()
                    .parse();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public OperatingProfit operatingProfit(String categoryName, String companyCode) {
        Integer code = 0;
        if(categoryName.equals("게임엔터테인먼트")) {
            code = 263;
        } else if(categoryName.equals("양방향미디어와서비스")) {
            code = 300;
        }
        System.out.println("code = " + code);

        try {
            OperatingProfit operatingProfit = new CsvToBeanBuilder<OperatingProfit>(new FileReader("DB/yearly/operatingProfits/operatingProfits" + code + ".csv"))
                    .withType(OperatingProfit.class)
                    .build()
                    .parse()
                    .stream()
                    .filter(oper -> oper.getCompanyCode().equals(companyCode))
                    .findFirst()
                    .orElse(null);

            System.out.println("operatingProfit.getOperatingFourYearsAgo() = " + operatingProfit.getOperatingProfitsFourYearsAgo());
            return operatingProfit;

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public Sales sales(String categoryName, String companyCode) {
        Integer code = 0;
        if(categoryName.equals("게임엔터테인먼트")) {
            code = 263;
        } else if(categoryName.equals("양방향미디어와서비스")) {
            code = 300;
        }

        try {

            System.out.println("fff");
            return new CsvToBeanBuilder<Sales>(new FileReader("DB/yearly/sales/sales"+ code +".csv"))
                    .withIgnoreEmptyLine(true)
                    .withType(Sales.class)
                    .build()
                    .parse()
                    .stream()
                    .filter(oper -> oper.getCompanyCode().equals(companyCode))
                    .findFirst()
                    .orElse(null);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }


    public MinMaxRatioDto readMinMaxRatio(String companyCode) {
        try {
          System.out.println("asd");
          return new CsvToBeanBuilder<MinMaxRatioDto>(new FileReader("DB/minMax.csv"))
                    .withType(MinMaxRatioDto.class)
                    .withFieldAsNull(CSVReaderNullFieldIndicator.BOTH)
                    .build()
                    .parse()
                    .stream()
                    .filter(ratio -> ratio.getCompanyCode().equals(companyCode))
                    .findFirst()
                    .orElse(null);
        }catch(FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    private String interestPathResolver(String companyCode) {
        return "DB/normalizedInterests/" + "interest" + companyCode + ".csv";
    }

    private String growthPathResolver(String categoryName) {
       Integer code = 0;
       if(categoryName.equals("게임엔터테인먼트")) {
           code = 263;
       } else if(categoryName.equals("양방향미디어와서비스")) {
           code = 300;
       }
        return "DB/normalizedGrowthRates/growthRates" + code + ".csv";
    }

    public static void main(String[] args) {
        CsvFileReader csvFileReader = new CsvFileReader();
        List<PostAndTrading> postAndTradings = csvFileReader.postAndTrading("020120");
        MinMaxRatioDto minMaxRatioDto = csvFileReader.readMinMaxRatio("020120");
        List<NormalizedInterestRatio> inter = csvFileReader.readInterestRatio("020120");


    }
}

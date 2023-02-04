package back.back.csvFileReader;

import com.opencsv.bean.CsvBindByName;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MinMaxRatioDto {

    @CsvBindByName(column = "companyName")
    private String companyName;

    @CsvBindByName(column = "companyCode")
    private String companyCode;

    @CsvBindByName(column = "minPosts")
    private Double minPosts;

    @CsvBindByName(column = "maxPosts")
    private Double maxPosts;

    @CsvBindByName(column = "minVolume")
    private Double minVolume;

    @CsvBindByName(column = "maxVolume")
    private Double maxVolume;


}

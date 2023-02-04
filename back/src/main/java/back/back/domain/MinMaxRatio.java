package back.back.domain;

import back.back.csvFileReader.MinMaxRatioDto;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor
@Getter
public class MinMaxRatio {
    private Double minPosts;

    private Double maxPosts;

    private Double minVolume;

    private Double maxVolume;

    public MinMaxRatio(MinMaxRatioDto dto) {
        maxVolume = dto.getMaxVolume();
        minVolume = dto.getMinVolume();
        minPosts = dto.getMinPosts();
        maxPosts = dto.getMaxPosts();
    }
}

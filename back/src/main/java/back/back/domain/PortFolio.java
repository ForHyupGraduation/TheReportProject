package back.back.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Setter @Getter
public class PortFolio {
    @Id
    @GeneratedValue
    @Column(name = "portfolio_id")
    private Long id;

    private Integer numOfData;

    private String companyName;

    private Integer price;

    private Integer count;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    private LocalDate createDate;

}

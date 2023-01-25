package back.back.domain;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Member {
    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String username;

    private String password; // 해쉬 함수가 들어와야함.

    @OneToMany(mappedBy = "member")
    private List<PortFolio> portFolios = new ArrayList<>();



}

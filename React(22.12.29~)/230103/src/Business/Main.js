import "./businessStyle.css";
import img01 from "../assets/images/sec01_img01.jpg";
import img02 from "../assets/images/sec01_img02.jpg";
import img03 from "../assets/images/sec01_img03.jpg";
import img04 from "../assets/images/sec01_img04.jpg";

function Main(props) {
  return (
    <article>
      <h2>BUSINESS</h2>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

      <ul className="business">
        <li className="businessList">
          <a href="#">
            <div className="businessimg">
              <img src={img01} alt="국내자원개발" />
            </div>
            <h3>
              <strong>국내자원개발</strong>Domestic resource
            </h3>
            <p>
              경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고
              있습니다.
            </p>
          </a>
        </li>
        <li className="businessList">
          <a href="#">
            <div className="businessimg">
              <img src={img02} alt="해외자원개발" />
            </div>
            <h3>
              <strong>해외자원개발</strong>Oversea resource
            </h3>
            <p>
              호주, 인도네시아를 거쳐 해외자원개발에 끊임없는 노력을 하고
              있습니다.
            </p>
          </a>
        </li>
        <li className="businessList">
          <a href="#">
            <div
              className="businessimg"
              style={{
                background: `url(${img03}) no-repeat 50% / cover`,
              }}
            ></div>
            <h3>
              <strong>엔지니어링사업</strong>Engineering
            </h3>
            <p>
              축적된 기술력과 지속적인 기술개발로 광산장비설계 및 제작, 각종
              Plant 설계 및 시공 기술을 보유하고 있습니다.
            </p>
          </a>
        </li>
        <li className="businessList">
          <a href="#">
            <div className="businessimg">
              <img src={img04} alt="임대사업" />
            </div>
            <h3>
              <strong>임대사업</strong>Building Lease
            </h3>
            <p>쾌적한 가무환경, 우수한 교통접근성은 경동빌딩의 자랑입니다.</p>
          </a>
        </li>
      </ul>

      <p className="more">
        <a href="#">View More</a>
      </p>
    </article>
  );
}

export default Main;

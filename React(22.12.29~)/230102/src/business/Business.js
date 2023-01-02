import React from "react";
import "./business.css";

function Business() {
  return (
    <article>
      <h1>BUSINESS</h1>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
      <table className="table">
        <thead>
          <tr>
            <td>
              <img
                src="http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg"
                alt="img1"
              />
            </td>
            <th>
              <img
                src="http://www.kyungdong.co.kr/ko/front/image/main/sec01_img02.jpg"
                alt="img2"
              />
            </th>
            <th>
              <img
                src="http://www.kyungdong.co.kr/ko/front/image/main/sec01_img03.jpg"
                alt="img3"
              />
            </th>
            <th>
              <img
                src="http://www.kyungdong.co.kr/ko/front/image/main/sec01_img04.jpg"
                alt="img4"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>국내지원개발</th>
            <th>해외자원개발</th>
            <th>엔지니어링사업</th>
            <th>임대사업</th>
          </tr>
          <tr>
            <th>Domestic resource</th>
            <th>Oversea resource</th>
            <th>Engineering</th>
            <th>Building Lease</th>
          </tr>

          <tr>
            <td>
              경동은 수십년간 축적된 경험과 강산운영 전반의 기술력을 보유하고
              있습니다.
            </td>

            <td>
              호주, 인도네시아를 거쳐 해외자원개발에 끊임없는 노력을 하고
              있습니다.
            </td>
            <td>
              축적된 기술력과 지속적인 기술개발로 강산장비설계 및 제작, 각종
              Plant 설계 및 시공 기술을 보유하고 있습니다.
            </td>
            <td>쾌적한 사무환경, 우수한 교통접근성은 경동빌딩의 자랑입니다.</td>
          </tr>
        </tbody>
      </table>

      <button>View More</button>
    </article>
  );
}

export default Business;

/**
 *       segments2: [
        {
          title: "남자",
          id: "M",
        },
        {
          title: "여자",
          id: "F",
        },
      ],
      Age: [
        {
          value: 10,
          text: "10대",
        },
        {
          value: 20,
          text: "20대",
        },
        {
          value: 30,
          text: "30대",
        },
        {
          value: 40,
          text: "40대",
        },
        {
          value: 50,
          text: "50대",
        },
        {
          value: 60,
          text: "60대",
        },
      ],
      Location: [
        {
          value: 1,
          text: "서울시 강남구",
        },
        {
          value: 2,
          text: "서울시 강동구",
        },
        {
          value: 3,
          text: "서울시 강북구",
        },
        {
          value: 4,
          text: "서울시 강서구",
        },
        {
          value: 5,
          text: "서울시 관악구",
        },
        {
          value: 6,
          text: "서울시 광진구",
        },
        {
          value: 7,
          text: "서울시 구로구",
        },
        {
          value: 8,
          text: "서울시 금천구",
        },
        {
          value: 9,
          text: "서울시 노원구",
        },
        {
          value: 10,
          text: "서울시 도봉구",
        },
        {
          value: 11,
          text: "서울시 동대문구",
        },
        {
          value: 12,
          text: "서울시 동작구",
        },
        {
          value: 13,
          text: "서울시 마포구",
        },
        {
          value: 14,
          text: "서울시 서대문구",
        },
        {
          value: 15,
          text: "서울시 서초구",
        },
        {
          value: 16,
          text: "서울시 성동구",
        },
        {
          value: 17,
          text: "서울시 성북구",
        },
        {
          value: 18,
          text: "서울시 송파구",
        },
        {
          value: 19,
          text: "서울시 양천구",
        },
        {
          value: 20,
          text: "서울시 영등포구",
        },
        {
          value: 21,
          text: "서울시 용산구",
        },
        {
          value: 22,
          text: "서울시 은평구",
        },
        {
          value: 23,
          text: "서울시 종로구",
        },
        {
          value: 24,
          text: "서울시 중구",
        },
        {
          value: 25,
          text: "서울시 중랑구",
        },
      ],
 */

const locations = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

const ages = {
  "10대": 10,
  "20대": 20,
  "30대": 30,
  "40대": 40,
  "50대": 50,
  "60대 이상": 60,
};

const genders = ["M", "F"];

const locationIds = {
  "강남 MICE 관광특구": 12795980,
  "동대문 관광특구": 25022134,
  "명동 관광특구": 7876521,
  "이태원 관광특구": 10753713,
  "잠실 관광특구": 23444676,
  "종로·청계 관광특구": 27383851,
  "홍대 관광특구": 17169006,
  "경복궁·서촌마을": 18937478,
  "광화문·덕수궁": 8234642,
  "창덕궁·종묘": 10771162,
  "DMC(디지털미디어시티)": 10993806,
  "창동 신경제 중심지": 1930818048,
  노량진: 27418138,
  "낙산공원·이화마을": 8253524,
  북촌한옥마을: 781129546,
  가로수길: 591186900,
  성수카페거리: 1913815654,
  "수유리 먹자골목": 26390807,
  "쌍문동 맛집거리": 7970225,
  압구정로데오거리: 7990409,
  여의도: 1662602781,
  "영등포 타임스퀘어": 11411449,
  "인사동·익선동": 467710256,
  "국립중앙박물관·용산가족공원": 8830150,
  남산공원: 8246129,
  뚝섬한강공원: 8136085,
  망원한강공원: 8126939,
  반포한강공원: 8142957,
  북서울꿈의숲: 11321061,
  서울대공원: 7939405,
  서울숲공원: 11331488,
  월드컵공원: 11346534,
  이촌한강공원: 8625698,
  잠실종합운동장: 8530688,
  잠실한강공원: 10952965,
};

export { locations, ages, genders, locationIds };

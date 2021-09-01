import http from "../http-common";

class DataService {
  getSegments() {
    return http.get('/segments?code=fDK8HZ03LUjOBYPoW9rN0NXm5pWKn2i8C/CpII4U72ApFeRQKxw4Tg==');
  }
  getChartsData(widgetId: number, segmentId: number, caseAge: number) {
    return http.get(`/chart-data/${widgetId}?segmentId=${segmentId}&caseAge=${caseAge}&code=fDK8HZ03LUjOBYPoW9rN0NXm5pWKn2i8C/CpII4U72ApFeRQKxw4Tg==`);
  }
}

export default new DataService();

import axios from "axios";

export default axios.create({
  baseURL: "https://dignisia-code-test.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});

//https://dignisia-code-test.azurewebsites.net/api/segments?code=fDK8HZ03LUjOBYPoW9rN0NXm5pWKn2i8C/CpII4U72ApFeRQKxw4Tg==
//https://dignisia-code-test.azurewebsites.net/api/chart-data/{widgetId}?segmentId={segmentId}&caseAge={caseAge}&code=fDK8HZ03LUjOBYPoW9rN0NXm5pWKn2i8C/CpII4U72ApFeRQKxw4Tg==

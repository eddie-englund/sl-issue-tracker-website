import { defineStore } from "pinia";
import axios from "axios";
import { DateTime } from "luxon";

interface Issue {
  id: string;
  description: string;
  created: string;
  vehicle: "tram" | "buss" | "train";
}

export const issueStore = defineStore({
  id: "issues",
  state: () => ({
    issues: [] as Issue[],
  }),
  getters: {
    async getPureIssues(): Promise<Issue[]> {
      console.log(import.meta.env.DEV, import.meta.env.PROD);
      const res = await axios.get(
        `${import.meta.env.VITE_API_HOST}/issue/get-all`
      );

      localStorage.setItem(
        "data",
        JSON.stringify({
          issues: res.data.data,
          created: DateTime.now(),
        })
      );
      this.issues = res.data.data;
      return res.data.data;
    },
    async getIssues(): Promise<Issue[]> {
      const dataStr = localStorage.getItem("data");
      const data = dataStr ? JSON.parse(dataStr) : await this.getPureIssues;

      if (!data && !data.length) {
        throw new Error("Something went wrong fetching the data!");
      }

      if (
        data.created &&
        DateTime.fromISO(data.created).diffNow("minutes").minutes < -1
      ) {
        const newData = await this.getPureIssues;
        return newData;
      } else return data.issues;
    },
  },
});

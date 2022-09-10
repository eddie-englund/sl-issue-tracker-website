import { defineStore } from "pinia";
import axios from "axios";
import { DateTime } from "luxon";

type Vehicle =
  | "buss"
  | "train"
  | "tram"
  | "buss-station"
  | "train-station"
  | "tram-station";

interface Issue {
  id: string;
  description: string;
  created: string;
  vehicle: Vehicle;
}

export const issueStore = defineStore({
  id: "issues",
  state: () => ({ issues: [] as Issue[] }),
  getters: {
    async getPureIssues(): Promise<{ issues: Issue[]; created: DateTime }> {
      const res = await axios.get(
        `${import.meta.env.VITE_API_HOST}/issue/get-all`
      );

      const created = DateTime.now();

      localStorage.setItem(
        "data",
        JSON.stringify({
          issues: res.data.data,
          created,
        })
      );
      this.issues = res.data.data;
      return {
        issues: res.data.data,
        created,
      };
    },
    async getIssues(): Promise<Issue[]> {
      const dataStr = localStorage.getItem("data");
      let data;

      if (dataStr) data = JSON.parse(dataStr);
      else data = await this.getPureIssues;

      if (!data && !data.length) {
        throw new Error("Something went wrong fetching the data!");
      }

      if (
        data.created &&
        DateTime.fromISO(data.created).diffNow("minutes").minutes < -1
      ) {
        const newData = await this.getPureIssues;
        return newData.issues;
      } else return data.issues;
    },
  },
});

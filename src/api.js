import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
  static token = null;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle.(CompanyDetail) */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }


  /** Get list of companies, optionally filtering by company name */

  static async getCompanies(filterName = undefined) {
    filterName = filterName === "" ? undefined : filterName;
    const res = await this.request("companies", { name: filterName });
    return res.companies;
  }


  /** Get list of jobs, optionally filtering by job title */

  static async getJobs(filterTitle = undefined) {
    filterTitle = filterTitle === "" ? undefined : filterTitle;
    const res = await this.request("jobs", { title: filterTitle });
    return res.jobs;
  }

  /** Sign in */

  static async logIn(userCredentials) {
    const res = await this.request("auth/token", userCredentials, "post");
    return res.token;
  }


  /** Sign up a new user (what is in userData??)*/

  static async signUp(userData) {
    const res = await this.request("auth/register", userData, "post");
    return res.token;
  }


  /** Update current user */

  static async updateUser(userData, username) {
    const res = await this.request(`users/${username}`, userData, "patch");
    return res.user;
  }

  /** Get user details for the current user */

  static async getCurrentUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default JoblyApi;
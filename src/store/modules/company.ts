import { defineStore } from "pinia";

export interface CompanyInfo {
  id?: string | number;
  companyName?: string;
  establishmentTime?: string;
  registeredCapital?: string;
  actualController?: string;
  financingRounds?: string;
  companyWebsite?: string;
  companyDescription?: string;
}

const useCompanyStore = defineStore("company", {
  state: () => ({
    companyInfo: {
      id: "",
      companyName: "",
      establishmentTime: "",
      registeredCapital: "",
      actualController: "",
      financingRounds: "",
      companyWebsite: "",
      companyDescription: "",
    } as CompanyInfo,
  }),
  actions: {
    setCompanyInfo(companyInfo: CompanyInfo) {
      this.companyInfo = companyInfo;
    },
    clearCompanyInfo() {
      this.companyInfo = {
        id: "",
        companyName: "",
        establishmentTime: "",
        registeredCapital: "",
        actualController: "",
        financingRounds: "",
        companyWebsite: "",
        companyDescription: "",
      };
    },
  },
});

export default useCompanyStore;

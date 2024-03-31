import { create } from "zustand";

const useDataStore = create((set) => ({
  copywriting: null,
  caseStudy: null,
  addCopywritingData: (data) => set({ copywriting: data }),
  addCaseStudyData: (data) => set({ caseStudy: data }),
}));

export default useDataStore;

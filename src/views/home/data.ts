type PersonalInformationType = {
  name?: string;
  sex?: number | string;
};

type TableDataType = {
  id: number | string;
  name: string;
};

type HomeDataType = {
  personalInformation: PersonalInformationType;
  tableData: readonly TableDataType[];
  customValue: string | boolean;
};

export const data = (): HomeDataType => {
  return {
    personalInformation: {},
    tableData: [],
    customValue: true,
  };
};

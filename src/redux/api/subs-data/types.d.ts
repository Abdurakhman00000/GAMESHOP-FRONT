namespace SUBS {
    export type GetSubsServicesResponse = {
      id: number;
      name: string;
      consoles: number[];
      choices_level: string;
      image: string;
      contents: {
        title: string;
        icon: string;
      }[];
      periods: {
        months: number;
        price: string;
      }[];
    }[];
  
    export type GetSubsServicesRequest = void;
  }
  
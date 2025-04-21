export namespace SUBS {
  type GetSubsServicesResponse = {
    id: number;
    name: string;
    consoles: Array<number>;
    choices_level: string;
    image: string;
    contents: Array<{
      title: string;
      icon: string;
    }>;
    periods: Array<{
      months: number;
      price: string;
    }>;
  }[];

  type GetSubsServicesRequest = void;
}
